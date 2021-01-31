import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { W2flyBasicCardComponent } from './w2fly-basic-card.component'

describe('W2flyBasciCardComponent', () => {
  let component: W2flyBasicCardComponent
  let fixture: ComponentFixture<W2flyBasicCardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [W2flyBasicCardComponent],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(W2flyBasicCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
