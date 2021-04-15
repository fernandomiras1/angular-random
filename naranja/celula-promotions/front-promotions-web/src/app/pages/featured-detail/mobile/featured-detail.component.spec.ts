import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { WindowService } from '@core/utils/services/window.service';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { promoMock } from '@promotions/mocks/promotions.mocks';
import { PromotionRulesService } from '@promotions/services/promotion-rules.service';

import * as fromRoot from '@root-store/root-store.reducer';
import { TestingModule } from '@testing/utils/utils';

import { FeaturedDetailComponent } from './featured-detail.component';
import { ZumoComponentesModule } from '@shared/zumo-componentes.module';

import * as fromActionsFeaturedPromotion from '@promotions/store/featured-promotion.reducer';
import * as fromActionsFeaturedPromotionRule from '@promotions/store/featured-promotion-rule.actions';
import * as fromFeaturedPromotionRule from '@promotions/store/featured-promotion-rule.reducer';
import * as fromPromotionReducer from '@promotions/store/promotion.reducer';
import * as fromPromotionsCountFeature from '@promotions/store/promotions-count/promotions-count.reducer';
import * as fromPromotionsFilteredFeature from '@promotions/store/promotions-filtered.reducer';
import * as fromPromotionsReducer from '@promotions/store/promotions.reducer';
import * as fromHistoryNavigationReducer from '@core/navigation/store/history-navigation/history-navigation.reducer';
import * as fromNavigationFeature from '@core/navigation/store/navigation.reducer';

const mockState = require('../../../../../test/utils/promotions.json');
describe('FeaturedDetailComponent - mobile', () => {
  let component: FeaturedDetailComponent;
  let fixture: ComponentFixture<FeaturedDetailComponent>;
  let store: Store<fromNavigationFeature.NavigationState>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

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
        StoreModule.forFeature('featured-promotion-rule', combineReducers(fromFeaturedPromotionRule.reducer)),
        StoreModule.forFeature('promotions-filtered', combineReducers(fromPromotionsFilteredFeature.reducer)),
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: { snapshot: { params: { id: '123' } } } },
        WindowService,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  afterEach(() => fixture.destroy());

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedDetailComponent);
    component = fixture.componentInstance;
    component.promo = promoMock;
    fixture.detectChanges();
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

  it('dispatchActions() should call router navigate', () => {
    const router = TestBed.get(Router);
    component.dispatchActions();
    expect(router.navigate).toHaveBeenCalled();
  });

  it('getfullPayload() should call promotionRulesService.getFullPayload', () => {
    const spy = spyOn(PromotionRulesService.prototype, 'getFullPayload').and.callFake(() => '');
    component.getfullPayload(mockState[0]);
    expect(spy).toHaveBeenCalled();
  });

  it('dispatchActions should dispatch fromActionsFeaturedPromotionRule.FetchPending', () => {
    component.selectedFeaturePromo = mockState[0];
    const body = { test: 'test' };
    spyOn(component, 'getfullPayload').and.returnValue(body);
    const action = new fromActionsFeaturedPromotionRule.FetchPending(body);
    component.dispatchActions();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('onErrorStateButtonPressed should call router navigate', () => {
    const router = TestBed.get(Router);
    component.onErrorStateButtonPressed();
    expect(router.navigate).toHaveBeenCalled();
  });
});
