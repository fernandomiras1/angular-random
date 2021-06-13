import { ComponentFixture, TestBed } from '@angular/core/testing'

import { W2mLinkComponent } from './w2m-link.component'

describe('W2mLinkComponent', () => {
  let component: W2mLinkComponent
  let fixture: ComponentFixture<W2mLinkComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [W2mLinkComponent],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(W2mLinkComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
