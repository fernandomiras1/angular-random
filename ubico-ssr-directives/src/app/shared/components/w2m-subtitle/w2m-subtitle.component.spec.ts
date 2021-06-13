import { ComponentFixture, TestBed } from '@angular/core/testing'

import { W2mSubtitleComponent } from './w2m-subtitle.component'

describe('W2mSubtitleComponent', () => {
  let component: W2mSubtitleComponent
  let fixture: ComponentFixture<W2mSubtitleComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [W2mSubtitleComponent],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(W2mSubtitleComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
