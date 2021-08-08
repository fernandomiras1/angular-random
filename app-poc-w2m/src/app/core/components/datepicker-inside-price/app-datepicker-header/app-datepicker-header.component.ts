import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core'
import { MatCalendar } from '@angular/material/datepicker'
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { DatepickerHeaderService } from './services/datepicker-header.service'

@Component({
  selector: 'app-datepicker-header',
  templateUrl: './app-datepicker-header.component.html',
  styleUrls: ['./app-datepicker-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppDatepickerHeaderComponent implements OnDestroy {
  @Output() activeDate = new EventEmitter<any>()

  private destroyed = new Subject<void>()

  constructor(
    private calendar: MatCalendar<Date>, private dateAdapter: DateAdapter<Date>,
    @Inject(MAT_DATE_FORMATS) private dateFormats: MatDateFormats, cdr: ChangeDetectorRef,
    private datepickerHeaderService: DatepickerHeaderService,
  ) {
    calendar.stateChanges
      .pipe(takeUntil(this.destroyed))
      .subscribe(() => cdr.markForCheck())
  }

  ngOnDestroy() {
    this.destroyed.next()
    this.destroyed.complete()
  }

  get periodLabel() {
    return this.dateAdapter
      .format(this.calendar.activeDate, this.dateFormats.display.monthYearLabel)
      .toLocaleUpperCase()
  }

  previousClicked() {
    this.calendar.activeDate = this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1)
    this.changedMonth()
  }

  nextClicked() {
    this.calendar.activeDate = this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1)
    this.changedMonth()
  }

  private changedMonth(): void {
    this.datepickerHeaderService.next(this.calendar.activeDate)
  }
}
