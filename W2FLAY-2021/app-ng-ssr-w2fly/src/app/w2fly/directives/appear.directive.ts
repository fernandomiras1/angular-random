import { isPlatformBrowser } from '@angular/common'
import {
  ElementRef, Output, Directive, AfterViewInit, OnDestroy, EventEmitter, Inject, PLATFORM_ID,
} from '@angular/core'
import { Subscription, fromEvent } from 'rxjs'
import { startWith } from 'rxjs/operators'

@Directive({
  selector: '[appear]',
})
export class AppearDirective implements AfterViewInit, OnDestroy {
  @Output() appear: EventEmitter<void> = new EventEmitter<void>()

  private elementPos: number

  private elementHeight: number

  private scrollPos: number

  private windowHeight: number

  private subscriptionLists: Subscription[] = []

  constructor(private element: ElementRef,
              @Inject(PLATFORM_ID) private platform: string) { }

  ngAfterViewInit() {
    this.subscribe()
  }

  ngOnDestroy() {
    this.unsubscribe()
  }

  private saveDimensions(): void {
    this.elementPos = this.getOffsetTop(this.element.nativeElement)
    this.elementHeight = this.element.nativeElement.offsetHeight
    this.windowHeight = window.innerHeight
  }

  private saveScrollPos(): void {
    this.scrollPos = window.scrollY
  }

  private getOffsetTop(element: any): number {
    let offsetTop = element.offsetTop || 0
    if (element.offsetParent) {
      offsetTop += this.getOffsetTop(element.offsetParent)
    }
    return offsetTop
  }

  private checkVisibility(): void {
    if (this.isVisible()) {
      this.saveDimensions()
      this.unsubscribe()
      this.appear.emit()
    }
  }

  private isVisible(): boolean {
    return this.scrollPos >= this.elementPos
    || (this.scrollPos + this.windowHeight) >= (this.elementPos + this.elementHeight)
  }

  private subscribe(): void {
    if (isPlatformBrowser(this.platform)) {
      this.subscribeEvent('scroll')
      this.subscribeEvent('resize')
    }
  }

  private subscribeEvent(eventType: 'scroll' | 'resize'): void {
    this.subscriptionLists.push(fromEvent(window, eventType).pipe(startWith(1))
      .subscribe(() => {
        if (eventType === 'scroll') {
          this.saveScrollPos()
        } else {
          this.saveDimensions()
        }
        this.checkVisibility()
      }))
  }

  private unsubscribe(): void {
    this.subscriptionLists.forEach(val => val.unsubscribe())
  }
}
