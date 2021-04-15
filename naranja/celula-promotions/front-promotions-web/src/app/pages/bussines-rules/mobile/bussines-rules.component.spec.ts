import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TransferStateModule } from '@app/core/transfer-state/transfer-state.module';
import { ZumoComponentesModule } from '@app/shared/zumo-componentes.module';
import { CoreModule } from '@core/core.module';
import { IFeaturedPromo, slideType } from '@core/models/featured-promotion.model';
import { IFilterBody } from '@core/models/filter-body.model';
import { IPaginationInfo } from '@core/models/pagination-info.model';
import * as fromHistoryNavigationActions from '@core/navigation/store/history-navigation/history-navigation.actions';
import * as fromNavigationFeature from '@core/navigation/store/navigation.reducer';
import { FilterModule } from '@filter/filter.module';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { promosMock } from '@promotions/mocks/promotions.mocks';
import { PromotionsModule } from '@promotions/promotions.module';
import { PromotionsService } from '@promotions/services/promotions.service';
import { TestingModule } from '@testing/utils/utils';

import { BussinesRulesMobileComponent } from './bussines-rules.component';

describe('BussinesRulesMobileComponent', () => {
  let component: BussinesRulesMobileComponent;
  let fixture: ComponentFixture<BussinesRulesMobileComponent>;
  let store: Store<fromNavigationFeature.NavigationState>;
  const promoServiceSpy = jasmine.createSpyObj('PromotionsService', ['getDaysCounter', 'setWithExpiry', 'getWithExpiry']);

  let storeSpy;
  const mockState = require('../../../../../test/utils/promotions.json');
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [BussinesRulesMobileComponent],
      imports: [
        CoreModule,
        ZumoComponentesModule,
        PromotionsModule,
        FilterModule,
        TestingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        TransferStateModule,
        BrowserTransferStateModule,
      ],
      providers: [
        { provide: PromotionsService, useValue: promoServiceSpy },
        { provide: ActivatedRoute, useValue: { snapshot: { params: { id: '123' } } } },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();

    store = TestBed.get(Store);
    const action = new fromHistoryNavigationActions.SaveData('BussinesRuleComponent');
    store.dispatch(action);
    storeSpy = spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinesRulesMobileComponent);
    component = fixture.componentInstance;
    component.promos = promosMock;
    component.loading = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call showFilters', () => {
    component.showFilters();
    expect(component.showFiltersMenu).toBeTruthy();
  });

  it('should call setFiltersValue and set parameter', () => {
    component.setFiltersValue(true);
    expect(component.showFiltersMenu).toBeTruthy();
  });

  it('apply filters', () => {
    const filter = {
      province: {},
      locality: {},
      category: ['MODA Y ACCESORIOS'],
    };
    const spy = spyOn(component, 'onFilterApplied');
    component.applyFilters(filter);
    expect(spy).toHaveBeenCalled();
    expect(component.showFiltersMenu).toBeFalsy();
  });

  it('should be generate img', () => {
    const mock: IFeaturedPromo[] = [
      {
        payload: [],
        dateFrom: '2020/03/30',
        dateTo: '2020/04/24',
        rules: ['rule1'],
        mainImageName: 'https://images.dev.promotions.us-east-1.awsnaranja.com/featured/mainImgDiferimiento_dsk.webp',
        name: 'feature1',
        alt: 'DIFERIMIENTO DE PAGO',
        order: 1,
        description: 'DISCO/JUMBO/VEA',
        id: '100000',
        backImageName: 'https://images.dev.promotions.us-east-1.awsnaranja.com/featured/backImgDiferimiento_dsk.webp',
        type: {
          description: slideType.ARRAY,
        },
      },
      {
        payload: [],
        dateFrom: '2020/03/30',
        dateTo: '2020/04/24',
        rules: ['rule1'],
        mainImageName: 'backImgSuper.webp',
        name: 'feature1',
        alt: 'DIFERIMIENTO DE PAGO',
        order: 1,
        description: 'DISCO/JUMBO/VEA',
        id: '100000',
        backImageName: 'backImgSuper.webp',
        type: {
          description: slideType.ARRAY,
        },
      }];
    component.setUrlImage(mock);
  });

  it('getPaginatedPromos should set loading to false', () => {
    component.getPaginatedPromos(promosMock.slice(0, 5));
    expect(component.loading).toBeFalsy();
  });

  it('openFilterDialog should set openFilter to true', () => {
    const spy = spyOn(component, 'saveNavigationData').and.callFake(() => { });
    component.openFilterDialog();
    expect(component.openFilter).toBeTruthy();
  });

  it('closeFilterDialog should set openFilter to false', () => {
    const spy = spyOn(component, 'saveNavigationData').and.callFake(() => { });
    component.closeFilterDialog();
    expect(component.openFilter).toBeFalsy();
  });

  it('isFilteredSearchActive should return false', () => {
    const res = component.isFilteredSearchActive();
    expect(res).toBeFalsy();
  });

  it('onSelectedSlide should set selectedSlideIndex ', () => {
    component.onSelectedSlide(0);
    expect(component.selectedSlideIndex).toEqual(0);
  });

  it('onCloseChip location type', () => {
    const spyOnFilterApplied = spyOn(component, 'onFilterApplied');
    component.commerceNameFiltered = 'test';
    component.onCloseChip('location');
    expect(spyOnFilterApplied).toHaveBeenCalled();
  });

  it('calculateNextSlideIndex should return 0 ', () => {
    component.featuredPromotions = Array(5);
    component.selectedSlideIndex = 6;
    const res = component.calculateNextSlideIndex();
    expect(res).toEqual(0);
  });

  it('calculateNextSlideIndex should return 4 ', () => {
    component.featuredPromotions = Array(5);
    component.selectedSlideIndex = 3;
    const res = component.calculateNextSlideIndex();
    expect(res).toEqual(4);
  });

  it('goToNextSlide should be called withlastSlideIndex = null', () => {
    component.lastSlideIndex = null;
    component.goToNextSlide();
    expect(component.lastSlideIndex).toBeFalsy();

  });

  it('goToNextSlide should be called withlastSlideIndex = 1', () => {
    component.lastSlideIndex = 1;
    // component.carousel = new PromoCarouselComponent({ nativeElement: {} } , );
    fixture.detectChanges();
    const spy = spyOn(component.carousel, 'goTo');
    component.goToNextSlide();
    expect(spy).toHaveBeenCalled();

  });

  it('selectedSlide should set lastSlideIndex', () => {
    component.featuredPromotions = Array(5);
    component.selectedSlideIndex = 3;
    component.selectedSlide(mockState[0]);
    expect(component.lastSlideIndex).toEqual(4);

  });

  it('selectedSlide should set lastSlideIndex type array', () => {
    component.featuredPromotions = Array(5);
    component.selectedSlideIndex = 3;
    const promo = { ...mockState[0] };
    promo.type = 'array';
    component.selectedSlide(promo);
    expect(component.lastSlideIndex).toEqual(4);

  });

  it('selectedSlide should set lastSlideIndex type detail', () => {
    component.featuredPromotions = Array(5);
    component.selectedSlideIndex = 3;
    const promo = { ...mockState[0] };
    promo.type = 'detail';
    component.selectedSlide(promo);
    expect(component.lastSlideIndex).toEqual(4);

  });

  it('retry() should call mapState', () => {
    const spyDispatchActions = spyOn(component, 'dispatchActions');
    component.retry();
    expect(spyDispatchActions).toHaveBeenCalled();

  });

  it('getPaginatedPromos() should set loading to false', () => {
    component.getPaginatedPromos(promosMock.slice(0, 5));
    expect(component.loading).toBeFalsy();

  });

  it('onloadMorePromotionsRequested() should dispatch actions if its last page', () => {
    const spy = spyOn(component, 'currentPageNumberIsLastPage').and.returnValue(true);
    component.onloadMorePromotionsRequested();
    expect(storeSpy).toHaveBeenCalled();

  });

  it('onloadMorePromotionsRequested() should dispatch actions if its not last page', () => {
    const spy = spyOn(component, 'currentPageNumberIsLastPage').and.returnValue(false);
    component.onloadMorePromotionsRequested();
    expect(storeSpy).toHaveBeenCalled();
  });

  it('onloadMorePromotionsRequested() should dispatch actions if its not last page and isFilterAplly', () => {
    const spy = spyOn(component, 'currentPageNumberIsLastPage').and.returnValue(false);
    component.isFilterApply = true;
    component.onloadMorePromotionsRequested();
    expect(storeSpy).toHaveBeenCalled();
  });

  it('setPaginationInfoFromResponse() should set pagination info', () => {
    const spy = spyOn(component, 'calculateLastPageNumber');
    const paginationInfo: IPaginationInfo = {
      page: 1,
      items_by_page: 50,
      items_in_page: 50,
      total: 100,
    };
    component.setPaginationInfoFromResponse(paginationInfo);
    // @ts-ignore
    expect(component.totalPromotionsNumber).toEqual(paginationInfo.total);
    // @ts-ignore
    expect(component.itemsByPage).toEqual(paginationInfo.items_by_page);
    // @ts-ignore
    expect(component.itemsInPage).toEqual(paginationInfo.items_in_page);
    expect(spy).toHaveBeenCalled();
  });

  it('setPaginationInfoFromResponse() else branch', () => {
    const spy = spyOn(component, 'calculateLastPageNumber');
    const paginationInfo: IPaginationInfo = null;
    component.setPaginationInfoFromResponse(paginationInfo);
    expect(spy).not.toHaveBeenCalled();
  });

  it('calculateLastPageNumber() should  return 100 / 50 = 2', () => {
    const res = component.calculateLastPageNumber(100, 50);
    expect(res).toEqual(2);
  });

  it('calculateLastPageNumber() should  return 1 / 50 = 1', () => {
    const res = component.calculateLastPageNumber(1, 50);
    expect(res).toEqual(1);
  });

  it('calculateLastPageNumber() should  return 51 / 50 = 2', () => {
    const res = component.calculateLastPageNumber(51, 50);
    expect(res).toEqual(2);
  });

  it('calculateLastPageNumber() should  return 5000 / 50 = 100', () => {
    const res = component.calculateLastPageNumber(5000, 50);
    expect(res).toEqual(100);
  });

  it('calculateLastPageNumber() should  return 0 / 50 = 0', () => {
    const res = component.calculateLastPageNumber(0, 50);
    expect(res).toEqual(0);
  });

  it('currentPageNumberIsLastPage() should  return true', () => {
    // @ts-ignore
    component.currentPageNumber = 3;
    // @ts-ignore
    component.lastPageNumber = 3;
    const res = component.currentPageNumberIsLastPage();
    expect(res).toBeTruthy();
  });

  it('currentPageNumberIsLastPage() should  return false', () => {
    // @ts-ignore
    component.currentPageNumber = 1;
    // @ts-ignore
    component.lastPageNumber = 3;
    const res = component.currentPageNumberIsLastPage();
    expect(res).toBeFalsy();
  });

  it('onLoadPageNumberRequested() should dispatch actions if its last page', () => {
    const spy = spyOn(component, 'currentPageNumberIsLastPage').and.returnValue(true);
    component.onloadMorePromotionsRequested();
    expect(storeSpy).toHaveBeenCalled();

  });

  it('onLoadPageNumberRequested() should dispatch actions if isFilterApply is true', () => {
    component.isFilterApply = true;
    component.onLoadPageNumberRequested(1);
    expect(storeSpy).toHaveBeenCalled();
  });

  it('onLoadPageNumberRequested() should dispatch actions if isFilterApply is false', () => {
    component.isFilterApply = false;
    component.isFilterApply = false;
    component.onLoadPageNumberRequested(1);
    expect(storeSpy).toHaveBeenCalled();
  });

  it('mapCategoriesFilteredFromFilterBody() should map filtered categories', () => {
    component.categoriesFilteredItems = [{ category: 'test category 1' }, { category: 'test category 2' }];
    const res = component.mapCategoriesFilteredFromFilterBody();
    expect(res.length).toEqual(2);
  });

  it('calling onFilterApplied with body', () => {
    const fullFilterBody: IFilterBody = {
      province: {
        text: 'Córdoba',
      },
      locality: {
        text: 'Villa Carlos Paz',
      },
      categories: [
        {
          category: 'MODA Y ACCESORIOS',
          subcategories: [
            'CALZADOS',
            'GUARDAPOLVOS Y UNIFORMES',
            'INDUMENTARIA',
            'INDUMENTARIA DEPORTIVA',
            'JOYERIAS Y RELOJERIAS',
            'LENCERÍAS',
            'MARROQUINERÍAS',
            'MERCERÍAS',
            'NIÑOS',
            'SASTRERIAS Y NOVIAS',
          ],
        },
      ],
      commerceName: 'La',
    };
    component.onFilterApplied(fullFilterBody);
    expect(component).toBeTruthy();
  });

  it('calling onFilterApplied without body', () => {
    const fullFilterBody: IFilterBody = {
    };
    component.onFilterApplied(fullFilterBody);
    expect(component).toBeTruthy();
  });

});
