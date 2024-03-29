import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { SectionIconsComponent } from './section-icons.component'

describe('SectionIconsComponent', () => {
  let component: SectionIconsComponent
  let fixture: ComponentFixture<SectionIconsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionIconsComponent],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionIconsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
