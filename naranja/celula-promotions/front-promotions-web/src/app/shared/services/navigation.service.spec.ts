import { WindowService } from './../../core/utils/services/window.service';
import { NavigationService } from './navigation.service';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import * as fromRoot from '@root-store/root-store.reducer';
import * as fromHistoryNavigation from '@core/navigation/store/history-navigation/history-navigation.reducer';
import { NavigatorService } from '@core/utils/services/navigator.service';
import { combineReducers, StoreModule } from '@ngrx/store';

describe('NavigationService', () => {
  let navigationService: NavigationService;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          feature: combineReducers(fromHistoryNavigation.reducer),
        }),

      ],

      providers: [
        { provide: Router, useValue: routerSpy },
        NavigationService,
        WindowService,
      ],
    });
  });

  beforeEach(() => {
    navigationService = TestBed.get(NavigationService);
    // @ts-ignore
    navigationService.historyData = {
      urlRoute: ['cerca-tuyo'],
      previousLink: 'test',
    };

  });
  it('should be created', () => {
    navigationService = TestBed.get(NavigationService);
    expect(navigationService).toBeTruthy();
  });

  it('saveHistoryNavigation()', () => {
    navigationService = TestBed.get(NavigationService);
    navigationService.saveHistoryNavigation('test');
    expect(navigationService).toBeTruthy();
  });

  it('showArrowButton() should return false', () => {
    navigationService = TestBed.get(NavigationService);
    // @ts-ignore
    navigationService.historyData = {
      urlRoute: ['test'],
      previousLink: 'test',
    };

    // @ts-ignore
    const res = navigationService.showArrowButton();
    expect(res).toBeFalsy();
  });

  it('showArrowButton() should return true', () => {
    navigationService = TestBed.get(NavigationService);
    // @ts-ignore
    navigationService.historyData = {
      urlRoute: ['/cerca-tuyo', 'test2'],
      previousLink: 'test',
    };

    // @ts-ignore
    const res = navigationService.showArrowButton();
    expect(res).toBeTruthy();
  });

  it('goBack() should call router navigate', () => {
    navigationService = TestBed.get(NavigationService);
    // @ts-ignore
    // @ts-ignore
    navigationService.historyData = {
      urlRoute: ['test', 'test2'],
      previousLink: 'test',
    };

    navigationService.goBack();
    expect(routerSpy.navigate).toHaveBeenCalled();
  });

  it('goBack() should call exit', () => {
    navigationService = TestBed.get(NavigationService);
    // @ts-ignore
    navigationService.historyData = {
      urlRoute: ['/cerca-tuyo'],
      previousLink: 'test',
    };
    const spy = spyOn(NavigationService.prototype, 'exit');
    navigationService.goBack();
    expect(spy).toHaveBeenCalled();
  });

  it('goBack() should call router navigate if length <= 0', () => {
    navigationService = TestBed.get(NavigationService);
    // @ts-ignore
    navigationService.historyData = {
      urlRoute: ['callback', 'callback'],
      previousLink: 'test',
    };
    navigationService.goBack();
    expect(routerSpy.navigate).toHaveBeenCalled();
  });

});
