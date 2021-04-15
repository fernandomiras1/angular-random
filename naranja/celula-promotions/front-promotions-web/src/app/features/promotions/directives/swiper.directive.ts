import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';

const ZERO = 0.000000000001;

@Directive({
  selector: '[appSwiper]',
  exportAs: 'appSwiper',
})
export class SwiperDirective implements OnInit {
  @Input() appSwiper = true;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2) {
  }

  isDown = false;
  initialPos: number = ZERO;
  lastPos: number = ZERO;
  swipeDistance: number = ZERO;
  firstSwipeDate = Date.now();

  @Output() moveSwipeRight: EventEmitter<any> = new EventEmitter<any>();
  @Output() moveSwipeLeft: EventEmitter<any> = new EventEmitter<any>();
  @Output() moveSwipeStart: EventEmitter<any> = new EventEmitter<any>();
  @Output() moveSwipeEnd: EventEmitter<any> = new EventEmitter<any>();
  @Output() swipeLeft: EventEmitter<any> = new EventEmitter<any>();
  @Output() swipeRight: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    this.moveSwipeEnd.subscribe(() => {

    });
    this.swipeLeft.subscribe(
      () => {
        this.appSwiper = false;
        setTimeout(
          () => {
            this.appSwiper = true;
          },
          250);
      });
    this.swipeRight.subscribe(
      () => {
        this.appSwiper = false;
        setTimeout(
          () => {
            this.appSwiper = true;
          },
          250);
      });
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: any) {
    if (!this.appSwiper) {
      return;
    }
    this.firstSwipeDate = Date.now();
    this.isDown = true;
    this.initialPos = event.clientX;
    this.swipeDistance = 0;
    this.moveSwipeStart.emit();
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: any) {
    if (!this.isDown) {
      return;
    }
    this.initialPos = this.lastPos = ZERO;
    this.isDown = false;

    if (this.swipeDistance > 50) {
      this.swipeLeft.emit();
    } else if (this.swipeDistance < -50) {
      this.swipeRight.emit();
    } else {
      this.moveSwipeEnd.emit();
    }
    this.swipeDistance = ZERO;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: any) {
    if (this.isDown) {
      const swipeFrameDistance = event.clientX - this.initialPos - this.lastPos;
      this.swipeDistance += swipeFrameDistance;
      this.lastPos = event.clientX - this.initialPos;

      if (swipeFrameDistance > 0) {
        this.moveSwipeLeft.emit(swipeFrameDistance);
      } else {
        this.moveSwipeRight.emit(swipeFrameDistance);
      }
    }
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: any) {
    if (!this.appSwiper) {
      return;
    }
    const touch = event.touches[0] || event.changedTouches[0];
    let swipeFrameDistance = touch.clientX - this.initialPos - this.lastPos;
    swipeFrameDistance = swipeFrameDistance < 30 ? swipeFrameDistance : 30;
    this.swipeDistance += swipeFrameDistance;
    this.lastPos = touch.clientX - this.initialPos;

    if (swipeFrameDistance > 0) {
      this.moveSwipeLeft.emit(swipeFrameDistance);
    } else {
      this.moveSwipeRight.emit(swipeFrameDistance);
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: any) {
    if (!this.appSwiper) {
      return;
    }
    const touch = event.touches[0] || event.changedTouches[0];
    this.firstSwipeDate = Date.now();
    this.initialPos = touch.clientX;
    this.swipeDistance = ZERO;
    this.moveSwipeStart.emit();
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: any) {
    this.initialPos = this.lastPos = ZERO;
    if (this.swipeDistance > 30) {
      this.swipeLeft.emit();
    } else if (this.swipeDistance < -30) {
      this.swipeRight.emit();
    } else {
      this.moveSwipeEnd.emit();
    }
    this.swipeDistance = ZERO;
  }
}
