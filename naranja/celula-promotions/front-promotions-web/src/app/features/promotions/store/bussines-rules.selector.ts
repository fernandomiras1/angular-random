import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPromotion from './bussines-rules-reducer';

export const selectBussinesRulesState = createFeatureSelector<fromPromotion.IBussinesRules>('bussines-rules');
export const selectBussinesRulesData =
  createSelector(selectBussinesRulesState, (state: fromPromotion.IBussinesRules) => {
    if (state.isFetchCompleted) {
      return { data: state.data, error: state.error };
    }
  });
