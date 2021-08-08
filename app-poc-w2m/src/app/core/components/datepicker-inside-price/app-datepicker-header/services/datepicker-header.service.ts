import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class DatepickerHeaderService {
  public changedMonth$: Observable<Date>

  private changedMonthSubject: Subject<Date> = new Subject()

  constructor() {
    this.changedMonth$ = this.changedMonthSubject.asObservable()
  }

  public next = (date: Date) => this.changedMonthSubject.next(date)
}
