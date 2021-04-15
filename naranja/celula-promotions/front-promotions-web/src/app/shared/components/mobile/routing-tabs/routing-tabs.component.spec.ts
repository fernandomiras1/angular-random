import { WindowService } from './../../../../core/utils/services/window.service';
import { TestingModule } from './../../../../../../test/utils/utils';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RoutingTabsComponent } from './routing-tabs.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../shared.module';

import { NavigationService } from '@shared/services/navigation.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';

describe('RoutingTabsComponent', () => {
  let component: RoutingTabsComponent;
  let fixture: ComponentFixture<RoutingTabsComponent>;
  let location: Location;
  let router: Router;

  @Component({
    template: 'todas',
  })
  class TodasComponent { }

  @Component({
    template: 'cerca-tuyo',
  })
  class CercaTuyoComponent { }

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        TestingModule,
        SharedModule,
        RouterTestingModule.withRoutes([
          { path: 'todas', component: TodasComponent },
          { path: 'cerca-tuyo', component: CercaTuyoComponent },
        ]),
      ],
      declarations: [
        TodasComponent,
        CercaTuyoComponent,
      ],
      providers: [
        // { provide: Store, useValue: routerSpy },
        // { provide: Router, useValue: routerSpy },
        // { provide: NavigationService, useValue: navigationServiceSpy },
        WindowService,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(RoutingTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => fixture.destroy());

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should set allActive to true', fakeAsync(() => {
    router.navigate(['/todas']);
    tick(50);
    component.ngOnInit();
    expect(component.allActive).toBeTruthy();
  }));

  it('ngOnInit should set nearestActive to true', fakeAsync(() => {
    router.navigate(['/cerca-tuyo']);
    tick(50);
    component.ngOnInit();
    expect(component.nearestActive).toBeTruthy();
  }));

  it('onTabClick should call router navigate', fakeAsync(() => {
    component.onTabClick({
      target: {
        innerText: 'todas',
      },
    });
    tick(50);
    expect(location.path()).toBe('/todas');
  }));

  it('onOpenFilter should call router navigate', () => {
    const spy = spyOn(component.openFilter, 'emit');
    component.onOpenFilter();
    expect(spy).toHaveBeenCalled();
  });
});
