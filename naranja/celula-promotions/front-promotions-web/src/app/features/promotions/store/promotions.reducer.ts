import { PromotionsActions, PromotionsActionsTypes } from './promotions.actions';

export interface IPromotions {
  data: any;
  pending: boolean;
  error: boolean;
  isFetchCompleted: boolean;
}

export const initialState: IPromotions = {
  data: null,
  pending: null,
  error: null,
  isFetchCompleted: null,
};

export function reducer(state = initialState, action: PromotionsActions): IPromotions {
  switch (action.type) {
    case PromotionsActionsTypes.FETCH_PENDING:
      return { ...state, isFetchCompleted: false, pending: true };

    case PromotionsActionsTypes.FETCH_FULFILLED:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: false,
        data: action.payload,
      };

    case PromotionsActionsTypes.FETCH_ERROR:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: true,
        data: null,
      };

    case PromotionsActionsTypes.CLEAR_DATA:
      return initialState;

    default:
      return state;
  }
}
