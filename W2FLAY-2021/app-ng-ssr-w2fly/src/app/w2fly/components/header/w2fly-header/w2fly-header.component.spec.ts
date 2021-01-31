import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { W2flyHeaderComponent } from './w2fly-header.component'

describe('W2flyHeaderComponent', () => {
  let component: W2flyHeaderComponent
  let fixture: ComponentFixture<W2flyHeaderComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [W2flyHeaderComponent],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(W2flyHeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
