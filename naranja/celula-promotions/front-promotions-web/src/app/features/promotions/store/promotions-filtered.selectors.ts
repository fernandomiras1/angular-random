import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPromotions from './promotions-filtered.reducer';
export const selectPromosState = createFeatureSelector<fromPromotions.IPromotions>('promotions-filtered');
export const selectData = createSelector(selectPromosState, (state: fromPromotions.IPromotions) => {
  if (state.isFetchCompleted) {
    return { data: state.data, error: state.error };
  }
});
