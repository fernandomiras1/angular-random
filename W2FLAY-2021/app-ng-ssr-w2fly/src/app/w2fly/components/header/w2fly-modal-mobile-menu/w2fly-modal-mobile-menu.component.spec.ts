import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { W2flyModalMobileMenuComponent } from './w2fly-modal-mobile-menu.component'

describe('W2flyModalMobileMenuComponent', () => {
  let component: W2flyModalMobileMenuComponent
  let fixture: ComponentFixture<W2flyModalMobileMenuComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [W2flyModalMobileMenuComponent],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(W2flyModalMobileMenuComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
