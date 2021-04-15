import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPromotion from './by-bussinesRule-promotion.reducer';

// tslint:disable-next-line: max-line-length
export const selectByBussinesRulePromotionsState = createFeatureSelector<fromPromotion.IByBussinesRulePromotions>('by-bussinesRule-promotions');
export const selectByBussinesRulePromotionsData =
  createSelector(selectByBussinesRulePromotionsState, (state: fromPromotion.IByBussinesRulePromotions) => {
    if (state.isFetchCompleted) {
      return { data: state.data, error: state.error , code: state.code };
    }
  });
