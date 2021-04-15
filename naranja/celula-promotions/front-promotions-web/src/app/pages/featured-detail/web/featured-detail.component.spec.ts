import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { promoMock } from '@promotions/mocks/promotions.mocks';
import { AppState } from '@root-store/root-store.reducer';
import { MockStore, TestingModule } from '@testing/utils/utils';

import { WindowService } from './../../../core/utils/services/window.service';
import { FeaturedDetailComponent } from './featured-detail.component';
import { ZumoComponentesModule } from '@shared/zumo-componentes.module';

import * as fromActionsFeaturedPromotion from '@promotions/store/featured-promotion.reducer';
import * as fromActionsFeaturedPromotionRule from '@promotions/store/featured-promotion-rule.reducer';
import * as fromPromotionReducer from '@promotions/store/promotion.reducer';
import * as fromPromotionsCountFeature from '@promotions/store/promotions-count/promotions-count.reducer';
import * as fromPromotionsFilteredFeature from '@promotions/store/promotions-filtered.reducer';
import * as fromPromotionsReducer from '@promotions/store/promotions.reducer';
import * as fromHistoryNavigationReducer from '@core/navigation/store/history-navigation/history-navigation.reducer';
import * as fromNavigationFeature from '@core/navigation/store/navigation.reducer';

describe('FeaturedDetailComponent - web', () => {
  let component: FeaturedDetailComponent;
  let fixture: ComponentFixture<FeaturedDetailComponent>;
  let store: MockStore<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedDetailComponent],
      imports: [
        TranslateModule.forRoot(),
        ZumoComponentesModule,
        TestingModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('navigation', combineReducers(fromNavigationFeature.reducer)),
        StoreModule.forFeature('history-navigation', combineReducers(fromHistoryNavigationReducer.reducer)),
        StoreModule.forFeature('promotions', combineReducers(fromPromotionsReducer.reducer)),
        StoreModule.forFeature('promotion', combineReducers(fromPromotionReducer.reducer)),
        StoreModule.forFeature('promotions-count', combineReducers(fromPromotionsCountFeature.reducer)),
        StoreModule.forFeature('featured-promotion', combineReducers(fromActionsFeaturedPromotion.reducer)),
        StoreModule.forFeature('featured-promotion-rule', combineReducers(fromActionsFeaturedPromotionRule.reducer)),
        StoreModule.forFeature('promotions-filtered', combineReducers(fromPromotionsFilteredFeature.reducer)),
      ],
      providers: [
        { provide: Store, useClass: MockStore },
        { provide: ActivatedRoute, useValue: { snapshot: { params: { id: '123' } } } },
        WindowService,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(inject([Store], (testStore: MockStore<AppState>) => {
    store = testStore;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedDetailComponent);
    component = fixture.componentInstance;
    component.promo = promoMock;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading, hide error and call dispatchActions method', () => {
    const spy = spyOn(component, 'dispatchActions').and.returnValue(false);
    component.retry();

    expect(component.loading).toBeTruthy();
    expect(component.error).toBeFalsy();
    expect(spy).toHaveBeenCalled();
  });
});
