import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPromotion from './by-location-promotions.reducer';

export const selectByLocationPromotionsState = createFeatureSelector<fromPromotion.IByLocationPromotions>('by-location-promotions');
export const selectByLocationPromotionsData =
  createSelector(selectByLocationPromotionsState, (state: fromPromotion.IByLocationPromotions) => {
    if (state.isFetchCompleted) {
      return { data: state.data, error: state.error };
    }
  });
