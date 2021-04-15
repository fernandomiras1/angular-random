import { TestBed } from '@angular/core/testing';
import { IFeaturedDomain, IFeaturedPromo, slideType } from '@core/models/featured-promotion.model';

import { PromotionRulesService } from './promotion-rules.service';

describe('PromotionRulesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromotionRulesService = TestBed.get(PromotionRulesService);
    expect(service).toBeTruthy();
  });

  it('should be call getFullPayload', () => {
    const service: PromotionRulesService = TestBed.get(PromotionRulesService);
    const domainValues: IFeaturedDomain = {
      domain: {
        province: 'Córdoba',
        categories: [],
      },
    };

    const featuredPromo: IFeaturedPromo = {
      payload: [
        {
          province: 'domain.province',
        },
        {
          category: 'domain.user.id',
        },
      ],
      dateFrom: '2020/02/01',
      dateTo: '2020/05/01',
      rules: [
        'rule4',
        'rule5',
      ],
      mainImageName: 'cuotas2.jpg',
      name: 'feature4',
      alt: '8 cuotas SIN INTERÉS! ',
      order: 5,
      description: '8 cuotas completamente sin interés en tu compra Naranja',
      id: 'bf10c99d5215cc4e02c69f49bd1c6fff',
      backImageName: 'interes.jpg',
      type: {
        description: slideType.DETAIL,
      },
    };

    const assert = JSON.stringify({
      aspect: {
        code: 'FEATURED',
        feature: 'feature4',
      },
      payload: {},
    });

    const result = JSON.stringify(service.getFullPayload(featuredPromo, domainValues));
    expect(result).toBe(assert);
  });

});
