import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { SectionInfoImageCardsComponent } from './section-info-image-cards.component'

describe('SectionInfoImageCardsComponent', () => {
  let component: SectionInfoImageCardsComponent
  let fixture: ComponentFixture<SectionInfoImageCardsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionInfoImageCardsComponent],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionInfoImageCardsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
