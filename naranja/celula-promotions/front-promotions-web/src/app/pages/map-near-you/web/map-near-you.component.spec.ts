import { DocumentService } from '@core/utils/services/document.service';
import { TitleCasePipe } from '@angular/common';
import { WindowService } from './../../../core/utils/services/window.service';
import { Marker } from '@agm/core/services/google-maps-types';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { calculatorText } from '@constants/maps.constants';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { of, Subscription } from 'rxjs';
import { MockStore, TestingModule } from '../../../../../test/utils/utils';
import { AppState } from '../../../root-store/root-store.reducer';
import { GeocodingService } from '../../../shared/services/geocoding.service';
import { MapNearYouWebComponent } from './map-near-you.component';
import { ZumoComponentesModule } from '@shared/zumo-componentes.module';

// import * as _ from 'lodash';
const mockState = require('../../../../../test/utils/promotions.json');
describe('MapNearYouComponent - web', () => {
  let component: MapNearYouWebComponent;
  let fixture: ComponentFixture<MapNearYouWebComponent>;
  let store: MockStore<AppState>;
  let geocodingService: jasmine.SpyObj<GeocodingService>;

  beforeEach(async(() => {
    const spyPromotionService = jasmine.createSpyObj('GeocodingService', ['codeAddress', 'reverseCodeAddress']);
    const spyDocumentService = jasmine.createSpyObj('DocumentService', ['nativeDocument']);
    TestBed.configureTestingModule({
      declarations: [MapNearYouWebComponent],
      imports: [
        TranslateModule.forRoot(),
        ZumoComponentesModule,
        TestingModule,
      ],
      providers: [
        { provide: Store, useClass: MockStore },
        { provide: GeocodingService, useValue: spyPromotionService },
        { provide: DocumentService, useValue: spyDocumentService },
        WindowService,
        TitleCasePipe,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(inject([Store], (testStore: MockStore<AppState>) => {
    store = testStore;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapNearYouWebComponent);
    component = fixture.componentInstance;
    geocodingService = TestBed.get(GeocodingService);
    geocodingService.reverseCodeAddress.and.returnValue(of({
      results: [{
        address_components: [{ short_name: 'Cordoba' }],
      }],
    }));
    geocodingService.codeAddress.and.returnValue(of({
      results: [{
        geometry: {
          location: { lat: -64, lng: -15 },
        },
      }],
    }));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should process address and call addMarker', () => {
    component.promos = [mockState[0]];
    component.currentLocality = 'Córdoba';
    //  component.markers = [{ marker: 'marker', id: 'd9f660ba918ab1b7b5f342755d121a2c' }];
    const spy = spyOn(component, 'addMarkers').and.returnValue(true);
    jasmine.clock().install();
    component.getMarkers();
    jasmine.clock().tick(2010);
    jasmine.clock().uninstall();
    expect(component.promos.length).toEqual(0);
    expect(spy).toHaveBeenCalled();
    spy.calls.reset();
  });

  it('should addMarker with all details', () => {
    component.markers = [{
      lat: -31.4688676,
      lng: -64.1888493,
    }];
    component.addMarkers(
      {
        street: 'Colon',
        locality: 'Córdoba',
        province: 'Cordoba',
        geoposition: { lat: -31.4688676, lng: -64.1888493 },
      },
      mockState[0],
    );
    expect(component.markers.length).toEqual(1);
  });

  // it('should addMarker new mark in markersFiltered', () => {
  //   const spy = spyOn(component, 'arePointsNear').and.returnValue(true);
  //   component.markersFiltered = [{ lat: 1, lng: 2 }];
  //   component.markers = [{ lat: 2, lng: 1 }];
  //   component.filterPromosNearPosition({});
  //   expect(component.markersFiltered.length).toEqual(2);
  //   spy.calls.reset();
  // });

  it('should verifyPosition', () => {
    // const spy = spyOn(component, 'filterPromosNearPosition').and.returnValue(true);
    const spyAreaPointsNear = spyOn(component, 'arePointsNear').and.returnValue(true);
    component.verifyPosition({ lat: 1, lng: 2 });
    expect(spyAreaPointsNear).toHaveBeenCalled();
    expect(component.outOfBounds).toEqual(false);
    // spy.calls.reset();
    spyAreaPointsNear.calls.reset();
  });

  it('should set icon if mark is selected and clean the previous selected', () => {
    const mark = {
      isSelected: false, promotions: [
        { planPrincipal: 'algo' }],
    };
    component.markersFiltered = [{
      isSelected: true, promotions: [
        { planPrincipal: 'algo' }, { planPrincipal: 'algo' },
      ],
    }];
    component.markerSelect(mark);
    expect(mark.isSelected).toEqual(true);
  });

  it('should return function when it has not promos', () => {
    component.promos = [];
    component.getMarkers();
    expect(component.promos.length).toEqual(0);
  });

  it('should call clearInterval', () => {
    component.promos = [mockState[0]];
    component.getMarkers();
    expect(component.promos.length).toEqual(0);
  });

  it('should set icon if mark is selected', () => {

    const mark = {
      isSelected: false, promotions: [
        { planPrincipal: 'algo' }],
    };
    component.markerSelect(mark);
    expect(mark.isSelected).toEqual(true);
  });
  it('should call onDestroy and unsubscribe', () => {
    component.subscriptions = [new Subscription()];
    const spySubscriptions = spyOn(component.subscriptions[0], 'unsubscribe');
    component.ngOnDestroy();
    expect(spySubscriptions).toHaveBeenCalled();
    spySubscriptions.calls.reset();
  });

  /* it('should dispatch action getNewLocation when has locality', () => {
     const spy = spyOn(component, 'dispatchActions').and.returnValue(true);
     component.getNewLocation();
     expect(spy).toHaveBeenCalled();
     spy.calls.reset();
   });*/

  /* it('should not dispatch action getNewLocation when it has not locality', () => {
     geocodingService.reverseCodeAddress.and.returnValue(of({
       results: [],
     }));
     component.getNewLocation();
     expect(component.outOfBounds).toBeFalsy();
   });*/

  /* it('should call dispatch store action', () => {
     const spy = spyOn(store, 'dispatch').and.returnValue(true);
     component.dispatchActions();
     expect(spy).toHaveBeenCalled();
     spy.calls.reset();
   });*/

  /* it('should change showLabels', () => {
     component.manageZoom(16);
     expect(component.showLabels).toBeTruthy();
   });*/

  /* it('should resolvePromotions, call get markers and set outOfBounds', () => {
     component.outOfBounds = true;
     const spy = spyOn(component, 'getMarkers').and.returnValue(true);
     component.resolvePromotions({ data: mockState });
     expect(component.outOfBounds).toBeFalsy();
     component.resolvePromotions({ data: mockState });
     expect(component.outOfBounds).toBeFalsy();
     expect(spy).toHaveBeenCalled();
     spy.calls.reset();
   });*/

  it('should resolvePromotions when it has error', () => {
    component.resolvePromotions({ error: true });
    expect(component.isLoading).toBeFalsy();
  });

  it('should resolvePromotions when it has not promotions', () => {
    component.resolvePromotions({ data: [] });
    expect(component.isEnableGeolocation).toBeTruthy();
  });

  it('should truncate label', () => {
    expect(component.truncateLabel('truncated label', false)).toEqual('truncated lab');
    expect(component.truncateLabel('truncated label', true)).toEqual('truncated label');
  });

  it('should calculate number of promos', () => {
    // tslint:disable-next-line: prefer-const
    let marker: Marker;
    const text = calculatorText([marker], 1);

    expect(text).toEqual({ text: '1 promos', index: 1 });
  });

  /* it('should call getCurrentPosition when receives empty filters', () => {
     const spy = spyOn(component, 'getCurrentPosition').and.returnValue(true);

     component.onFilterApplied({ province: null, locality: null, category: [] });
     expect(spy).toHaveBeenCalled();
   });*/

  /*it('should init component and get current position but without locality', () => {
    const mapMock = {
      coords: {
        latitude: -65.000,
        longitude: -35.000,
      },
    };

    const spy = spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake((callback) => {
      callback(mapMock);
    });
    geocodingService.reverseCodeAddress.and.returnValue(of({
      results: [],
    }));
    component.getCurrentPosition();
    expect(component.isEnableGeolocation).toBeFalsy();
    spy.calls.reset();
  });*/

});
