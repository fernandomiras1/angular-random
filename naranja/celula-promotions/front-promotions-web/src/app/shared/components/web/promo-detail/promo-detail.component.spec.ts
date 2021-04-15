import { NavigationService } from './../../../services/navigation.service';
import { CommonService } from './../../../services/common.service';
import { DocumentService } from './../../../../core/utils/services/document.service';
import { WindowService } from './../../../../core/utils/services/window.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from './../../../shared.module';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { promosMock } from '@promotions/mocks/promotions.mocks';

import { PromoDetailWebComponent } from './promo-detail.component';
import { MockStore, TestingModule } from '@testing/utils/utils';
import { AppState } from '@root-store/root-store.reducer';
import { TranslateModule } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { NO_ERRORS_SCHEMA, PLATFORM_ID } from '@angular/core';
import { slideType } from '@core/models/featured-promotion.model';
import { ZumoComponentesModule } from '@shared/zumo-componentes.module';

describe('PromoDetailMobileComponent', () => {
  let component: PromoDetailWebComponent;
  let fixture: ComponentFixture<PromoDetailWebComponent>;
  let store: MockStore<AppState>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PromoDetailWebComponent],
      imports: [
        TranslateModule.forRoot(),
        ZumoComponentesModule,
        TestingModule,
        HttpClientTestingModule,
        SharedModule,
      ],
      providers: [
        { provide: Store, useClass: MockStore },
        WindowService,
        DocumentService, { provide: PLATFORM_ID, useValue: 'browser' },

      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(inject([Store], (testStore: MockStore<AppState>) => {
    store = testStore;

    const spy = spyOn(store, 'dispatch').and.callFake((args) => { });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoDetailWebComponent);
    component = fixture.componentInstance;
    component.promo = promosMock[0];
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('PromoDetailWebComponent should be created ', () => {
    expect(component).toBeTruthy();
  });

  it('goBack()  should  call navigationService', () => {
    const spy = spyOn(NavigationService.prototype, 'goBack');
    component.goBack();
    expect(spy).toHaveBeenCalled();
  });

  it('getBreadcrumbTitle()  should  return description string', () => {
    component.featuredPromo = {
      id: null,
      description: 'test',
      backImageName: 'test',
      alt: null,
      name: null,
      payload: null,
      type: {
        description: slideType.ARRAY,
      },
      dateFrom: null,
      dateTo: null,
      mainImageName: null,
      order: null,
      rules: null,

    };
    const res = component.getBreadcrumbTitle();

    expect(res).toContain('test');
  });

});
