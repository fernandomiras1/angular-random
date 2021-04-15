import { HTTP_INTERCEPTORS, HttpClient, HttpInterceptor } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { BrowserStateInterceptor } from '@core/transfer-state/interceptors/browserstate.interceptor';
import { DocumentService } from '@core/utils/services/document.service';
import { WindowService } from '@core/utils/services/window.service';
import { getInterceptorInstance } from '@testing/http/http-mocks';
import { transferStateMock } from '@testing/transfer-state/transfer-state-mock';

xdescribe('BrowserStateInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;
  let interceptorInstance: HttpInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: BrowserStateInterceptor,
          multi: true,
        },
        TransferState,
        WindowService,
        DocumentService,
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
    interceptorInstance = getInterceptorInstance<BrowserStateInterceptor>(
      TestBed.get(HTTP_INTERCEPTORS),
      BrowserStateInterceptor,
    );
    expect(interceptorInstance).toBeDefined();
  });

  it('should call intercept method', () => {
    http.get('https://api.github.com/anything').subscribe();

    const requests = httpMock.match({ method: 'get' });

    expect(requests[0]).toBeDefined();
  });
});

xdescribe('BrowserStateInterceptor with exclude method post', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: BrowserStateInterceptor,
          multi: true,
        },
        TransferState,
        WindowService,
        DocumentService,
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
    http.post('https://api.github.com/anything', {}).subscribe();

    const requests = httpMock.match({ method: 'post' });

    expect(requests[0]).toBeDefined();
  });
});

xdescribe('BrowserStateInterceptor with data in transfer state', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;
  let transferState: TransferState;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: BrowserStateInterceptor,
          multi: true,
        },
        TransferState,
        WindowService,
        DocumentService,
        {
          provide: TransferState,
          useFactory: transferStateMock,
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

  it('should call intercept method and not have object in transfer state', () => {
    const url = 'https://api.github.com/anything';

    transferState.set(makeStateKey(url), { fake: '' });
    http.get(url).subscribe((data) => {
      expect(data).toEqual({ fake: '' });
    });
    httpMock.match({ method: 'get' });
  });
});
