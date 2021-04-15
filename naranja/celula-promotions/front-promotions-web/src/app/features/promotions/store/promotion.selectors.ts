import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPromotion from './promotion.reducer';
export const selectPromoState = createFeatureSelector<fromPromotion.IPromotion>('promotion');
export const selectData = createSelector(selectPromoState, (state: fromPromotion.IPromotion) => {
  if (state.isFetchCompleted) {
    return { data: state.data, error: state.error };
  }
});
