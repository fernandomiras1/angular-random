import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { NavigatorService } from '../../../../core/utils/services/navigator.service';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styles: [],
})
export class InfiniteScrollComponent implements OnInit, OnDestroy {

  @Output() scrolled = new EventEmitter();
  @ViewChild('anchor') anchor: ElementRef<HTMLElement>;

  private observer: IntersectionObserver;

  constructor(private host: ElementRef<HTMLElement>, private navigatorService: NavigatorService) { }

  get element() {
    return this.host.nativeElement;
  }

  ngOnInit() {
    if (this.navigatorService.isBrowser) {

      this.observer = new IntersectionObserver(([entry]) => {

        if (entry.isIntersecting) {
          this.scrolled.emit();
        }
      });
      this.observer.observe(this.anchor.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this.navigatorService.isBrowser) {
      this.observer.disconnect();
    }
  }
}
