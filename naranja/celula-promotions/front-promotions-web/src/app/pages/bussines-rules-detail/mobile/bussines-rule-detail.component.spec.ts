import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { TransferStateModule } from '@app/core/transfer-state/transfer-state.module';
import { CoreModule } from '@core/core.module';
import { IPaginationInfo } from '@core/models/pagination-info.model';
import { NavigationModule } from '@core/navigation/navigation.module';
import * as fromHistoryNavigationActions from '@core/navigation/store/history-navigation/history-navigation.actions';
import * as fromNavigationFeature from '@core/navigation/store/navigation.reducer';
import { FilterModule } from '@filter/filter.module';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { bussinesRuleMock } from '@promotions/mocks/promotions.mocks';
import { PromotionsModule } from '@promotions/promotions.module';
import { SharedModule } from '@shared/shared.module';

import { BussinesRuleDetailMobileComponent } from './bussines-rule-detail.component';

describe('BussinesRuleDetailMobileComponent', () => {
  let component: BussinesRuleDetailMobileComponent;
  let fixture: ComponentFixture<BussinesRuleDetailMobileComponent>;
  let storeSpy;
  let store: Store<fromNavigationFeature.NavigationState>;
  class RouterStub {
    navigate(url: string) { return; }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BussinesRuleDetailMobileComponent],
      imports: [
        CoreModule,
        CommonModule,
        FilterModule,
        SharedModule,
        PromotionsModule,
        NavigationModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        HttpClientTestingModule,
        TransferStateModule,
        BrowserTransferStateModule,
      ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useValue: { snapshot: { params: { id: '123' } } } },
      ],
    })
      .compileComponents();
    store = TestBed.get(Store);
    const action = new fromHistoryNavigationActions.SaveData('BussinesRuleDetailComponent');
    store.dispatch(action);
    storeSpy = spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinesRuleDetailMobileComponent);
    component = fixture.componentInstance;
    component.rule = bussinesRuleMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

  it('onLoadPageNumberRequested() ', () => {
    component.isFilterApply = false;
    component.onLoadPageNumberRequested(1);
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    fixture.destroy();
  });

});
