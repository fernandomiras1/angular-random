import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPromotion from './featured-promotion-rule.reducer';

export const selectFeaturedPromotionRuleState = createFeatureSelector<fromPromotion.IFeaturedPromotionRule>('featured-promotion-rule');
export const selectFeaturedPromotionData =
  createSelector(selectFeaturedPromotionRuleState, (state: fromPromotion.IFeaturedPromotionRule) => {
    if (state.isFetchCompleted) {
      return { data: state.data, error: state.error };
    }
  });
