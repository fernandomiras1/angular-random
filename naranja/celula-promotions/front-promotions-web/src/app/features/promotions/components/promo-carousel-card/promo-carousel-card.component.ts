import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ImageLazyLoadDirective } from '../../directives/image-lazy-load.directive';
import { SwiperDirective } from '../../directives/swiper.directive';
import { IFeaturedPromo } from '../../../../core/models/featured-promotion.model';

@Component({
  selector: 'app-promo-carousel-card',
  templateUrl: './promo-carousel-card.component.html',
  styleUrls: ['./promo-carousel-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromoCarouselCardComponent {
  constructor(
    public renderer: Renderer2,
    public ref: ChangeDetectorRef,
  ) { }

  get transition() {
    return PromoCarouselCardComponent.transitionStyle;
  }
  set transition(transitionStyle) {
    PromoCarouselCardComponent.transitionStyle = transitionStyle;
  }
  static transitionStyle: any = {};
  @Input() slide: IFeaturedPromo;
  @Input() canSwipe = true;
  @Input() singleSlide = false;
  @Output() slideSelect = new EventEmitter<IFeaturedPromo>();

  @ViewChild('carouselItem') el: ElementRef;
  @ViewChild(SwiperDirective) swiper: SwiperDirective;
  @ContentChildren(ImageLazyLoadDirective) lazyLoadedImages: QueryList<ImageLazyLoadDirective>;
  speed: number;
  currentPosition = 0;
  position = 0;
  zIndex: number;

  moveTo(position: number, correctionPosition: number) {
    let newPosition = position;

    if (!this.singleSlide) {
      newPosition = position + correctionPosition;
    }

    this.renderer.setStyle(this.el.nativeElement, 'transform', `translate3d(${newPosition}px, 0px, 0px)`);
    this.renderer.setStyle(this.el.nativeElement, '-webkit-transform', `translate3d(${newPosition}px, 0px, 0px)`);
    this.renderer.setStyle(this.el.nativeElement, '-moz-transform', `translate3d(${newPosition}px, 0px, 0px)`);
    this.renderer.setStyle(this.el.nativeElement, '-o-transform', `translate3d(${newPosition}px, 0px, 0px)`);
    this.renderer.setStyle(this.el.nativeElement, '-ms-transform', `translate3d(${newPosition}px, 0px, 0px)`);
  }

  moveBy(distance: number) {
    this.renderer.setStyle(this.el.nativeElement, 'transform', `translate3d(${distance}px, 0px, 0px)`);
    this.renderer.setStyle(this.el.nativeElement, '-webkit-transform', `translate3d(${distance}px, 0px, 0px)`);
    this.renderer.setStyle(this.el.nativeElement, '-moz-transform', `translate3d(${distance}px, 0px, 0px)`);
    this.renderer.setStyle(this.el.nativeElement, '-o-transform', `translate3d(${distance}px, 0px, 0px)`);
    this.renderer.setStyle(this.el.nativeElement, '-ms-transform', `translate3d(${distance}px, 0px, 0px)`);
  }

  setzIndex(zIndex: number) {
    this.renderer.setStyle(this.el.nativeElement, 'z-index', zIndex);
  }

  disableTransition() {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'none');
    this.renderer.setStyle(this.el.nativeElement, '-moz-transition', 'none');
    this.renderer.setStyle(this.el.nativeElement, '-webkit-transition', 'none');
    this.renderer.setStyle(this.el.nativeElement, '-o-transition', 'none');
    this.renderer.setStyle(this.el.nativeElement, '-ms-transition', 'none');
  }

  enableTransition() {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform');
    this.renderer.setStyle(this.el.nativeElement, '-moz-transition', 'transform');
    this.renderer.setStyle(this.el.nativeElement, '-webkit-transition', 'transform');
    this.renderer.setStyle(this.el.nativeElement, '-o-transition', 'transform');
    this.renderer.setStyle(this.el.nativeElement, '-ms-transition', 'transform');

    this.renderer.setStyle(this.el.nativeElement, 'transition-duration', `${this.speed}ms`);
    this.renderer.setStyle(this.el.nativeElement, '-moz-transition-duration', `${this.speed}ms`);
    this.renderer.setStyle(this.el.nativeElement, '-webkit-transition-duration', `${this.speed}ms`);
    this.renderer.setStyle(this.el.nativeElement, '-o-transition-duration', `${this.speed}ms`);
    this.renderer.setStyle(this.el.nativeElement, '-ms-transition-duration', `${this.speed}ms`);
  }

  fadeOut(duration: number) {
    return new Promise(
      (resolve) => {
        this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
        setTimeout(
          () => {
            this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
            resolve();
          },
          duration);
      });
  }

  fadeIn(duration: number) {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    setTimeout(
      () => {
        this.renderer.setStyle(this.el.nativeElement, 'transition', `opacity ${duration}ms`);
        this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
      },
      0);
  }

  lazyLoad() {
    this.lazyLoadedImages
      .forEach((img) => {
        img.load();
      });
  }

  goDetail(selectedSlide: IFeaturedPromo) {
    this.slideSelect.emit(selectedSlide);
  }
}
