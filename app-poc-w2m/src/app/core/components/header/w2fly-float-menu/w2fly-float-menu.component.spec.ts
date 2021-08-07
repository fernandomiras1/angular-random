import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { W2flyFloatMenuComponent } from './w2fly-float-menu.component'

describe('W2flyFloatMenuComponent', () => {
  let component: W2flyFloatMenuComponent
  let fixture: ComponentFixture<W2flyFloatMenuComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [W2flyFloatMenuComponent],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(W2flyFloatMenuComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
