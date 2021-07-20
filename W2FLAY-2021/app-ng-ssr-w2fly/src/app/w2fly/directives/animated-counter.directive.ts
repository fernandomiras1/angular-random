import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core'
import { Subject, timer } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

const DEFAULT_ANIMATION_SPEED = 8

@Directive({
  selector: '[appAnimatedCounter]',
})
export class AnimatedCounterDirective implements OnInit, OnDestroy {
  @Input('appAnimatedCounter') value: number

  @Input() delay = 0

  @Input() speed = DEFAULT_ANIMATION_SPEED

  private staticText: string

  private destroyed$ = new Subject<void>()

  private startingValue = 0

  private startingValueDecimal = 0

  constructor(private el: ElementRef<HTMLElement>, private render: Renderer2) {}

  ngOnInit() {
    if (this.el.nativeElement.textContent) {
      this.staticText = this.el.nativeElement.textContent
    }

    if (this.delay > 0) {
      this.setPropertyText(this.startingValue)
    }

    this.startTimer()
  }

  ngOnDestroy() {
    this.destroyed$.next()
    this.destroyed$.complete()
  }

  private startTimer() {
    timer(this.delay)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(_ => this.animate())
  }

  private get hasDecimal(): boolean {
    return this.getDecimalValuePortion(1) !== undefined
  }

  private getDecimalValuePortion(indexPosition): number {
    return parseFloat(this.value.toString().split('.')[indexPosition])
  }

  private animate(): void {
    if (this.value) {
      const start = () => {
        if (this.startingValue < Number(this.value)) {
          this.startingValue += 1
          this.setPropertyText(`${this.startingValue}${this.staticText || ''}`)
          this.startAnimated(start)
        } else if (this.hasDecimal) {
          if (this.startingValueDecimal < this.getDecimalValuePortion(1)) {
            this.startingValueDecimal += 1
            this.setPropertyText(
              `${this.getDecimalValuePortion(0)}.${this.startingValueDecimal}${this.staticText || ''}`,
            )
            this.startAnimated(start)
          }
        }
      }

      start()
    }
  }

  private startAnimated(fn): void {
    timer(this.speed)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(fn)
  }

  private setPropertyText(value: string | number): void {
    this.render.setProperty(this.el.nativeElement, 'textContent', value)
  }
}
