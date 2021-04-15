import { IFeaturedPromotion } from './featured-promotion.reducer';
import { selectFeaturedPromotionData } from './featured-promotion.selectors';

describe('Featured Promotion Selector', () => {
  const fakeData = { id: '1' };

  it('should return true', () => {
    const fakeState: IFeaturedPromotion = {
      data: fakeData,
      pending: false,
      error: false,
      isFetchCompleted: true,
    };
    selectFeaturedPromotionData.projector(fakeState);
    expect(fakeState.isFetchCompleted).toBe(true);
  });

  it('should return false', () => {
    const fakeState: IFeaturedPromotion = {
      data: fakeData,
      pending: false,
      error: false,
      isFetchCompleted: false,
    };
    selectFeaturedPromotionData.projector(fakeState);
    expect(fakeState.isFetchCompleted).toBe(false);

  });
});
