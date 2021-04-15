import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithTagWebComponent } from './card-with-tag.component';

xdescribe('CardWithTagWebComponent', () => {
  let component: CardWithTagWebComponent;
  let fixture: ComponentFixture<CardWithTagWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardWithTagWebComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWithTagWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
