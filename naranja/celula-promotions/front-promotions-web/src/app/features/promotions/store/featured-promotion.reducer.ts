import { FeaturedPromotionActions, FeaturedPromotionActionsTypes } from './featured-promotion.actions';

export interface IFeaturedPromotion {
  data: any;
  pending: boolean;
  error: boolean;
  isFetchCompleted: boolean;
}

export const initialState: IFeaturedPromotion = {
  data: null,
  pending: null,
  error: null,
  isFetchCompleted: null,
};

export function reducer(state = initialState, action: FeaturedPromotionActions): IFeaturedPromotion {
  switch (action.type) {
    case FeaturedPromotionActionsTypes.FETCH_PENDING:
      return { ...state, pending: true };

    case FeaturedPromotionActionsTypes.FETCH_FULFILLED:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: false,
        data: action.payload,
      };

    case FeaturedPromotionActionsTypes.FETCH_ERROR:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: true,
        data: null,
      };

    case FeaturedPromotionActionsTypes.CLEAR_DATA:
      return initialState;

    default:
      return state;
  }
}
