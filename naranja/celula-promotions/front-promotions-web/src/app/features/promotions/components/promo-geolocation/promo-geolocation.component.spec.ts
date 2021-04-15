import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { PromoGeolocationComponent } from './promo-geolocation.component';

describe('PromoGeolocationComponent', () => {
  let component: PromoGeolocationComponent;
  let fixture: ComponentFixture<PromoGeolocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PromoGeolocationComponent],
      imports: [
        TranslateModule.forRoot(),
        HttpClientTestingModule,
      ],
      providers: [],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoGeolocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
