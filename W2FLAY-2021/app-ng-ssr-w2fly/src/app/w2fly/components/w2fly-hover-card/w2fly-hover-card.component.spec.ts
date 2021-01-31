import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { W2flyHoverCardComponent } from './w2fly-hover-card.component'

describe('W2flyHoverCardComponent', () => {
  let component: W2flyHoverCardComponent
  let fixture: ComponentFixture<W2flyHoverCardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [W2flyHoverCardComponent],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(W2flyHoverCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
