import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { ILocation } from '@core/models/geo-location.model';
import { DatesUtils } from '@shared/utils/dates.utils';
import { isObservable, of } from 'rxjs';

import { promoFullMock } from '../mocks/promotions.mocks';
import { WindowService } from './../../../core/utils/services/window.service';
import { PromotionsService } from './promotions.service';

describe('PromotionsService', () => {

  let http: HttpClient;
  let httpMock: HttpTestingController;

  let service: PromotionsService;
  const location: ILocation = { locality: '', province: '' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [
        WindowService,
        PromotionsService,
        HttpClient,
      ],
    });
    service = TestBed.get(PromotionsService);
  });

  beforeEach(inject([HttpClient, HttpTestingController], (_http: HttpClient, _httpMock: HttpTestingController) => {
    http = _http;
    httpMock = _httpMock;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getSuggested method', () => {

    it('http get should be called', () => {
      const spy = spyOn(http, 'get').and.returnValue(of(null));
      const pageNumber = 1;
      const size = 50;
      service.getSuggested(pageNumber, size, location);
      expect(spy).toHaveBeenCalled();
    });

    xit('should return an Observable as a response', () => {
      const spy = spyOn(http.avoidCache(), 'get').and.returnValue(of({}));
      const pageNumber = 1;
      const size = 50;
      const res = service.getSuggested(pageNumber, size, location);
      expect(isObservable(res)).toBeTruthy();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('getOneById method', () => {

    it('http get should be called', () => {
      const spy = spyOn(http, 'get').and.returnValue(of(null));
      service.getOneById('fakeId');
      expect(spy).toHaveBeenCalled();
    });

    it('should return an Observable as a response', () => {
      const res = service.getOneById('fakeId');
      expect(isObservable(res)).toBeTruthy();
    });
  });

  // describe('getFilterData method', () => {

  //   it('http get should be called', () => {
  //     const spy = spyOn(http, 'get').and.returnValue(of(null));
  //     service.getFilterData();
  //     expect(spy).toHaveBeenCalled();
  //   });

  //   it('should return an Observable as a response', () => {
  //     const res = service.getFilterData();
  //     expect(isObservable(res)).toBeTruthy();
  //   });
  // });

  describe('getFiltered method', () => {

    const body = {
      province: 'provincia',
      locality: 'localidad',
      category: 'categoria',
    };

    xit('should return an Observable as a response', () => {
      const pageNumber = 1;
      const size = 50;
      const res = service.getFiltered(body, pageNumber, size);
      expect(isObservable(res)).toBeTruthy();
    });
  });

  describe('getDaysCounter method', () => {

    it('should call DatesUtils isPromoInForce method', () => {
      const spy = spyOn(DatesUtils, 'isPromoInForce').and.returnValue(false);
      service.getDaysCounter(promoFullMock);
      expect(spy).toHaveBeenCalled();
    });

    it('should return show propperty to be false', () => {
      spyOn(DatesUtils, 'isPromoInForce').and.returnValue(false);
      const mock = promoFullMock;
      mock.days = {
        type: 2,
        selectedSpecificDays: {},
        daysApplied: [
          '01/07/2020',
          '02/07/2020',
        ],
        dateFrom: '',
        dateTo: '',
      };
      const res = service.getDaysCounter(mock);
      expect(res.alert).toBeFalsy();
    });

    it('should return show propperty to be true and message to contain "hoy"', () => {
      spyOn(DatesUtils, 'isPromoInForce').and.returnValue(true);
      spyOn(DatesUtils, 'uniqueDay').and.returnValue(true);

      const finishTodaypromoFullMock = promoFullMock;
      finishTodaypromoFullMock.days = {
        type: 2,
        selectedSpecificDays: {},
        daysApplied: [
          '01/07/2020',
          '01/07/2020',
        ],
        dateFrom: '',
        dateTo: '',
      };
      const res = service.getDaysCounter(finishTodaypromoFullMock);

      expect(res['show']).toBeTruthy();
      expect(res['message']).toContain('hoy');
    });

    it('should return show propperty to be false - 15 days remaining', () => {
      spyOn(DatesUtils, 'isPromoInForce').and.returnValue(true);
      spyOn(DatesUtils, 'remainingDays').and.returnValue(15);

      const withoutCounterpromoFullMock = promoFullMock;
      withoutCounterpromoFullMock.days = {
        type: 2,
        selectedSpecificDays: {},
        daysApplied: [
          '01/07/2020',
          '16/07/2020',
        ],
        dateFrom: '',
        dateTo: '',
      };

      const res = service.getDaysCounter(withoutCounterpromoFullMock);

      expect(res['alert']).toBeFalsy();
    });

    it('should return show propperty to be false - negative days remaining(-1)', () => {
      spyOn(DatesUtils, 'isPromoInForce').and.returnValue(true);
      spyOn(DatesUtils, 'remainingDays').and.returnValue(-1);

      const withoutCounterpromoFullMock = {
        ...promoFullMock,
        day: 'Todos los dias',
        dateFrom: '1/1/1',
        dateTo: '2/2/2',
      };

      const res = service.getDaysCounter(withoutCounterpromoFullMock);

      expect(res['alert']).toBeFalsy();
    });

    it('should return show propperty to be true, counter = 9, message to contain "9"', () => {
      const remainingDays = 9;

      spyOn(DatesUtils, 'isPromoInForce').and.returnValue(true);
      spyOn(DatesUtils, 'remainingDays').and.returnValue(remainingDays);

      const withCounterpromoFullMock = {
        ...promoFullMock,
        day: 'Todos los dias',
        dateFrom: '1/1/1',
        dateTo: '2/2/2',
      };

      const res = service.getDaysCounter(withCounterpromoFullMock);

      expect(res['show']).toBeTruthy();
      expect(res['count']).toBe(remainingDays);
    });

    it('should return show propperty to be true, counter = 1, message to contain "1"', () => {
      const remainingDays = 1;

      spyOn(DatesUtils, 'isPromoInForce').and.returnValue(true);
      spyOn(DatesUtils, 'remainingDays').and.returnValue(remainingDays);

      const withCounterpromoFullMock = {
        ...promoFullMock,
        day: 'Todos los dias',
        dateFrom: '1/1/1',
        dateTo: '2/2/2',
      };

      const res = service.getDaysCounter(withCounterpromoFullMock);

      expect(res['show']).toBeTruthy();
      expect(res['count']).toBe(remainingDays);
    });

    it('should return show propperty to be true, counter = 0, message to contain "Último día"', () => {
      const remainingDays = 0;

      spyOn(DatesUtils, 'isPromoInForce').and.returnValue(true);
      spyOn(DatesUtils, 'remainingDays').and.returnValue(remainingDays);

      const withCounterpromoFullMock = {
        ...promoFullMock,
        day: 'Todos los dias',
        dateFrom: '1/1/1',
        dateTo: '2/2/2',
      };

      const res = service.getDaysCounter(withCounterpromoFullMock);

      expect(res['show']).toBeTruthy();
      expect(res['count']).toBe(remainingDays);
      expect(res['message']).toContain('Último día');
    });

  });

});
