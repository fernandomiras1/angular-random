import { Location } from '@angular/common';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MockStore, TestingModule } from '@testing/utils/utils';
import { WindowService } from '@core/utils/services/window.service';

import { NavbarWebComponent } from './navbar.component';
import { AppState } from '../../../../root-store/root-store.reducer';
import { SharedModule } from '../../../shared.module';
import { NavigationService } from '@shared/services/navigation.service';

describe('NavbarComponent - Web', () => {
  let component: NavbarWebComponent;
  let fixture: ComponentFixture<NavbarWebComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        TestingModule,
      ],
      providers: [
        WindowService,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(NavbarWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to "promo" route with promo id param', () => {
    const spy = spyOn(NavigationService.prototype, 'goBack');
    component.goBack();
    expect(spy).toHaveBeenCalled();
  });

  it('should navigate to home route', fakeAsync(() => {
    component.goHome();
    tick(50);
    expect(location.path()).toBe('/');
  }));
});
