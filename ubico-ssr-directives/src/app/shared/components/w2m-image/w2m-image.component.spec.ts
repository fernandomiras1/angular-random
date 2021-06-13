import { ComponentFixture, TestBed } from '@angular/core/testing'

import { W2mImageComponent } from './w2m-image.component'

describe('W2mImageComponent', () => {
  let component: W2mImageComponent
  let fixture: ComponentFixture<W2mImageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [W2mImageComponent],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(W2mImageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
