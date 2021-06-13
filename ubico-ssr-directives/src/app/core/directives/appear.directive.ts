import {
  ElementRef, Output, Directive, AfterViewInit, OnDestroy, EventEmitter,
} from '@angular/core'
import { Subscription, fromEvent } from 'rxjs'
import { startWith } from 'rxjs/operators'

@Directive({
  selector: '[appear]',
})
export class AppearDirective implements AfterViewInit, OnDestroy {
  @Output() appear: EventEmitter<void> = new EventEmitter<void>()

  elementPos: number

  elementHeight: number

  scrollPos: number

  windowHeight: number

  subscriptionLists: Subscription[]

  constructor(private element: ElementRef) { }

  ngAfterViewInit() {
    this.subscribe()
  }

  ngOnDestroy() {
    this.unsubscribe()
  }

  saveDimensions() {
    this.elementPos = this.getOffsetTop(this.element.nativeElement)
    this.elementHeight = this.element.nativeElement.offsetHeight
    this.windowHeight = window.innerHeight
  }

  saveScrollPos() {
    this.scrollPos = window.scrollY
  }

  getOffsetTop(element: any) {
    let offsetTop = element.offsetTop || 0
    if (element.offsetParent) {
      offsetTop += this.getOffsetTop(element.offsetParent)
    }
    return offsetTop
  }

  checkVisibility() {
    if (this.isVisible()) {
      console.log('IS visible')
      // double check dimensions (due to async loaded contents, e.g. images)
      this.saveDimensions()
      if (this.isVisible()) {
        this.unsubscribe()
        console.log('EMITTTTTTTTTTT')
        this.appear.emit()
      }
    }
  }

  isVisible() {
    return this.scrollPos >= this.elementPos
    || (this.scrollPos + this.windowHeight) >= (this.elementPos + this.elementHeight)
  }

  subscribe() {
    this.subscriptionLists.push(fromEvent(window, 'scroll').pipe(startWith(1))
      .subscribe(() => {
        this.saveScrollPos()
        this.checkVisibility()
      }))
    this.subscriptionLists.push(fromEvent(window, 'resize').pipe(startWith(1))
      .subscribe(() => {
        this.saveDimensions()
        this.checkVisibility()
      }))
  }

  unsubscribe() {
    this.subscriptionLists.forEach(val => val.unsubscribe())
  }
}
