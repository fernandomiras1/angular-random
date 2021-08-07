import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { W2flyTagComponent } from './w2fly-tag.component'

describe('W2flyTagComponent', () => {
  let component: W2flyTagComponent
  let fixture: ComponentFixture<W2flyTagComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [W2flyTagComponent],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(W2flyTagComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
