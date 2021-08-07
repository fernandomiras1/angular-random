import { ComponentFixture, TestBed } from '@angular/core/testing'

import { W2flyCarouselComponent } from './w2fly-carousel.component'

describe('W2flyCarouselComponent', () => {
  let component: W2flyCarouselComponent
  let fixture: ComponentFixture<W2flyCarouselComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [W2flyCarouselComponent],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(W2flyCarouselComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
