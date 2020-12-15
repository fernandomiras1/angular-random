import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ViewManagerService {

  private showNewViewEmitter$ = new Subject<any>();
  public showNewView$ = this.showNewViewEmitter$.asObservable();

  public showNewView(payload: any): void {
    console.log(payload);
    this.showNewViewEmitter$.next(payload);
  }

}
