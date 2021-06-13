import { ComponentFixture, TestBed } from '@angular/core/testing'

import { W2mButtonComponent } from './w2m-button.component'

describe('W2mButtonComponent', () => {
  let component: W2mButtonComponent
  let fixture: ComponentFixture<W2mButtonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [W2mButtonComponent],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(W2mButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
