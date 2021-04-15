import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPromotion from './featured-promotion.reducer';

export const selectFeaturedPromotionState = createFeatureSelector<fromPromotion.IFeaturedPromotion>('featured-promotion');
export const selectFeaturedPromotionData = createSelector(selectFeaturedPromotionState, (state: fromPromotion.IFeaturedPromotion) => {
  if (state.isFetchCompleted) {
    return { data: state.data, error: state.error };
  }
});
