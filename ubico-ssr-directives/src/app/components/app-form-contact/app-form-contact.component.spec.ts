import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AppFormContactComponent } from './app-form-contact.component'

describe('AppFormContactComponent', () => {
  let component: AppFormContactComponent
  let fixture: ComponentFixture<AppFormContactComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppFormContactComponent],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFormContactComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
