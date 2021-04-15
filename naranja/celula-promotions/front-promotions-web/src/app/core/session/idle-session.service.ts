import { Injectable } from '@angular/core';
import { Observable, fromEvent, merge, Subject, timer, Subscription, interval } from 'rxjs';
import { DocumentService } from '../utils/services/document.service';
import { WindowService } from '../utils/services/window.service';

@Injectable({
  providedIn: 'root',
})
export class IdleSessionService {

  private timerSubscription: Subscription;
  private idleSubscription: Subscription;
  private timeOutMilliSeconds: number;
  public expired$: Subject<boolean> = new Subject<boolean>();
  private idle$: Observable<any>;

  constructor(
    private _documentService: DocumentService,
    private _windowService: WindowService,
  ) { }

  public startWatching(timeOutSeconds): Observable<any> {
    this.idle$ = merge(
      fromEvent(this._documentService.nativeDocument, 'mousemove'),
      fromEvent(this._documentService.nativeDocument, 'click'),
      fromEvent(this._documentService.nativeDocument, 'mousedown'),
      fromEvent(this._documentService.nativeDocument, 'keypress'),
      fromEvent(this._documentService.nativeDocument, 'DOMMouseScroll'),
      fromEvent(this._documentService.nativeDocument, 'mousewheel'),
      fromEvent(this._documentService.nativeDocument, 'touchmove'),
      fromEvent(this._documentService.nativeDocument, 'MSPointerMove'),
      fromEvent(this._windowService.nativeWindow, 'mousemove'),
      fromEvent(this._windowService.nativeWindow, 'resize'),

    );

    this.timeOutMilliSeconds = timeOutSeconds * 1000;

    this.idleSubscription = this.idle$.subscribe((res) => {
      this.resetTimer();
    });

    this.startTimer(this.timeOutMilliSeconds);

    return this.expired$;
  }

  private startTimer(time): void {
    this.timerSubscription = timer(time).subscribe(() => {
      this.expired$.next(true);
    });
  }

  public resetTimer(): void {
    this.timerSubscription.unsubscribe();
    this.startTimer(this.timeOutMilliSeconds);
  }

  public stopTimer(): void {
    this.timerSubscription.unsubscribe();
    this.idleSubscription.unsubscribe();
  }
}
