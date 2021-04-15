import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IFeaturedPromo, slideType } from '@core/models/featured-promotion.model';
import { IPromo } from '@core/models/promo.model';
import * as fromNavigationActions from '@core/navigation/store/navigation.actions';
import * as fromNavigationFeature from '@core/navigation/store/navigation.reducer';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import { PromotionRulesService } from '@promotions/services/promotion-rules.service';
import * as fromRoot from '@root-store/root-store.reducer';
import { SharedModule } from '@shared/shared.module';

import { TestingModule } from '../../../../../test/utils/utils';
import * as featuredPromotionRuleReducer from '../../../../app/features/promotions/store/featured-promotion-rule.reducer';
import { WindowService } from './../../../core/utils/services/window.service';
import { FeaturedComponent } from './featured.component';

const mockState = require('../../../../../test/utils/promotions.json');

xdescribe('FeaturedComponent', () => {
  let component: FeaturedComponent;
  let fixture: ComponentFixture<FeaturedComponent>;
  let promoRuleServiceSpy;
  let store: Store<fromNavigationFeature.NavigationState>;
  const spyRouter = jasmine.createSpyObj('Router', ['navigate']);
  const promosMock: IPromo[] = require('../../../../../test/utils/promotions.json');
  const featuredPromo: IFeaturedPromo = {
    payload: [
      {
        province: 'domain.province',
      },
      {
        category: 'domain.user.id',
      },
    ],
    dateFrom: '2020/02/01',
    dateTo: '2020/05/01',
    rules: [
      'rule4',
      'rule5',
    ],
    mainImageName: 'cuotas2.jpg',
    name: 'feature4',
    alt: '8 cuotas SIN INTERÉS! ',
    order: 5,
    description: '8 cuotas completamente sin interés en tu compra Naranja',
    id: 'bf10c99d5215cc4e02c69f49bd1c6fff',
    backImageName: 'interes.jpg',
    type: {
      description: slideType.DETAIL,
    },
  };

  beforeEach(async(() => {
    promoRuleServiceSpy = jasmine.createSpyObj('PromotionRulesService', ['getFullPayload']);
    TestBed.configureTestingModule({
      declarations: [FeaturedComponent],
      imports: [
        TestingModule,
        SharedModule,
        StoreModule.forRoot({
          ...fromRoot.reducers,
          feature: combineReducers(fromNavigationFeature.reducer, featuredPromotionRuleReducer.reducer),
        }),
      ],
      providers: [
        { provide: PromotionRulesService, useValue: promoRuleServiceSpy },
        { provide: Router, useValue: spyRouter },
        WindowService,
      ],
    })
      .compileComponents();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  afterEach(() => fixture.destroy());

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedComponent);
    component = fixture.componentInstance;
    component.promos = promosMock;
    component.selectedFeaturePromo = mockState[0];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be called ngOnInit', () => {
    const spy = spyOn(component, 'checkNavigationData');
    expect(spy).toHaveBeenCalled();
  });

  it('should be called onScroll', () => {
    component.onScroll();
    expect(component.promosRendered.length).toBe(8);
  });

  it('should be called retry', () => {
    const spy = spyOn(component, 'dispatchActions');
    component.retry();
    expect(spy).toHaveBeenCalled();
  });

  it('should be called getPaginatedPromos', () => {
    component.getPaginatedPromos(2);
    expect(component.promosRendered.length).toBe(2);
  });

  it('should be called dispatchActions', () => {
    const spy = spyOn(component, 'getfullPayload');
    component.selectedFeaturePromo = featuredPromo;
    component.dispatchActions();
    expect(spy).toHaveBeenCalled();
  });

  it('dispatchActions  else branch', () => {
    const spy = spyOn(component, 'getfullPayload');
    component.selectedFeaturePromo = null;
    component.dispatchActions();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should be called getHeaderImage', () => {
    component.selectedFeaturePromo = {
      payload: [
        {
          province: 'domain.province',
        },
        {
          category: 'domain.user.id',
        },
      ],
      dateFrom: '2020/02/01',
      dateTo: '2020/05/01',
      rules: [
        'rule4',
        'rule5',
      ],
      mainImageName: 'cuotas2.jpg',
      name: 'feature4',
      alt: '8 cuotas SIN INTERÉS! ',
      order: 5,
      description: '8 cuotas completamente sin interés en tu compra Naranja',
      id: 'bf10c99d5215cc4e02c69f49bd1c6fff',
      backImageName: 'interes.jpg',
      type: {
        description: slideType.DETAIL,
      },
    };

    expect(component.getHeaderImage()).toBe('interes.jpg');
  });

  it('should be called getfullPayload', () => {
    component.getfullPayload(featuredPromo);
    expect(promoRuleServiceSpy.getFullPayload).toHaveBeenCalled();
  });

  it('checkNavigationData else branch', () => {

    component.selectedFeaturePromo = mockState[3];
    const spy = spyOn(component, 'dispatchActions');
    jasmine.clock().install();
    const body = {
      componentName: 'SuggestedComponent',
      componentData: {

        promos: [],
        promosRendered: [],
        categoriesFiltered: [],
        featuredPromotions: [],
        selectedFeaturedPromo: mockState[0],
        lastIndexSlide: 0,
        provinceFiltered: '',
        localityFiltered: '',
        promosCount: null,
        isFilterApply: false,
        commerceNameFiltered: '',

      },
    };
    const action = new fromNavigationActions.SaveData(body);

    store.dispatch(action);
    component.checkNavigationData();

    jasmine.clock().tick(2010);
    jasmine.clock().uninstall();

    expect(spy).not.toHaveBeenCalled();
  });

  it('checkNavigationData should not call mapState', () => {
    const spy = spyOn(component, 'dispatchActions');
    component.checkNavigationData();
    expect(spy).not.toHaveBeenCalled();
  });

  it('checkNavigationData selectedFeaturePromo !== featuredNavData.selectedFeaturedPromotion', () => {
    const spy = spyOn(component, 'getPaginatedPromos');
    component.selectedFeaturePromo = null;
    component.checkNavigationData();
    expect(spy).toHaveBeenCalledWith(4);
  });

  it('ngAfterViewInit() should be called', () => {
    // @ts-ignore
    component.scrollPosition = 123;
    component.ngAfterViewInit();
    // @ts-ignore
    expect(component.scrollPosition).toEqual(123);
  });

  it('getHeaderImage() should return empty string', () => {
    component.selectedFeaturePromo = null;
    const res = component.getHeaderImage();
    expect(res).toEqual('');
  });

  it('checkNavigationData else branch no SuggestedComponent history data', () => {

    component.selectedFeaturePromo = mockState[3];
    const spy = spyOn(component, 'dispatchActions');
    jasmine.clock().install();
    const body = {

    };
    const action = new fromNavigationActions.SaveData(body);

    store.dispatch(action);
    component.checkNavigationData();

    jasmine.clock().tick(2010);
    jasmine.clock().uninstall();

    expect(spy).toHaveBeenCalled();
  });

  it('checkNavigationData else branch no FeaturedComponent history data', () => {

    component.selectedFeaturePromo = mockState[3];
    const spy = spyOn(component, 'dispatchActions');
    jasmine.clock().install();
    const body = {
      componentName: 'FeaturedComponent',
      componentData: {
        selectedFeaturedPromo: null,
      },
    };
    const action = new fromNavigationActions.SaveData(body);

    store.dispatch(action);
    component.checkNavigationData();

    jasmine.clock().tick(2010);
    jasmine.clock().uninstall();

    expect(spy).toHaveBeenCalled();
  });

  it('onErrorStateButtonPressed should call router navigate', () => {
    const router = TestBed.get(Router);
    component.onErrorStateButtonPressed();
    expect(router.navigate).toHaveBeenCalled();
  });

});
