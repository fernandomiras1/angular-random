import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { W2flyButtonComponent } from './w2fly-button.component'

describe('W2flyButtonComponent', () => {
  let component: W2flyButtonComponent
  let fixture: ComponentFixture<W2flyButtonComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [W2flyButtonComponent],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(W2flyButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
