import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { W2flySubtitleComponent } from './w2fly-subtitle.component'

describe('W2flySubtitleComponent', () => {
  let component: W2flySubtitleComponent
  let fixture: ComponentFixture<W2flySubtitleComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [W2flySubtitleComponent],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(W2flySubtitleComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
