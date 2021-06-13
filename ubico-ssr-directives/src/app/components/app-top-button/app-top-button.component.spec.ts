import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AppTopButtonComponent } from './app-top-button.component'

describe('AppTopButtonComponent', () => {
  let component: AppTopButtonComponent
  let fixture: ComponentFixture<AppTopButtonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppTopButtonComponent],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTopButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
