import { TestBed } from '@angular/core/testing';
import { PromotionsUtils } from './promotions.utils';

describe('PromotionsUtils', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    expect(PromotionsUtils).toBeTruthy();
  });

  it('should contain the main plan', () => {
    const mainPlanMock = 'title en local,subtitle';
    const res = PromotionsUtils.setTitle(mainPlanMock);

    expect(res).toEqual({ title: 'title', subtitle: 'subtitle' });
  });

  it('should contain the category in the icon name', () => {
    const category = 'CATEGORY';
    const utils = new PromotionsUtils();
    const res = utils.setIcon(category);

    expect(res).toContain('category');
  });

});
