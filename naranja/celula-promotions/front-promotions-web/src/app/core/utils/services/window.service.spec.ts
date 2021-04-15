import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PLATFORM_ID } from '@angular/core';
import { WindowService } from './window.service';
import { BrowserWindowRef, windowFactory } from '@shared/services/window.service';

describe('WindowService in browser', () => {
  let service: WindowService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        WindowService,
        { provide: PLATFORM_ID, useValue: true },
      ],
    });

    service = TestBed.get(WindowService);
  }));

  it('should get nativeDocument when is not browser', () => {
    const window = service.nativeWindow;

    expect(window).toBeTruthy();
  });
});

describe('WindowService', () => {
  let service: WindowService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        WindowService,
        { provide: PLATFORM_ID, useValue: false },
      ],
    });

    service = TestBed.get(WindowService);
  }));

  it('should get nativeDocument when is not browser', () => {
    const window = service.nativeWindow;

    expect(window).toBeTruthy();
  });

});

describe('BrowserWindowRef', () => {
  let service: BrowserWindowRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        BrowserWindowRef,
        { provide: PLATFORM_ID, useValue: false },
      ],
    });

    service = TestBed.get(BrowserWindowRef);
  }));

  it('nativeWindow() should return valid object', () => {
    const res = service.nativeWindow;

    expect(res).toBeTruthy();
  });

  it('windowFactory() should return valid object if browser', () => {
    const res = windowFactory(service, 'browser');

    expect(res).toBeTruthy();
  });

  it('windowFactory() should return valid object', () => {
    const res = windowFactory(service, 'mobile');

    expect(res).toBeTruthy();
  });

});
