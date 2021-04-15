import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLazyLoadDirective } from '../../directives/image-lazy-load.directive';
import { SwiperDirective } from '../../directives/swiper.directive';
import { PromoCarouselArrowComponent } from '../promo-carousel-arrow/promo-carousel-arrow.component';
import { PromoCarouselCardComponent } from '../promo-carousel-card/promo-carousel-card.component';
import { PromoCarouselDotComponent } from '../promo-carousel-dot/promo-carousel-dot.component';
import { PromoCarouselComponent } from './promo-carousel.component';
import { slideType, IFeaturedPromo } from '@core/models/featured-promotion.model';

@Component({
  template: `
            <app-promo-carousel [showDots]="true" [showArrows]="false" [infinite]="true"
                [autoPlay]="false">
                <app-promo-carousel-card>
                    <img [appImageLazyLoad]="promo.mainImageName">
                </app-promo-carousel-card>
                <app-promo-carousel-card>
                    <img [appImageLazyLoad]="promo.mainImageName">
                </app-promo-carousel-card>
                <app-promo-carousel-card>
                    <img [appImageLazyLoad]="promo.mainImageName">
                </app-promo-carousel-card>
            </app-promo-carousel>
        `,
})
class TestPromoCarouselComponent {
  promo: IFeaturedPromo =
    {
      id: '1',
      alt: '',
      backImageName: '',
      dateFrom: '',
      dateTo: '',
      description: '',
      name: '',
      mainImageName: '../../../../../assets/images/angular-logo.webp',
      order: 1,
      payload: [],
      rules: [],
      type: {
        description: slideType.DETAIL,
      },
    };
}

describe('PromoCarouselComponent', () => {
  let component: PromoCarouselComponent;
  let fixture: ComponentFixture<TestPromoCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestPromoCarouselComponent,
        PromoCarouselComponent,
        PromoCarouselCardComponent,
        PromoCarouselArrowComponent,
        PromoCarouselDotComponent,
        ImageLazyLoadDirective,
        SwiperDirective,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPromoCarouselComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should items length to be greater than zero', () => {
    expect(component.items.length).toBeGreaterThan(0);
  });

  it('should call slideTo()', () => {
    const spy = spyOn(component, 'slideTo');
    component.fade = false;
    component.slideTo(0);
    component.change.subscribe(value => expect(value).toBe(0));
    expect(spy).toHaveBeenCalled();
  });

  it('should call rotateRight()', () => {
    const spy = spyOn(component, 'disableTransition');
    component.fade = false;
    component.rotateRight();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should call rotateLeft()', () => {
    const spy = spyOn(component, 'disableTransition');
    component.fade = false;
    component.rotateLeft();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should call fadeTo()', () => {
    component.fade = true;
    component.fadeTo(1);
    component.change.subscribe(value => expect(value).toBe(1));
    expect(component.currentItemIndex).toBe(1);
  });

  it('should call fadeRight()', () => {
    const spy = spyOn(component, 'fadeTo');
    component.fade = true;
    component.fadeRight();
    expect(spy).toHaveBeenCalled();
    expect(component.currentItemIndex).toBe(1);
  });

  it('should call fadeLeft()', () => {
    const spy = spyOn(component, 'fadeTo');
    component.fade = true;
    component.fadeLeft();
    expect(spy).toHaveBeenCalled();
    expect(component.currentItemIndex).toBe(2);
  });

  it('should call rePosition()', () => {
    component.rePosition();
    expect(component.items).toBeDefined();
    expect(component.items.length).toBe(3);
  });

  it('should call next()', () => {
    const spyRight = spyOn(component, 'slideRight');
    component.next();
    expect(spyRight).toHaveBeenCalled();

    const spyLeft = spyOn(component, 'slideLeft');
    component.prev();
    expect(spyLeft).toHaveBeenCalled();
  });

  it('should call isItemFirst(0)', () => {
    expect(component.isItemFirst(0)).toBeTruthy();
  });

  it('should call isItemLast(2)', () => {
    expect(component.isItemLast(2)).toBeTruthy();
  });

  it('should call slideRight()', () => {
    const spyslideTo = spyOn(component, 'slideTo');

    component.fade = true;
    component.infinite = false;
    component.slideRight();
    expect(spyslideTo).toHaveBeenCalled();

    component.currentItemIndex = 1;
    component.infinite = true;
    component.slideRight();
    expect(spyslideTo).toHaveBeenCalled();

    const spyslideToPrevPosition = spyOn(component, 'slideToPrevPosition');
    component.currentItemIndex = 2;
    component.infinite = false;
    component.slideRight();
    expect(spyslideToPrevPosition).toHaveBeenCalled();

  });

  it('should call slideLeft()', () => {
    const spy = spyOn(component, 'slideToPrevPosition');
    component.fade = true;
    component.infinite = false;
    component.slideLeft();
    expect(spy).toHaveBeenCalled();

    const spy2 = spyOn(component, 'slideTo');
    component.infinite = true;
    component.slideLeft();
    expect(spy2).toHaveBeenCalled();

    component.currentItemIndex = 1;
    component.infinite = false;
    component.slideLeft();
    expect(spy2).toHaveBeenCalled();
  });

  it('should call slideTo() Left', () => {
    const spy = spyOn(component, 'rotateLeftTo');
    component.infinite = true;
    component.currentItemIndex = 1;
    component.slideTo(2);
    component.change.subscribe(value => expect(value).toBe(2));
    expect(spy).toHaveBeenCalled();
  });

  it('should call slideTo() Right', () => {
    const spyRotate = spyOn(component, 'rotateRightTo');
    component.infinite = true;
    component.currentItemIndex = 1;
    component.slideTo(0);
    component.change.subscribe(value => expect(value).toBe(0));
    expect(spyRotate).toHaveBeenCalled();
  });

  it('should call goTo(1)', () => {
    const spy = spyOn(component, 'slideTo');
    component.fade = false;
    component.goTo(1);
    expect(spy).toHaveBeenCalled();
  });

  it('should call goTo(1)', () => {
    const spy = spyOn(component, 'fadeTo');
    component.fade = true;
    component.goTo(1);
    expect(spy).toHaveBeenCalled();
  });

  it('should call slideToPrevPosition()', () => {
    const spy = spyOn(component, 'enableTransition');
    component.currentItemIndex = 1;
    component.slideToPrevPosition();
    expect(spy).toHaveBeenCalled();
  });
});
