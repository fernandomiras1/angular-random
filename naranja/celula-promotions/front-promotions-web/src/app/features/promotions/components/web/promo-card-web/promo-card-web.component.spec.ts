import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { WindowService } from '@core/utils/services/window.service';
import { StoreModule } from '@ngrx/store';
import { TestingModule } from '@testing/utils/utils';

import { promoMock } from '../../../mocks/promotions.mocks';
import { PromotionsService } from '../../../services/promotions.service';
import { PromoCardWebComponent } from './promo-card-web.component';

describe('PromoCardWebComponent', () => {
  let component: PromoCardWebComponent;
  let fixture: ComponentFixture<PromoCardWebComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const promoServiceSpy = jasmine.createSpyObj('PromotionsService', ['getDaysCounter']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule,
        StoreModule.forRoot({}),
        TestingModule,
      ],
      declarations: [],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: PromotionsService, useValue: promoServiceSpy },
        WindowService,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoCardWebComponent);
    component = fixture.componentInstance;

    component.promo = promoMock;
    component.index = 0;
    const promoService = TestBed.get(PromotionsService);
    promoService.getDaysCounter.and.returnValue({ show: false });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should set title of promotion to be "12 cuotas"', () => {
    component.promo.plan = {
      code: '',
      description: '12 cuotas',
      mainShortName: '',
      secondaryShortName: '',
    };
    component.setTitle(component.promo);

    expect(component.title).toBe('12 cuotas');
  });

  xit('should set subtitle of promotion to be "Smartes"', () => {
    component.promo.plan = {
      code: '',
      description: '12 cuotas',
      mainShortName: '',
      secondaryShortName: '',
    };
    component.promo.giftDiscount = {
      code: '2',
      description: 'Smartes',
      mainShortName: '',
      secondaryShortName: '',
    };
    component.setTitle(component.promo);

    expect(component.subtitle).toContain('Smartes');
  });

  it('should set the icon url of promotion category', () => {
    component.promo.sector = {
      category: 'ropa y accesorios',
      sector: '',
      subCategory: '',
    };

    component.setIcon(component.promo.sector.category);

    expect(component.categoryIcon).toBe('assets/images/icons/categories/ropa-y-accesorios.svg');
  });

  xit('should navigate to "promo" route with promo id param', () => {
    component.promo.id = '1';

    const router = TestBed.get(Router);
    component.goDetail();

    expect(router.navigate).toHaveBeenCalledWith(['promo', component.promo.id, '12Cuotas-Smartes--RopaYAccesorios']);
  });

  /*it('should set width to 54', () => {
    component.setWidth();
    expect(component.widthLogo).toBe(54);
  });*/
});
