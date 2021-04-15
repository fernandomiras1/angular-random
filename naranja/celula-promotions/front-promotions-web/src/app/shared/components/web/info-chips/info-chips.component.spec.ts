import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoChipsWebComponent } from './info-chips.component';
import { CapitalizeFirstPipe } from '../../../pipes/custom.pipes';

describe('InfoChipsComponent', () => {
  let component: InfoChipsWebComponent;
  let fixture: ComponentFixture<InfoChipsWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoChipsWebComponent, CapitalizeFirstPipe],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoChipsWebComponent);
    component = fixture.componentInstance;
    component.data = ['categories', 'categories', 'categories'];
    component.type = 'categories';
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should onEdit have been called', () => {
    const spy = spyOn(component, 'onEdit');
    component.onEdit();
    expect(spy).toHaveBeenCalled();
  });

  it('should onClose have been called', () => {
    const spy = spyOn(component, 'onClose');
    component.onClose();
    expect(spy).toHaveBeenCalled();
  });

  it('should moreData be 2', () => {
    component.processChipsData();
    fixture.detectChanges();
    expect(component.moreData).toBe(2);
  });
});
