import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoHorizontalGridWebComponent } from './promo-horizontal-grid.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { bussinesRuleMock } from '@promotions/mocks/promotions.mocks';

describe('PromoHorizontalGridComponent', () => {
  let component: PromoHorizontalGridWebComponent;
  let fixture: ComponentFixture<PromoHorizontalGridWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PromoHorizontalGridWebComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoHorizontalGridWebComponent);
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

  it('should scroll right', () => {
    component.scroll('right');
    expect(component).toBeTruthy();
  });

  it('should scroll left', () => {
    component.scroll('left');
    expect(component).toBeTruthy();
  });
});
