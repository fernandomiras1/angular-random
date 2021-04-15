import { Renderer2, Type } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IFeaturedPromo, slideType } from '@core/models/featured-promotion.model';

import { SwiperDirective } from '../../directives/swiper.directive';
import { PromoCarouselCardComponent } from './promo-carousel-card.component';

describe('PromoCarouselCardComponent', () => {
  let component: PromoCarouselCardComponent;
  let fixture: ComponentFixture<PromoCarouselCardComponent>;
  let renderer2: Renderer2;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PromoCarouselCardComponent, SwiperDirective],
      providers: [Renderer2],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoCarouselCardComponent);
    component = fixture.componentInstance;
    renderer2 = fixture.componentRef.injector.get<Renderer2>(Renderer2 as Type<Renderer2>);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should transition getter', () => {
    spyOnProperty(component, 'transition', 'get').and.returnValue(1);
    expect(component.transition).toBe(1);
  });

  it('should transition setter', () => {
    const spy = spyOnProperty(component, 'transition', 'set');
    component.transition = 1;
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should call moveTo', () => {
    const renderSpy = spyOn(renderer2, 'setStyle').and.callThrough();
    component.moveTo(100, 10);
    expect(renderSpy).toHaveBeenCalled();
  });

  it('should call moveBy', () => {
    const renderSpy = spyOn(renderer2, 'setStyle').and.callThrough();
    component.moveBy(100);
    expect(renderSpy).toHaveBeenCalled();
  });

  it('should call setzIndex', () => {
    const renderSpy = spyOn(renderer2, 'setStyle').and.callThrough();
    component.setzIndex(100);
    expect(renderSpy).toHaveBeenCalled();
  });

  it('should call fadeIn', () => {
    const renderSpy = spyOn(renderer2, 'setStyle').and.callThrough();
    component.fadeIn(100);
    expect(renderSpy).toHaveBeenCalled();
  });

  it('should call fadeOut', () => {
    const renderSpy = spyOn(renderer2, 'setStyle').and.callThrough();
    component.fadeOut(100);
    expect(renderSpy).toHaveBeenCalled();
  });

  it('should call disableTransition', () => {
    const renderSpy = spyOn(renderer2, 'setStyle').and.callThrough();
    component.disableTransition();
    expect(renderSpy).toHaveBeenCalled();
  });

  it('should call enableTransition', () => {
    const renderSpy = spyOn(renderer2, 'setStyle').and.callThrough();
    component.enableTransition();
    expect(renderSpy).toHaveBeenCalled();
  });

  it('should call goDetail', () => {
    const selectedSlide: IFeaturedPromo = {
      id: '1',
      description: 'test',
      alt: 'alt',
      backImageName: 'backimageName',
      mainImageName: 'mainImageName',
      name: 'feature',
      order: 1,
      payload: [{
        id: '0001',
      }],
      rules: [],
      type: {
        description: slideType.ARRAY,
      },
      dateFrom: '2019-02-02',
      dateTo: '2019-02-02',
    };
    component.slideSelect.subscribe(value => expect(value).toBe(selectedSlide));
    component.goDetail(selectedSlide);
  });

});
