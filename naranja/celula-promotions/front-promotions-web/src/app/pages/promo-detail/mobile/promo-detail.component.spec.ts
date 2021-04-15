import { HttpClient, HttpHandler } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { MockStore, TestingModule } from '@testing/utils/utils';
import { PromoDetailComponent } from './promo-detail.component';
import { AppState } from '../../../root-store/root-store.reducer';
import { DocumentService } from '../../../core/utils/services/document.service';
import { WindowService } from '../../../core/utils/services/window.service';
import { ZumoComponentesModule } from '@shared/zumo-componentes.module';

describe('PromoDetailComponent - mobile', () => {
  let component: PromoDetailComponent;
  let fixture: ComponentFixture<PromoDetailComponent>;
  let store: MockStore<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PromoDetailComponent],
      imports: [
        TranslateModule.forRoot(),
        ZumoComponentesModule,
        TestingModule,
      ],
      providers: [
        DocumentService,
        WindowService,
        HttpClient,
        HttpHandler,
        { provide: Store, useClass: MockStore },
        { provide: ActivatedRoute, useValue: { snapshot: { params: { id: '123' } } } },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(inject([Store], (testStore: MockStore<AppState>) => {
    store = testStore;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoDetailComponent);
    component = fixture.componentInstance;
    // component.promo = promoMock;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should capture the ID param from url', () => {
    fixture.detectChanges();
    expect(component.promoId).toBe('123');
  });

  it('should show loading, hide error and call mapState method', () => {
    const spy = spyOn(component, 'mapState').and.returnValue(false);
    component.retry();

    expect(component.loading).toBeTruthy();
    expect(component.error).toBeFalsy();
    expect(spy).toHaveBeenCalled();
  });
});
