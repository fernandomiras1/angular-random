import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPromotionsCount from './promotions-count.reducer';

export const selectPromotionsCountState =
  createFeatureSelector<fromPromotionsCount.IStatePromotionsCount>('promotions-count');
export const selectPromotionsCountData =
  createSelector(selectPromotionsCountState, (state: fromPromotionsCount.IStatePromotionsCount) => {
    if (state.isFetchCompleted) {
      return { data: state.data, error: state.error };
    }
  });
