import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

import { PromoCarouselCardComponent } from '../promo-carousel-card/promo-carousel-card.component';
import { NavigatorService } from '@core/utils/services/navigator.service';

@Component({
  selector: 'app-promo-carousel',
  templateUrl: './promo-carousel.component.html',
  styleUrls: ['./promo-carousel.component.scss'],
})
export class PromoCarouselComponent implements OnInit, OnDestroy, AfterViewInit {
  private nextSubject: Subject<any> = new Subject<any>();
  private prevSubject: Subject<any> = new Subject<any>();
  private subscriptions: Subscription[] = [];

  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  @Input() height = '250px';
  @Input() width = 'auto';
  @Input() speed: number;
  @Input() autoPlay = true;
  @Input() autoPlaySpeed: number;

  @Input() infinite = true;
  @Input() fade = false;
  @Input() showDots = true;
  @Input() showArrows = true;
  @Input() canSwipe = true;
  @Input() enableDotClick: boolean;

  @ContentChildren(PromoCarouselCardComponent) items: QueryList<PromoCarouselCardComponent>;

  private _width: number;
  private _widthContainer = 0;
  private _postionCorrection = 0;
  currentItemIndex = 0;
  interval: any;

  private firstItemIndex: number;
  private lastItemIndex: number;

  constructor(private el: ElementRef, private navigatorService: NavigatorService) { }

  ngOnInit() {
    this.speed = this.speed || 500;
    this.autoPlaySpeed = this.autoPlaySpeed || 1500;
    if (this.autoPlay) {
      this.autoPlayFunction(true);
    }

    this.subscriptions.push(this.nextSubject.pipe(throttleTime(this.speed)).subscribe(() => {
      if (!this.fade) {
        this.slideLeft();
      } else {
        this.fadeLeft();
      }
    }));
    this.subscriptions.push(this.prevSubject.pipe(throttleTime(this.speed)).subscribe(() => {
      if (!this.fade) {
        this.slideRight();
      } else {
        this.fadeRight();
      }
    }));
    this.subscriptions.push(this.change.subscribe((index: number) => {
      const item = this.getItemByIndex(index);
      item.lazyLoad();
    }));

  }

  ngAfterViewInit() {
    this.el.nativeElement.style.height = this.height;
    this.el.nativeElement.style.width = this.width;

    if (this.items && this.items.length > 0) {
      this.change.emit(0);
      this._width = this.navigatorService.isBrowser ? this.items.first.el.nativeElement.offsetWidth : 1;
      this._widthContainer = this.navigatorService.isBrowser ? this.items.first.el.nativeElement.offsetParent.offsetWidth : 1;

      this._postionCorrection = (this._widthContainer - this._width) / 2;
    }
    this.firstItemIndex = 0;
    this.lastItemIndex = this.items.length - 1;

    if (!this.fade) {
      this.items.forEach((item, itemIndex) => {
        let totalDistanceSwiped = 0;
        item.canSwipe = this.canSwipe;
        item.speed = this.speed;
        item.position = this._width * itemIndex;
        item.currentPosition = item.position;
        item.disableTransition();
        item.moveTo(item.position, this._postionCorrection);

        this.subscriptions.push(item.swiper.moveSwipeLeft.subscribe((distance: number) => {
          totalDistanceSwiped += Math.abs(distance);
          const shortDistance = distance / Math.pow(totalDistanceSwiped, .4);
          if (itemIndex === this.firstItemIndex && this.infinite) {
            this.rotateRight();
          }
          this.items.forEach((itm, index) => {
            if ((itemIndex === this.firstItemIndex || (itemIndex === this.lastItemIndex && distance > 0))
                && !this.infinite) {
              itm.currentPosition += shortDistance;
            } else {
              itm.currentPosition += distance;
            }
            itm.moveTo(itm.currentPosition, this._postionCorrection);
          });
        }));

        this.subscriptions.push(item.swiper.moveSwipeRight.subscribe((distance: number) => {
          totalDistanceSwiped += Math.abs(distance);
          const shortDistance = distance / Math.pow(totalDistanceSwiped, .4);
          if (itemIndex === this.lastItemIndex && this.infinite) {
            this.rotateLeft();
          }
          this.items.forEach((itm, index) => {
            if ((itemIndex === this.lastItemIndex || (itemIndex === this.firstItemIndex && distance < 0))
                && !this.infinite) {
              itm.currentPosition += shortDistance;
            } else {
              itm.currentPosition += distance;
            }
            itm.moveTo(itm.currentPosition, this._postionCorrection);
          });
        }));

        this.subscriptions.push(item.swiper.swipeLeft.subscribe(() => {
          totalDistanceSwiped = 0;
          this.slideLeft();
        }));

        this.subscriptions.push(item.swiper.swipeRight.subscribe(() => {
          totalDistanceSwiped = 0;
          this.slideRight();
        }));

        this.subscriptions.push(item.swiper.moveSwipeEnd.subscribe(() => {
          totalDistanceSwiped = 0;
          this.enableTransition();
          this.slideToPrevPosition();
        }));

        this.subscriptions.push(item.swiper.moveSwipeStart.subscribe(() => {
          totalDistanceSwiped = 0;
          this.disableTransition();
        }));
      });
    } else {
      this.items.forEach((item, index) => {
        item.zIndex = this.items.length - index;
        item.canSwipe = this.canSwipe;
        item.setzIndex(item.zIndex);
      });
    }

  }

  next() {
    this.prevSubject.next();
  }

  prev() {
    this.nextSubject.next();
  }

  goTo(index: number) {
    if (!this.fade) {
      this.slideTo(index);
    } else {
      this.fadeTo(index);
    }
  }

