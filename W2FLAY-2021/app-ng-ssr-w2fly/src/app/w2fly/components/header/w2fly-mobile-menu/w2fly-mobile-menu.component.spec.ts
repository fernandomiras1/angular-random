import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { W2flyMobileMenuComponent } from './w2fly-mobile-menu.component'

describe('W2flyMobileMenuComponent', () => {
  let component: W2flyMobileMenuComponent
  let fixture: ComponentFixture<W2flyMobileMenuComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [W2flyMobileMenuComponent],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(W2flyMobileMenuComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
