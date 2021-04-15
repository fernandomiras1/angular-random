import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPaidMediaPromotion from './paid-media-promotions.reducer';

export const selectPaidMediaPromotionsState = createFeatureSelector<fromPaidMediaPromotion.IPaidMediaPromotions>('paid-media-promotions');
export const selectPaidMediaPromotionsData =
  createSelector(selectPaidMediaPromotionsState, (state: fromPaidMediaPromotion.IPaidMediaPromotions) => {
    if (state.isFetchCompleted) {
      return { data: state.data, error: state.error };
    }
  });