  onSelectedDot(index: number) {
    this.goTo(index);
  }

  rotateRightTo(index: number) {
    while (index !== this.lastItemIndex) {
      this.rotateRight();
    }
  }

  rotateLeftTo(index: number) {
    while (index !== this.firstItemIndex) {
      this.rotateLeft();
    }
  }

  slideTo(index: number) {
    this.change.emit((index + this.items.length) % this.items.length);
    const steps = this.currentItemIndex - index;
    if (this.infinite) {
      if (steps > 0) {
        this.rotateRightTo(this.currentItemIndex);
      } else if (steps < 0) {
        this.rotateLeftTo(this.currentItemIndex);
      }
    }
    setTimeout(
      () => {
        this.enableTransition();
        this.items.forEach(
          (item, i) => {
            item.position += this._width * steps;
            item.currentPosition = item.position;
            item.moveTo(item.position, this._postionCorrection);
          });
        this.currentItemIndex = (index + this.items.length) % this.items.length;
      },
      50);
  }

  slideLeft() {
    if (!this.infinite) {
      if (this.currentItemIndex === 0) {
        this.slideToPrevPosition();
        return;
      }
    }
    this.slideTo(this.currentItemIndex - 1);
  }

  slideRight() {
    if (!this.infinite) {
      if (this.currentItemIndex === this.items.length - 1) {
        this.slideToPrevPosition();
        return;
      }
    }
    this.slideTo(this.currentItemIndex + 1);
  }

  slideToPrevPosition() {
    this.enableTransition();
    this.items.forEach((item) => {
      item.currentPosition = item.position;
      item.moveTo(item.position, this._postionCorrection);
    });
  }

  disableTransition() {
    this.items.forEach((item, index) => {
      item.disableTransition();
    });
  }

  enableTransition() {
    this.items.forEach((item, index) => {
      item.enableTransition();
    });
  }

  getItemByIndex(index: number) {
    return this.items.find((item, i) => {
      return i === index;
    });
  }

  rotateRightNTimes(n: number) {
    for (let i = 0; i < n; i += 1) {
      this.rotateRight();
    }
  }

  rotateLeftNTimes(n: number) {
    for (let i = 0; i < n; i += 1) {
      this.rotateLeft();
    }
  }

  rotateRight() {
    const firstItemRef = this.getItemByIndex(this.firstItemIndex);
    const lastItemRef = this.getItemByIndex(this.lastItemIndex);

    if (!this.fade) {
      lastItemRef.position = firstItemRef.position - this._width;
      lastItemRef.currentPosition = lastItemRef.position;
      lastItemRef.disableTransition();
      lastItemRef.moveTo(lastItemRef.position, this._postionCorrection);
      this.firstItemIndex = this.lastItemIndex;
      this.lastItemIndex = (this.lastItemIndex - 1 + this.items.length) % this.items.length;
    }
  }

  rotateLeft() {
    const firstItemRef = this.getItemByIndex(this.firstItemIndex);
    const lastItemRef = this.getItemByIndex(this.lastItemIndex);
    firstItemRef.position = lastItemRef.position + this._width;
    firstItemRef.currentPosition = firstItemRef.position;
    firstItemRef.disableTransition();
    firstItemRef.moveTo(firstItemRef.position, this._postionCorrection);
    this.lastItemIndex = this.firstItemIndex;
    this.firstItemIndex = (this.lastItemIndex + 1) % this.items.length;
  }

  fadeTo(index: number) {
    this.change.emit(index);
    const firstItem = this.getItemByIndex(this.currentItemIndex);
    const targetItem = this.getItemByIndex(index);
    targetItem.zIndex = firstItem.zIndex + 1;
    targetItem.setzIndex(targetItem.zIndex);
    targetItem.disableTransition();
    targetItem.fadeIn(this.speed);
    this.currentItemIndex = index;
  }

  fadeRight() {
    const newIndex = (this.currentItemIndex + 1) % this.items.length;
    this.fadeTo(newIndex);
    this.currentItemIndex = newIndex;
  }

  fadeLeft() {
    const newIndex = (this.currentItemIndex - 1 + this.items.length) % this.items.length;
    this.fadeTo(newIndex);
    this.currentItemIndex = newIndex;
  }

  isItemFirst(index: number) {
    return this.firstItemIndex === index;
  }

  isItemLast(index: number) {
    return this.lastItemIndex === index;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.rePosition();
  }

  rePosition() {
    if (this.items && this.items.length > 0) {
      this._width = this.items.first.el.nativeElement.offsetWidth;
    }
    const items = this.items.toArray();
    items.sort((item1, item2) => {
      if (item1.position > item2.position) {
        return 1;
      }
      if (item1.position < item2.position) {
        return -1;
      }
      return 0;
    });

    const currentItem = this.getItemByIndex(this.currentItemIndex);
    const currentItemIndex = items.indexOf(currentItem);
    for (let i = currentItemIndex; i < items.length + currentItemIndex; i += 1) {
      const item = items[(i + items.length) % items.length];
      item.position = ((i + items.length) % items.length - currentItemIndex) * this._width;
      item.disableTransition();
      item.moveTo(item.position, this._postionCorrection);
    }
  }

  ngOnDestroy() {
    this.subscriptions.map(item => item.unsubscribe());
  }

  autoPlayFunction(boolean) {
    if (this.autoPlay) {
      if (boolean) {
        this.interval = setInterval(
            () => {
              this.next();
            },
            this.autoPlaySpeed);
      } else {
        clearInterval(this.interval);
      }
    }
  }

}
