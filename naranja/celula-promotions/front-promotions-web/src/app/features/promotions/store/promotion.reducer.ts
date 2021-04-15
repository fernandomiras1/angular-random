import { PromotionActionsTypes, PromotionActions } from './promotion.actions';

export interface IPromotion {
  data: any;
  pending: boolean;
  error: boolean;
  isFetchCompleted: boolean;
}

export const initialState: IPromotion = {
  data: null,
  pending: null,
  error: null,
  isFetchCompleted: null,
};

export function reducer(state = initialState, action: PromotionActions): IPromotion {
  switch (action.type) {
    case PromotionActionsTypes.FETCH_PENDING:
      return { ...state, pending: true };

    case PromotionActionsTypes.FETCH_FULFILLED:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: false,
        data: action.payload,
      };

    case PromotionActionsTypes.FETCH_ERROR:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: true,
        data: null,
      };

    case PromotionActionsTypes.CLEAR_DATA:
      return initialState;

    default:
      return state;
  }
}
