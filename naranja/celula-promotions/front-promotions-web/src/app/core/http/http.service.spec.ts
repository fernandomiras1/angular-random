import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { TransferState } from '@angular/platform-browser';
import { ConsumerInterceptor } from '@core/http/consumer-interceptor.service';
import { ErrorInterceptor } from '@core/http/error.interceptor';
import { HttpService } from '@core/http/http.service';
import { TimingInterceptor } from '@core/http/timing.interceptor';
import { BrowserStateInterceptor } from '@core/transfer-state/interceptors/browserstate.interceptor';
import { ServerStateInterceptor } from '@core/transfer-state/interceptors/serverstate.interceptor';
import { WatchdogInterceptor } from '@core/transfer-state/interceptors/watchdog.interceptor';
import { WATCHDOG_TIMER } from '@core/transfer-state/tokens/watchdog-timer.token';
import { DocumentService } from '@core/utils/services/document.service';
import { NavigatorService } from '@core/utils/services/navigator.service';
import { WindowService } from '@core/utils/services/window.service';
import { navigatorServiceServer } from '@testing/navigator/navigator-service-mock';

xdescribe('HttpService in browser', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        ErrorInterceptor,
        TimingInterceptor,
        TransferState,
        WindowService,
        DocumentService,
        WatchdogInterceptor,
        ConsumerInterceptor,
        BrowserStateInterceptor,
        ServerStateInterceptor,
        {
          provide: WATCHDOG_TIMER,
          value: 100,
        },
        {
          provide: HttpClient,
          useClass: HttpService,
        },
      ],
    });
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

  it('should skip error handler', () => {
    // Arrange
    let interceptors: HttpInterceptor[];
    const realRequest = http.request;
    spyOn(HttpService.prototype, 'request').and.callFake(function (this: any) {
      interceptors = this.interceptors;
      return realRequest.apply(this, arguments);
    });

    // Act
    const request = http.skipErrorHandler().get('/api/something');

    // Assert
    request.subscribe(() => {
      expect(interceptors.some(i => i instanceof ErrorInterceptor)).toBeFalsy();
    });
    httpMock.expectOne({}).flush({});
  });

  it('should avoidcache', () => {
    // Arrange
    let interceptors: HttpInterceptor[];
    const realRequest = http.request;
    spyOn(HttpService.prototype, 'request').and.callFake(function (this: any) {
      interceptors = this.interceptors;
      return realRequest.apply(this, arguments);
    });

    // Act
    const request = http.avoidCache().get('/api/something');

    // Assert
    request.subscribe(() => {
      expect(interceptors.some(i => i instanceof BrowserStateInterceptor)).toBeFalsy();
    });
    httpMock.expectOne({}).flush({});
  });
});

xdescribe('HttpService in server', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        ErrorInterceptor,
        TimingInterceptor,
        TransferState,
        WindowService,
        WatchdogInterceptor,
        ConsumerInterceptor,
        BrowserStateInterceptor,
        ServerStateInterceptor,
        {
          provide: WATCHDOG_TIMER,
          value: 100,
        },
        {
          provide: HttpClient,
          useClass: HttpService,
        },
        {
          provide: NavigatorService,
          useValue: navigatorServiceServer,
        },
      ],
    });
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

  it('should avoidcache', () => {
    // Arrange
    let interceptors: HttpInterceptor[];
    const realRequest = http.request;
    spyOn(HttpService.prototype, 'request').and.callFake(function (this: any) {
      interceptors = this.interceptors;
      return realRequest.apply(this, arguments);
    });

    // Act
    const request = http.avoidCache().get('/api/something');

    // Assert
    request.subscribe(() => {
      expect(interceptors.some(i => i instanceof ServerStateInterceptor)).toBeFalsy();
    });
    httpMock.expectOne({}).flush({});
  });
});
