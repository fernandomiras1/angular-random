import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCarouselDotComponent } from './promo-carousel-dot.component';

describe('PromoCarouselDotComponent', () => {
  let component: PromoCarouselDotComponent;
  let fixture: ComponentFixture<PromoCarouselDotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PromoCarouselDotComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoCarouselDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dotsCount length sould be 11', () => {
    component.dotsCount = 11;
    component.ngOnInit();
    expect(component.numbers.length).toBe(11);
  });
});
