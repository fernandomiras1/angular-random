import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SwiperDirective } from './swiper.directive';

@Component({
  template: `<div type="text" [appSwiper]="true"></div>`,
})
class TestSwiperComponent {
}

describe('SwiperDirective', () => {
  let component: TestSwiperComponent;
  let fixture: ComponentFixture<TestSwiperComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestSwiperComponent, SwiperDirective],
    });

    fixture = TestBed.createComponent(TestSwiperComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.directive(SwiperDirective));
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('HostListener onMouseDown', () => {
    const spyObj = spyOn(inputEl, 'triggerEventHandler');
    spyObj.and.callThrough();
    inputEl.triggerEventHandler('mousedown', { clientX: 100 });

    expect(spyObj).toHaveBeenCalled();

  });

  it('HostListener onMouseMove', () => {
    const directiveInstance = inputEl.injector.get(SwiperDirective);
    const spyObj = spyOn(inputEl, 'triggerEventHandler');
    spyObj.and.callThrough();
    directiveInstance.isDown = true;
    inputEl.triggerEventHandler('mousemove', { clientX: 1000 });
    expect(spyObj).toHaveBeenCalled();

  });

  it('HostListener onTouchMove', () => {
    const spyObj = spyOn(inputEl, 'triggerEventHandler');
    spyObj.and.callThrough();
    const directiveInstance = inputEl.injector.get(SwiperDirective);
    directiveInstance.isDown = true;
    inputEl.triggerEventHandler('touchmove', { touches: [{ clientX: 1000 }] });

    expect(spyObj).toHaveBeenCalled();

  });

  it('HostListener onTouchMove changedTouches', () => {
    const spyObj = spyOn(inputEl, 'triggerEventHandler');
    spyObj.and.callThrough();
    const directiveInstance = inputEl.injector.get(SwiperDirective);
    directiveInstance.isDown = true;
    inputEl.triggerEventHandler('touchmove', { touches: [null], changedTouches: [{ clientX: 1000 }] });

    expect(spyObj).toHaveBeenCalled();

  });

  it('HostListener onTouchMove swipeFrameDistance < 0', () => {
    const spyObj = spyOn(inputEl, 'triggerEventHandler');
    spyObj.and.callThrough();
    const directiveInstance = inputEl.injector.get(SwiperDirective);
    directiveInstance.isDown = true;
    inputEl.triggerEventHandler('touchmove', { touches: [null], changedTouches: [{ clientX: -1001000 }] });

    expect(spyObj).toHaveBeenCalled();

  });

  it('HostListener onTouchStart', () => {
    const spyObj = spyOn(inputEl, 'triggerEventHandler');
    spyObj.and.callThrough();
    const directiveInstance = inputEl.injector.get(SwiperDirective);
    directiveInstance.isDown = false;
    inputEl.triggerEventHandler('touchstart', { touches: [{ clientX: 1000 }] });

    expect(spyObj).toHaveBeenCalled();

  });

  it('HostListener onTouchStart branch', () => {
    const spyObj = spyOn(inputEl, 'triggerEventHandler');
    spyObj.and.callThrough();
    const directiveInstance = inputEl.injector.get(SwiperDirective);
    directiveInstance.isDown = false;
    inputEl.triggerEventHandler('touchstart', { touches: [null], changedTouches: [{ clientX: 1000 }] });

    expect(spyObj).toHaveBeenCalled();

  });

  it('HostListener onTouchEnd', () => {
    const spyObj = spyOn(inputEl, 'triggerEventHandler');
    spyObj.and.callThrough();
    const directiveInstance = inputEl.injector.get(SwiperDirective);
    directiveInstance.isDown = false;
    inputEl.triggerEventHandler('touchend', { touches: [{ clientX: 1000 }] });

    expect(spyObj).toHaveBeenCalled();

  });

  it('swipeLeft event emission', () => {
    const directiveInstance = inputEl.injector.get(SwiperDirective);
    directiveInstance.swipeLeft.emit(null);

    expect(directiveInstance.appSwiper).toBeFalsy();

  });

  it('swipeRight event emission', () => {
    const directiveInstance = inputEl.injector.get(SwiperDirective);
    directiveInstance.swipeRight.emit(null);
    expect(directiveInstance.appSwiper).toBeFalsy();

    // inputEl.triggerEventHandler('mouseout', null);
    // fixture.detectChanges();
    // expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
  });

});
