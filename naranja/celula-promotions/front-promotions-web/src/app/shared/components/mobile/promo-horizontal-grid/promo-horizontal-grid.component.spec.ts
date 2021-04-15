import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoHorizontalGridMobileComponent } from './promo-horizontal-grid.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { bussinesRuleMock } from '@promotions/mocks/promotions.mocks';

describe('PromoHorizontalGridComponent', () => {
  let component: PromoHorizontalGridMobileComponent;
  let fixture: ComponentFixture<PromoHorizontalGridMobileComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['url', 'navigate', 'replace']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PromoHorizontalGridMobileComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoHorizontalGridMobileComponent);
    component = fixture.componentInstance;
    component.rule = bussinesRuleMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emmit OpenRuleDetail', () => {
    spyOn(component.openRuleDetail, 'emit');
    component.emmitOpenRuleDetail();
    expect(component.openRuleDetail.emit).toHaveBeenCalled();
  });
});
