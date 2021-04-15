import { TestingModule } from './../../../../../../test/utils/utils';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromoListMobileComponent } from './promo-list.component';
import { SharedModule } from '../../../shared.module';

describe('PromoListMobileComponent', () => {
  let component: PromoListMobileComponent;
  let fixture: ComponentFixture<PromoListMobileComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        TestingModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoListMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit to openFilterDialog', () => {
    component.openFilterDialog();
    component.showFilter.subscribe(emmitted => expect(emmitted).toBeNull());
  });

  it('should emit to openFilterDialog', () => {
    component.loadMorePromotionsRequested.subscribe(res => expect(res).toBeFalsy());
    component.onLoadMorePromotions();
  });

});
