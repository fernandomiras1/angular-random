import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA, PLATFORM_ID } from '@angular/core';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { DocumentService } from '@core/utils/services/document.service';
import { WindowService } from '@core/utils/services/window.service';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { addressesMock } from '@promotions/mocks/addresses.mocks';
import { promosMock } from '@promotions/mocks/promotions.mocks';
import { AppState } from '@root-store/root-store.reducer';
import { AddressesService } from '@shared/services/addresses.service';
import { CommonService } from '@shared/services/common.service';
import { SharedModule } from '@shared/shared.module';
import { ZumoComponentesModule } from '@shared/zumo-componentes.module';
import { MockStore, TestingModule } from '@testing/utils/utils';

import { PromoDetailMobileComponent } from './promo-detail.component';

describe('PromoDetailMobileComponent', () => {
  let component: PromoDetailMobileComponent;
  let fixture: ComponentFixture<PromoDetailMobileComponent>;
  let store: MockStore<AppState>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    fixture = TestBed.createComponent(PromoDetailMobileComponent);
    component = fixture.componentInstance;
    component.promo = promosMock[0];
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('PromoDetailMobileComponent should be created ', () => {
    expect(component).toBeTruthy();
  });

  xit('should return false, show where block', () => {
    component.addresses.mainAddress = {
      address: 'calle',
      locality: 'localidad',
      province: 'provincia',
      coordinates: '',
    };
    component.ngOnInit();
    const res = component.showWhereBlock();
    expect(res).toBeFalsy();
  });

  xit('should return false, not show where block', () => {
    component.promo.webPage = '';
    component.promo.address = [];
    component.addresses = {
      mainAddress: null,
      otherAddresses: [],
    };
    component.ngOnInit();
    const res = component.showWhereBlock();
    expect(res).toBeFalsy();
  });

  it('should return true, show promo online', () => {
    component.promo.webPage = 'miweb.com';
    component.promo.address = [];
    component.addresses = {
      mainAddress: null,
      otherAddresses: [],
    };
    component.ngOnInit();
    const res = component.isPromoOnline;
    expect(res).toBeTruthy();
  });

  it('should return false, not show promo online', () => {
    component.promo.webPage = '';
    component.addresses = {
      mainAddress: { address: 'street', locality: 'locality', province: 'province', coordinates: '' },
      otherAddresses: [],
    };
    component.ngOnInit();
    const res = component.isPromoOnline;
    expect(res).toBeFalsy();
  });

  it('should not modify the value of this.addresses because there is no promotion setted', () => {
    component.promo = null;
    component.addresses = { mainAddress: null, otherAddresses: [] };

    component.processAddress();
    expect(component.addresses).toEqual({ mainAddress: null, otherAddresses: [] });
  });

  it('should call to reorderNearestPromotion', () => {
    const spy = spyOn(component, 'reorderNearestPromotion').and.returnValue(false);
    component.addresses = {
      mainAddress: { address: 'street', locality: 'locality', province: 'province', coordinates: '' },
      otherAddresses: [],
    };
    component.reorderNearestPromotion();
    expect(spy).toHaveBeenCalled();
  });

  it('should show other addresses modal', () => {
    component.moreLocals();
    expect(component.showLocalsModal).toBeTruthy();
  });

  it('should close other addresses modal', () => {
    component.closeModal();
    expect(component.showLocalsModal).toBeFalsy();
  });

  it('should maintain the same mainAddress, no valid address selected', () => {
    component.addresses = addressesMock;
    component.showAddresses = addressesMock.otherAddresses;

    component.onSelectedAddress(0);

    expect(component.showLocalsModal).toBeFalsy();
    expect(component.addresses.mainAddress).toBe(addressesMock.mainAddress);

    component.onSelectedAddress(1);

    expect(component.showLocalsModal).toBeFalsy();
    expect(component.addresses.mainAddress).toBe(addressesMock.mainAddress);

    component.onSelectedAddress(2);

    expect(component.showLocalsModal).toBeFalsy();
    expect(component.addresses.mainAddress).toBe(addressesMock.mainAddress);
  });

  xit('should set title of promotion to be "12 cuotas"', () => {
    component.promo.plan = {
      code: '',
      description: '12 cuotas',
      mainShortName: '',
      secondaryShortName: '',
    };
    component.setTitle(component.promo);

    expect(component.title).toBe('12 cuotas');
  });

  xit('should set subtitle of promotion to be "Smartes"', () => {
    component.promo.plan = {
      code: '',
      description: '12 cuotas en Mega',
      mainShortName: '',
      secondaryShortName: '',
    };
    component.promo.giftDiscount = {
      code: '2',
      description: 'Smartes',
      mainShortName: '',
      secondaryShortName: '',
    };
    component.setTitle(component.promo);

    expect(component.subtitle).toContain('Smartes');
  });

  it('should set the icon url of promotion category', () => {
    component.promo.sector = {
      category: 'ropa y accesorios',
      sector: '',
      subCategory: '',
    };

    component.setIcon(component.promo.sector.category);

    expect(component.categoryIcon).toBe('assets/images/icons/categories/ropa-y-accesorios.svg');
  });

  it('should set the logo url of promotion', () => {
    component.promo.commerceName = 'Red Megatone';
    component.setLogo(component.promo.commerceName);
    expect(component.logoUrl).toContain('red_megatone');
  });

  it('should return false, not showing dates if promotion is consecutive days', () => {
    component.promo.days = {
      type: 2,
      selectedSpecificDays: {},
      daysApplied: [
        '01/07/2020',
        '02/07/2020',
      ],
      dateFrom: '',
      dateTo: '',
    },
      component.addresses = addressesMock;
    component.ngOnInit();
    const res = component.showDates;
    expect(res).toBeTruthy();
  });

  it('should return the same order of addresses', () => {
    const actualMainAddress = component.addresses.mainAddress;
    spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake((callback, error) => error());
    component.reorderNearestPromotion();
    expect(component.addresses.mainAddress).toBe(actualMainAddress);
  });

  it('setBannerImage() should set bannerImage', () => {
    component.setBannerImage({
      id: null,
      description: null,
      backImageName: 'test',
      alt: null,
      name: null,
      payload: null,
      type: null,
      dateFrom: null,
      dateTo: null,
      mainImageName: null,
      order: null,
      rules: null,

    });
    expect(component.bannerImage).toBeTruthy();
  });

  it('mustShowDate() should return true', () => {
    component.promo.days = {
      type: 2,
      selectedSpecificDays: {},
      daysApplied: [
        '01/07/2020',
        '31/07/2020',
      ],
      dateFrom: '',
      dateTo: '',
    },
      component.subtitle = 'test';
    //  @ts-ignore
    const res = component.mustShowDate();
    expect(res).toBeTruthy();
  });

  it('mustShowDate() should return false for consecutivedayspromo', () => {
    component.promo.days = {
      type: 2,
      selectedSpecificDays: {},
      daysApplied: [
        '01/07/2020',
        '02/07/2020',
      ],
      dateFrom: '',
      dateTo: '',
    },
      component.subtitle = 'test';
    //  @ts-ignore
    const res = component.mustShowDate();
    expect(res).toBeTruthy();
  });

  it('processAddress() should return  if adresses is null', () => {
    spyOn(AddressesService.prototype, 'extractAddresses').and.callFake(() => null);
    component.processAddress();
    expect(component.addresses).toBeFalsy();
  });

  it('processAddress() should call getMapUrl', () => {
    spyOn(AddressesService.prototype, 'extractAddresses').and.callFake(() => {
      return {
        mainAddress: {},
        otherAddresses: {
          length: null,
        },
      };
    });
    const spy = spyOn(AddressesService.prototype, 'getMapUrl').and.callFake(() => null);
    component.processAddress();
    expect(spy).toHaveBeenCalled();
  });

  it('processAddress() should  call reorderNearestPromotion', () => {
    spyOn(AddressesService.prototype, 'extractAddresses').and.callFake(() => {
      return {
        mainAddress: {},
        otherAddresses: {
          length: 1,
        },
      };
    });
    spyOn(AddressesService.prototype, 'getMapUrl').and.callFake(() => null);
    const spy = spyOn(component, 'reorderNearestPromotion').and.callFake(() => null);
    component.processAddress();
    expect(spy).toHaveBeenCalled();
  });

  it('onMapClick() should call window open', () => {
    spyOn(AddressesService.prototype, 'getEncodedUrl').and.callFake(() => '');
    const spy = spyOn(window, 'open');
    component.onMapClick();
    expect(spy).toHaveBeenCalled();
  });

  it('onSelectedAddress() should call commonService', () => {
    const spy = spyOn(CommonService.prototype, 'changeStyleBodyFixed').and.callFake(() => '');
    component.addresses = {
      mainAddress: null, otherAddresses: [
        {
          address: 'test',
          province: 'test',
          locality: 'test',
          coordinates: 'test',
        },
      ],
    };
    component.showAddresses = [
      {
        address: 'test',
        province: 'test',
        locality: 'test',
        coordinates: 'test',
      },
    ],
    component.onSelectedAddress(0);
    expect(spy).toHaveBeenCalled();
  });

});
