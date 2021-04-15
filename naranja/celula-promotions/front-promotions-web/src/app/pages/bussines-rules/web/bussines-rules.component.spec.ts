import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { TransferStateModule } from '@app/core/transfer-state/transfer-state.module';
import { CoreModule } from '@core/core.module';
import { IFeaturedPromo, slideType } from '@core/models/featured-promotion.model';
import { FilterModule } from '@filter/filter.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { bussinesRuleMock } from '@promotions/mocks/promotions.mocks';
import { PromotionsModule } from '@promotions/promotions.module';
import { PromotionsService } from '@promotions/services/promotions.service';
import { SharedModule } from '@shared/shared.module';

import { BussinesRulesWebComponent } from './bussines-rules.component';

describe('BussinesRulesWebComponent', () => {
  let component: BussinesRulesWebComponent;
  let fixture: ComponentFixture<BussinesRulesWebComponent>;
  const promoServiceSpy = jasmine.createSpyObj('PromotionsService', ['getDaysCounter', 'setWithExpiry', 'getWithExpiry']);

  class RouterStub {
    navigate(url: string) { return; }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BussinesRulesWebComponent,
      ],
      imports: [
        CoreModule,
        SharedModule,
        PromotionsModule,
        FilterModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        TranslateModule.forRoot(),
        BrowserAnimationsModule,
        HttpClientTestingModule,
        TransferStateModule,
        BrowserTransferStateModule,
      ],
      providers: [
        { provide: PromotionsService, useValue: promoServiceSpy },
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useValue: { snapshot: { params: { id: '123' } } } },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinesRulesWebComponent);
    component = fixture.componentInstance;
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

  it('should call redirect map', () => {
    component.redirectToMap();
  });

  it('should openRuleDetail', () => {
    component.openRuleDetail(bussinesRuleMock);
    expect(component.openRule).toBeDefined();
  });

  it('calling setGrids', () => {
    const rules = [bussinesRuleMock, bussinesRuleMock, bussinesRuleMock];
    component.setGrids(rules);
    expect(component.rules.length).toBeGreaterThan(1);
  });
});
