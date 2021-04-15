import { FeaturedPromotionRuleActions, FeaturedPromotionRuleActionsTypes } from './featured-promotion-rule.actions';

export interface IFeaturedPromotionRule {
  data: any;
  pending: boolean;
  error: boolean;
  isFetchCompleted: boolean;
}

export const initialState: IFeaturedPromotionRule = {
  data: null,
  pending: null,
  error: null,
  isFetchCompleted: null,
};

export function reducer(state = initialState, action: FeaturedPromotionRuleActions): IFeaturedPromotionRule {
  switch (action.type) {
    case FeaturedPromotionRuleActionsTypes.FETCH_PENDING:
      return { ...state, pending: true };

    case FeaturedPromotionRuleActionsTypes.FETCH_FULFILLED:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: false,
        data: action.payload,
      };

    case FeaturedPromotionRuleActionsTypes.FETCH_ERROR:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: true,
        data: null,
      };

    case FeaturedPromotionRuleActionsTypes.CLEAR_DATA:
      return initialState;

    default:
      return state;
  }
}
