import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { W2mInfoTextComponent } from './w2m-info-text.component'

describe('W2mInfoTextComponent', () => {
  let component: W2mInfoTextComponent
  let fixture: ComponentFixture<W2mInfoTextComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [W2mInfoTextComponent],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(W2mInfoTextComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
