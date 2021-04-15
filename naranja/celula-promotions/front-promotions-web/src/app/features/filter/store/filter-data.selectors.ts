import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFilterData from './filter-data.reducer';
export const selectFilterDataState = createFeatureSelector<fromFilterData.IFilterData>('filter-data');
export const selectData = createSelector(selectFilterDataState, (state: fromFilterData.IFilterData) => {
  if (state.isFetchCompleted) {
    return state.data;
  }
});
