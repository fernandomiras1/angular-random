import {
  Component, OnInit, OnDestroy, ViewEncapsulation,
} from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { AppDatepickerHeaderComponent } from './app-datepicker-header/app-datepicker-header.component'
import { DatepickerHeaderService } from './app-datepicker-header/services/datepicker-header.service'


@Component({
  selector: 'datepicker-inside-price',
  templateUrl: './datepicker-inside-price.component.html',
  styleUrls: ['./datepicker-inside-price.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DatepickerInsidePriceComponent implements OnInit, OnDestroy {

  customHeader = AppDatepickerHeaderComponent

  public groupForm: FormGroup

  public dates = [
    {
      date: '2021-06-21',
      status: 'OK',
    },
    {
      date: '2021-06-28',
      status: 'OK',
    },
    {
      date: '2021-07-26',
      amount: 1239.00,
      status: 'OK',
    },
    {
      date: '2021-07-30',
      amount: 1281.00,
      status: 'OK',
    },
    {
      date: '2021-08-02',
      amount: 1281.00,
      status: 'OK',
    },
    {
      date: '2020-08-02',
      amount: 1281.00,
      status: 'OTRO AÑO - TEST',
    },
    {
      date: '2021-08-06',
      amount: 1281.00,
      status: 'OK',
    },
    {
      date: '2021-08-09',
      amount: 1281.00,
      status: 'OK',
    },
    {
      date: '2021-08-13',
      amount: 1281.00,
      status: 'OK',
    },
    {
      date: '2021-08-16',
      amount: 1281.00,
      status: 'OK',
    },
    {
      date: '2021-08-20',
      amount: 1233.00,
      status: 'OK',
    },
    {
      date: '2021-08-23',
      amount: 1197.00,
      status: 'OK',
    },
    {
      date: '2021-08-27',
      amount: 1156.00,
      status: 'OK',
    },
    {
      date: '2021-08-30',
      amount: 1156.00,
      status: 'OK',
    },
    {
      date: '2021-09-03',
      amount: 1038.00,
      status: 'OK',
    },
  ]

  public datesAlowed = [
    {
      date: '2021-07-23',
      status: 'OK',
    },
    {
      date: '2021-07-28',
      status: 'OK',
    },
    {
      date: '2021-07-30',

      status: 'OK',
    },
    {
      date: '2021-08-01',

      status: 'OK',
    },
  ]

  today = new Date()

  tomorrow = new Date(new Date().setDate(this.today.getDate() + 1))

  twoDaysAgo = new Date(new Date().setDate(this.today.getDate() - 2))

  nextWeek = new Date(new Date().setDate(this.today.getDate() + 9))

  someDateArray: Date[] = [
    this.tomorrow,
    this.twoDaysAgo,
    this.nextWeek,
  ]

  private destroyed = new Subject<void>()

  constructor(private formBuilder: FormBuilder,
              private datepickerHeaderService: DatepickerHeaderService) {}

  ngOnInit(): void {
    this.createForm()
    this.datepickerHeaderService.changedMonth$
      .pipe(takeUntil(this.destroyed))
      .subscribe((currentDate: Date) => this.updateCalendar(currentDate))
  }

  ngOnDestroy() {
    this.destroyed.next()
    this.destroyed.complete()
  }

  createForm(): void {
    this.groupForm = this.formBuilder.group({
      date: [''],
    })
  }

  toggle = () => this.updateCalendar()

  updateCalendar(currentDate?: Date) {
    const dateCalendar = currentDate || new Date()

    const datesFilter = this.dates
      .filter(item => item.amount
        && this.getMonth(item.date) === this.getMonth(dateCalendar)
        && this.getFullYear(item.date) === this.getFullYear(dateCalendar))
    console.log(datesFilter)

    setTimeout(() => {
      const cells = Array
        .from(document.querySelectorAll<HTMLDivElement>('.mat-calendar-content .mat-calendar-body-cell-content'))

      cells.forEach((item: HTMLDivElement) => {
        const c = item
        const date = datesFilter.find(d => new Date(d.date).getDate() === Number(c.innerText))
        if (date) {
          const { amount } = date
          c.innerHTML = `<div">${c.innerText}<div>${amount}\u20AC`
        }
      })
    })
  }

  public customFilter = (date: Date | null): boolean => this.datesAlowed
    .map(d => d.date)
    .some(d => {
      const parseDate = new Date(new Date(d).setDate(new Date(d).getDate() + 1))
      return parseDate.getDate() === new Date(date).getDate()
        && parseDate.getMonth() === date.getMonth()
        && parseDate.getFullYear() === date.getFullYear()
    })

  dateClass = (date: Date) => ([new Date('2021-07-28').getDate(),
    new Date('2021-07-21').getDate(), new Date('2021-07-25').getDate()]
    .includes(date.getDate()) ? 'highlight-dates' : undefined)

  private formatDate(date: Date) {
    const dd = String(date.getDate()).padStart(2, '0')
    const mm = String(date.getMonth() + 1).padStart(2, '0') // January is 0!
    const yyyy = date.getFullYear()
    return new Date(`${yyyy}-${mm}-${dd}`)
  }

  private getMonth = (date: Date | string): number => new Date(date).getMonth()

  private getFullYear = (date: Date | string): number => new Date(date).getFullYear()
}
