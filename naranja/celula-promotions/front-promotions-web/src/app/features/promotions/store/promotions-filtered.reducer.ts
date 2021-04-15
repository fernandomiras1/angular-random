import { PromotionsFilteredActions, PromotionsFilteredActionsTypes } from './promotions-filtered.actions';

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

export function reducer(state = initialState, action: PromotionsFilteredActions): IPromotions {
  switch (action.type) {
    case PromotionsFilteredActionsTypes.FETCH_PENDING:
      return { ...state, isFetchCompleted: false, pending: true };

    case PromotionsFilteredActionsTypes.FETCH_FULFILLED:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: false,
        data: action.payload,
      };

    case PromotionsFilteredActionsTypes.FETCH_ERROR:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: true,
        data: null,
      };

    case PromotionsFilteredActionsTypes.CLEAR_DATA:
      return initialState;

    default:
      return state;
  }
}
