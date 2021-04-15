import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingModule } from '@testing/utils/utils';
import { NavbarMobileComponent } from './navbar.component';
import { SharedModule } from '../../../shared.module';
import { NavigationService } from '@shared/services/navigation.service';
import { WindowService } from '@core/utils/services/window.service';

describe('NavbarMobileComponent', () => {
  let component: NavbarMobileComponent;
  let fixture: ComponentFixture<NavbarMobileComponent>;

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
    fixture = TestBed.createComponent(NavbarMobileComponent);
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
});
