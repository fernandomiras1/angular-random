import { HTTP_INTERCEPTORS, HttpClient, HttpInterceptor } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { ServerStateInterceptor } from '@core/transfer-state/interceptors/serverstate.interceptor';
import { NavigatorService } from '@core/utils/services/navigator.service';
import { WindowService } from '@core/utils/services/window.service';
import { getInterceptorInstance } from '@testing/http/http-mocks';
import { navigatorServiceBrowser, navigatorServiceServer } from '@testing/navigator/navigator-service-mock';
import { transferStateMock } from '@testing/transfer-state/transfer-state-mock';

xdescribe('ServerStateInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;
  let interceptorInstance: HttpInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ServerStateInterceptor,
          multi: true,
        },
        TransferState,
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
    interceptorInstance = getInterceptorInstance<ServerStateInterceptor>(
      TestBed.get(HTTP_INTERCEPTORS),
      ServerStateInterceptor,
    );
    expect(interceptorInstance).toBeDefined();
  });

  it('should call intercept method', () => {
    http.get('https://api.github.com/anything').subscribe();

    const requests = httpMock.match({ method: 'get' });

    expect(requests[0]).toBeDefined();
  });
});

xdescribe('ServerStateInterceptor when is browser', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ServerStateInterceptor,
          multi: true,
        },
        TransferState,
        {
          provide: NavigatorService,
          useValue: navigatorServiceBrowser,
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

  it('should call intercept method', () => {
    http.get('https://api.github.com/anything').subscribe();

    const requests = httpMock.match({ method: 'get' });

    expect(requests[0]).toBeDefined();
  });
});

xdescribe('ServerStateInterceptor with data for set transfer state', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;
  let transferState: TransferState;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ServerStateInterceptor,
          multi: true,
        },
        WindowService,
        {
          provide: TransferState,
          useFactory: transferStateMock,
        },
        {
          provide: NavigatorService,
          useValue: navigatorServiceServer,
        },
      ],
    });

    transferState = TestBed.get(TransferState);
  });

  beforeEach(inject([HttpClient, HttpTestingController], (_http: HttpClient, _httpMock: HttpTestingController) => {
    http = _http;
    httpMock = _httpMock;
  }));

  afterEach(() => {
    httpMock.verify();
  });

  it('should call intercept method and have object in transfer state', () => {
    const url = 'https://api.github.com/anything';
    http.get(url)
      .subscribe((data) => {
        expect(data).toEqual({ fake: '' });
        expect(transferState.get(makeStateKey(url), null)).toEqual({ fake: '' });
      });
    httpMock.expectOne(url).flush({ fake: '' }, {
      status: 200,
      statusText: 'success',
    });
  });
});
