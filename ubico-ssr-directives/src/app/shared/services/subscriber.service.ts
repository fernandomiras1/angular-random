import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SubscriberService<T> {
  protected observable= new Subject<T>()

  public next(item: T) {
    this.observable.next(item)
  }

  public subscribe(callback: (item: T) => void) {
    this.observable.subscribe(callback)
  }

  public destroy(): void{
    if (this.observable) {
      this.observable.unsubscribe()
    }
  }

  public complete(): void{
    this.observable.complete()
  }

  public getObservable(): Observable<T> {
    return this.observable.asObservable()
  }
}
