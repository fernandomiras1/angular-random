import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCarouselArrowComponent } from './promo-carousel-arrow.component';

describe('PromoCarouselArrowComponent', () => {
  let component: PromoCarouselArrowComponent;
  let fixture: ComponentFixture<PromoCarouselArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PromoCarouselArrowComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoCarouselArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onClick raise event', () => {
    expect(component.disabled).toBeTruthy();
    component.click.subscribe(value => expect(value).toBe(value));
    component.onClick();
  });

  it('onClick not raise event', () => {
    component.disabled = false;
    expect(component.disabled).toBeFalsy();
    component.onClick();
  });
});
