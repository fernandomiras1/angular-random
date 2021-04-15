import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { promoMock } from '../../../../features/promotions/mocks/promotions.mocks';
import { PromotionsService } from '../../../../features/promotions/services/promotions.service';
import { SharedModule } from '../../../shared.module';
import { TestingModule } from './../../../../../../test/utils/utils';
import { WindowService } from './../../../../core/utils/services/window.service';
import { PromoCardSmallComponent } from './promo-card-small.component';

describe('PromoCardSmallComponent', () => {
  let component: PromoCardSmallComponent;
  let fixture: ComponentFixture<PromoCardSmallComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const promoServiceSpy = jasmine.createSpyObj('PromotionsService', ['getDaysCounter']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        TestingModule,
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: PromotionsService, useValue: promoServiceSpy },
        WindowService,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoCardSmallComponent);
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
      description: '12 cuotas en Mega',
      mainShortName: '',
      secondaryShortName: '',
    };
    component.setTitle(component.promo);

    expect(component.title).toBe('12 cuotas en Mega');
  });

  xit('should set subtitle of promotion to be "Smartes"', () => {
    component.promo.plan = {
      code: '',
      description: '12 cuotas en Mega',
      mainShortName: '',
      secondaryShortName: '',
    };
    component.setTitle(component.promo);
    component.promo.giftDiscount = {
      code: '2',
      description: 'Smartes',
      mainShortName: '',
      secondaryShortName: '',
    };
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
});
