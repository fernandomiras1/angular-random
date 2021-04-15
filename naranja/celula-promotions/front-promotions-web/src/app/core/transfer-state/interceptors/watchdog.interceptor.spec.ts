import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpInterceptor } from '@angular/common/http';
import { WATCHDOG_TIMER_1000 } from '@testing/transfer-state/transfer-state-mock';
import { getInterceptorInstance } from '@testing/http/http-mocks';
import { WatchdogInterceptor } from '@core/transfer-state/interceptors/watchdog.interceptor';
import { WindowService } from '@core/utils/services/window.service';
import { NavigatorService } from '@core/utils/services/navigator.service';
import { navigatorServiceServer } from '@testing/navigator/navigator-service-mock';

describe('WatchdogInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;
  let interceptorInstance: HttpInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: WatchdogInterceptor,
          multi: true,
        },
        WATCHDOG_TIMER_1000,
        WindowService,
        {
          provide: NavigatorService,
          useValue: navigatorServiceServer,
        },
      ],
    });

  });

  beforeEach(inject([HttpClient, HttpTestingController], (_http: HttpClient, _httpMock: HttpTestingController) => {
    http = _http;
    httpMock = _httpMock;
  }));

  afterEach(() => {
    httpMock.verify();
  });

  it('should test if interceptor instance defined', () => {
    interceptorInstance = getInterceptorInstance<WatchdogInterceptor>(
      TestBed.get(HTTP_INTERCEPTORS),
      WatchdogInterceptor,
    );
    expect(interceptorInstance).toBeDefined();
  });

  it('should call intercept method', () => {
    http.get('https://api.github.com/anything').subscribe();

    const requests = httpMock.match({ method: 'get' });
    expect(requests[0]).toBeDefined();
  });
});
