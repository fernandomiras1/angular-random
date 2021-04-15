import { Component, DebugElement, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavigatorService } from '@core/utils/services/navigator.service';
import { WindowService } from '@core/utils/services/window.service';

import { LazysizesDirective } from './lazysizes.directive';

@Component({
  template: `<div type="text" appDatasrc></div>`,
})
class TestLazySizesComponent {
}

describe('LazysizesDirective', () => {
  const navigatorServiceSpy: jasmine.SpyObj<NavigatorService> = jasmine.createSpyObj('NavigatorService', ['isCrawler']);
  const rendererSpy: jasmine.SpyObj<Renderer2> = jasmine.createSpyObj('Renderer2', ['setAttribute']);

  let component: TestLazySizesComponent;
  let fixture: ComponentFixture<TestLazySizesComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazysizesDirective, TestLazySizesComponent],
      providers: [NavigatorService, Renderer2, WindowService],
    });

    fixture = TestBed.createComponent(TestLazySizesComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.directive(LazysizesDirective));

    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });

  it('should call setAttributes', () => {

    navigatorServiceSpy.isCrawler.and.returnValue(false);
    const spy = jasmine.createSpy('setAttribute').and.returnValue(null);

    expect(spy).not.toHaveBeenCalled();
  });

});
