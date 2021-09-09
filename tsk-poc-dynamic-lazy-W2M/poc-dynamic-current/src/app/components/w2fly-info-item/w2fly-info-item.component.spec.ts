import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { W2flyInfoItemComponent } from './w2fly-info-item.component'

describe('W2flyInfoItemComponent', () => {
  let component: W2flyInfoItemComponent
  let fixture: ComponentFixture<W2flyInfoItemComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [W2flyInfoItemComponent],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(W2flyInfoItemComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
