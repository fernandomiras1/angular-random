import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { ErrorInterceptor } from '@app/core';
import { GeocodingCacheInterceptor } from '@app/core/geocoding/geocoding-cache.interceptor';
import { ConsumerInterceptor } from '@app/core/http/consumer-interceptor.service';
import { TimingInterceptor } from '@app/core/http/timing.interceptor';
import { TransferStateModule } from '@app/core/transfer-state/transfer-state.module';
import { HttpService } from '@core/http/http.service';

import { GeocodingService } from './geocoding.service';

describe('GeocodingService', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;
  let service: GeocodingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TransferStateModule,
        BrowserTransferStateModule,
      ],
      providers: [
        ErrorInterceptor,
        TimingInterceptor,
        ConsumerInterceptor,
        GeocodingCacheInterceptor,
        GeocodingService,
        {
          provide: HttpClient,
          useClass: HttpService,
        },
      ],
    });
    service = TestBed.get(GeocodingService);
  });

  beforeEach(inject(
    [HttpClient, HttpTestingController],
    (_http: HttpClient, _httpMock: HttpTestingController) => {
      http = _http;
      httpMock = _httpMock;
    },
  ));

  afterEach(() => {
    httpMock.verify();
  });

  it('expects service codeAddress to fetch data correctly', () => {
    const responseMock = { lat: 1, lng: 2 };
    const address = { street: 'street', locality: 'cordoba', province: 'cordoba' };
    const parsedAddress = `${address.street},${address.locality},${address.province}`;
    service.codeAddress(parsedAddress).subscribe((response) => {
      expect(response).toEqual(responseMock);
    });
    const request = httpMock.expectOne(req => req.method === 'GET');
    request.flush(responseMock);
  });

  it('should parsedAddress contain street', () => {
    const address = { street: 'street', locality: 'cordoba', province: 'cordoba' };
    service.codeAddress(address).subscribe((response) => {
      expect(response).toEqual(address);
    });
    const request = httpMock.expectOne(req => req.method === 'GET');
    request.flush(address);
  });

  it('expects service reverseCodeAddress to fetch data correctly', () => {
    const responseMock = 'Cordoba';
    service.reverseCodeAddress({ lat: 1, lng: 2 }).subscribe((response) => {
      expect(response).toEqual(responseMock);
    });
    const request = httpMock.expectOne(req => req.method === 'GET');
    request.flush(responseMock);
  });

  // it('getCurrentPosition should call getCurrentPosition - success ', () => {
  //   jasmine.clock().install();
  //   const spy = spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake(() =>  {
  //     const position = { coords: { latitude: 12.3, longitude: -32.1 } };
  //     return of(position);
  //   });

  //   const service: GeocodingService = TestBed.get(GeocodingService);

  //   service.getCurrentPosition();

  //   jasmine.clock().tick(2010);
  //   jasmine.clock().uninstall();

  //   expect(spy).toHaveBeenCalled();
  // }); // TODO: write some better tests for this feature

  it('reverseCodeAddress service should call httpMock', () => {
    const responseMock = {};
    service.reverseCodeAddress({ lat: 1, lng: 2 }).subscribe((response) => {
      expect(response).toEqual(responseMock);
    });
    const request = httpMock.expectOne(req => req.method === 'GET');
    request.flush(responseMock);
  });

  it('codeAddress service should call httpMock - empty address object', () => {
    const responseMock = {};
    service.codeAddress({}).subscribe((response) => {
      expect(response).toEqual(responseMock);
    });
    const request = httpMock.expectOne(req => req.method === 'GET');
    request.flush(responseMock);
  });

  it('codeAddress service should call httpMock - empty address object', () => {
    const address = {
      street: 'test',
      locality: 'test',
      province: 'test',
    };
    const responseMock = { ...address };
    service.codeAddress({ ...address }).subscribe((response) => {
      expect(response).toEqual(responseMock);
    });
    const request = httpMock.expectOne(req => req.method === 'GET');
    request.flush(responseMock);
  });
});
