import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { W2flyImageComponent } from './w2fly-image.component'

describe('W2flyImageComponent', () => {
  let component: W2flyImageComponent
  let fixture: ComponentFixture<W2flyImageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [W2flyImageComponent],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(W2flyImageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
