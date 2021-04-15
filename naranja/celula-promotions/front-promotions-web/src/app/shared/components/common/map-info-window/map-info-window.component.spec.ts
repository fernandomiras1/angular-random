import { NO_ERRORS_SCHEMA, Renderer2 } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { NavigatorService } from '../../../../core/utils/services/navigator.service';
import { CapitalizeFirstPipe } from '../../../pipes/custom.pipes';
import { ImagesUtils } from './../../../utils/images.utils';
import { MapInfoWindowComponent } from './map-info-window.component';

const mockState = require('../../../../../../test/utils/promotions.json');

describe('MapInfoWindowComponent', () => {
  let component: MapInfoWindowComponent;
  let fixture: ComponentFixture<MapInfoWindowComponent>;
  let router: jasmine.SpyObj<Router>;
  const navigatorServiceSpy = jasmine.createSpyObj('NavigatorService', ['gtmUrlResolve', 'isMobile']);

  beforeEach(async(() => {
    const spyRouter = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      declarations: [MapInfoWindowComponent, CapitalizeFirstPipe],
      providers: [
        { provide: Router, useValue: spyRouter },
        { provide: NavigatorService, useValue: navigatorServiceSpy },
        Renderer2,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(MapInfoWindowComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    const navigatorService = TestBed.get(NavigatorService);
    navigatorService.gtmUrlResolve.and.returnValue({ show: false });
    router.navigate.and.returnValue(true);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call navigate', () => {
    component.onPromoSelected(mockState[0]);
    expect(router.navigate).toHaveBeenCalled();
  });

  it('should truncate label', () => {
    component.onPromoSelected(mockState[0]);
    expect(router.navigate).toHaveBeenCalled();
  });
  it('getEmptyIcon should call ImageUtils', () => {
    const spy = spyOn(ImagesUtils, 'generateName');
    component.getEmptyIcon(mockState[0]);
    expect(spy).toHaveBeenCalled();
  });

  /* it('onLoad() should call el SetAttribute()', () => {
     const list = new QueryList<ElementRef>();
     const er = new ElementRef({
       naturalHeight: 1,
       naturalWidth: 1,
       setAttribute() { },
     });
     const spy = spyOn(er.nativeElement, 'setAttribute').and.callThrough();
     list.reset([er]);
     component.images = list;
     component.onLoad('test');
     expect(component.images.length).toEqual(1);
     expect(spy).toHaveBeenCalled();
   });*/

  it('onPromoSelected should emit id if platform == app', () => {
    const spy = spyOn(component.promoClick, 'emit');
    component.platform = 'app';
    component.onPromoSelected(mockState[0]);
    expect(spy).toHaveBeenCalled();
  });
});
