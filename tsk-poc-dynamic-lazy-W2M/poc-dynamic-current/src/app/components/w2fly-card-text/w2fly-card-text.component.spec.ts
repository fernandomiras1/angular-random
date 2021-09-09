import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { W2flyCardTextComponent } from './w2fly-card-text.component'

describe('W2flyCardTextComponent', () => {
  let component: W2flyCardTextComponent
  let fixture: ComponentFixture<W2flyCardTextComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [W2flyCardTextComponent],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(W2flyCardTextComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
