import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalizeFirstPipe, ElypsisPipe } from '../../../pipes/custom.pipes';
import { InfoChipsMobileComponent } from './info-chips.component';

describe('InfoChipsComponent', () => {
  let component: InfoChipsMobileComponent;
  let fixture: ComponentFixture<InfoChipsMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoChipsMobileComponent, CapitalizeFirstPipe, ElypsisPipe],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoChipsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
