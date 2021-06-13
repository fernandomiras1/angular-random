/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { BoxImageTextComponent } from './box-image-text.component'

describe('BoxImageTextComponent', () => {
  let component: BoxImageTextComponent
  let fixture: ComponentFixture<BoxImageTextComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoxImageTextComponent],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxImageTextComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
