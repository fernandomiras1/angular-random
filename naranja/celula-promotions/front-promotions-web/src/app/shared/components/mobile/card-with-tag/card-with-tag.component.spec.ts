import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithTagMobileComponent } from './card-with-tag.component';

xdescribe('CardWithTagMobileComponent', () => {
  let component: CardWithTagMobileComponent;
  let fixture: ComponentFixture<CardWithTagMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardWithTagMobileComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWithTagMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
