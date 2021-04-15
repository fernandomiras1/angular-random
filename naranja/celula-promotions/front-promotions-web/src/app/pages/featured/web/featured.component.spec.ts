import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IFeaturedPromo, slideType } from '@core/models/featured-promotion.model';
import { IPromo } from '@core/models/promo.model';
import { Store } from '@ngrx/store';
import { PromoCardWebComponent } from '@promotions/components/web/promo-card-web/promo-card-web.component';
import { PromotionRulesService } from '@promotions/services/promotion-rules.service';
import { SharedModule } from '@shared/shared.module';

import { MockStore, TestingModule } from '../../../../../test/utils/utils';
import { AppState } from '../../../root-store/root-store.reducer';
import { WindowService } from './../../../core/utils/services/window.service';
import { NavigationService } from './../../../shared/services/navigation.service';
import { FeaturedComponent } from './featured.component';

xdescribe('FeaturedComponent', () => {
  let component: FeaturedComponent;
  let fixture: ComponentFixture<FeaturedComponent>;
  let store: MockStore<AppState>;
  let promoRuleServiceSpy;
  let navigationServiceSpy;
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
    promoRuleServiceSpy.getFullPayload.and.returnValue(featuredPromo);

    navigationServiceSpy = jasmine.createSpyObj('NavigationService', ['goBack']);

    TestBed.configureTestingModule({
      declarations: [FeaturedComponent, PromoCardWebComponent],
      imports: [
        TestingModule,
        SharedModule,
      ],
      providers: [
        { provide: Store, useClass: MockStore },
        { provide: PromotionRulesService, useValue: promoRuleServiceSpy },
        { provide: NavigationService, useValue: navigationServiceSpy },
        { provide: Router, useValue: spyRouter },
        WindowService,
      ],
    })
      .compileComponents();
  }));

  beforeEach(inject([Store], (testStore: MockStore<AppState>) => {
    store = testStore;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedComponent);
    component = fixture.componentInstance;
    component.promos = promosMock;
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

  it('goBack() should call navigationService', () => {
    component.goBack();
    expect(navigationServiceSpy.goBack).toHaveBeenCalled();
  });

  /* it('should be called mapState', () => {
     const spy = spyOn(component, 'dispatchActions');
     const spy2 = spyOn(component, 'getfullPayload');
     component.mapState();
     expect(spy).toHaveBeenCalled();
   });*/

});
