import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { W2flyAlertCommonComponent } from './w2fly-alert-common.component'

describe('W2flyAlertCommonComponent', () => {
  let component: W2flyAlertCommonComponent
  let fixture: ComponentFixture<W2flyAlertCommonComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [W2flyAlertCommonComponent],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(W2flyAlertCommonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
