import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { SliderConfig } from './model/slider-config'
import { SliderComponent } from './slider.component'

@Component({
  template: `<div class="glide__bullets">
    <div class="glide__bullet"></div>
  </div>`,
})
class MockElementRef implements ElementRef<any> {
  constructor(public nativeElement: ElementRef) { }
}

const DEFAULT_CONFIG: SliderConfig = {
  alignBullets: 'center',
  positionBullets: 'bottom',
  customBulletHTML: '<div></div>',
}

describe('SliderComponent', () => {
  let component: SliderComponent
  let fixture: ComponentFixture<SliderComponent>
  let compiled: any

  let componentConfig: SliderComponent
  let fixtureConfig: ComponentFixture<SliderComponent>
  let compiledConfig: any

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [SliderComponent],
      providers: [{ provide: ElementRef, useValue: MockElementRef }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(async () => {
    // Mock ngx-glide
    const bullets: HTMLElement = document.createElement('div')
    const bullet: HTMLElement = document.createElement('div')
    bullets.classList.add('glide__bullets')
    bullet.classList.add('glide__bullet')
    bullets.append(bullet)
    bullets.append(bullet)

    // Not  sliderConfig
    fixture = TestBed.createComponent(SliderComponent)
    component = fixture.componentInstance
    component.sliderConfig = {}
    compiled = fixture.debugElement.nativeElement
    const glide: HTMLElement = compiled.querySelector('ngx-glide')
    glide.append(bullets)
    fixture.detectChanges()

    // sliderConfig
    fixtureConfig = TestBed.createComponent(SliderComponent)
    componentConfig = fixtureConfig.componentInstance
    componentConfig.sliderConfig = DEFAULT_CONFIG
    compiledConfig = fixtureConfig.nativeElement
    const glideConfig: HTMLElement = compiledConfig.querySelector('ngx-glide')
    glideConfig.append(bullets)
    fixtureConfig.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should create width sliderConfig', () => {
    expect(componentConfig).toBeTruthy()
  })
})
