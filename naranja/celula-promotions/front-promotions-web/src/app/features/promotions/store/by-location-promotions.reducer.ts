import { ByLocationPromotionsActions, ByLocationPromotionsActionsTypes } from './by-location-promotions.actions';

export interface IByLocationPromotions {
  data: any;
  pending: boolean;
  error: boolean;
  isFetchCompleted: boolean;
}

export const initialState: IByLocationPromotions = {
  data: null,
  pending: null,
  error: null,
  isFetchCompleted: false,
};

export function reducer(state = initialState, action: ByLocationPromotionsActions): IByLocationPromotions {
  switch (action.type) {
    case ByLocationPromotionsActionsTypes.FETCH_PENDING:
      return {
        ...state,
        pending: true,
        error: false,
        isFetchCompleted: false,
      };

    case ByLocationPromotionsActionsTypes.FETCH_FULFILLED:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: false,
        data: action.payload,
      };

    case ByLocationPromotionsActionsTypes.FETCH_ERROR:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: true,
        data: null,
      };

    case ByLocationPromotionsActionsTypes.CLEAR_DATA:
      return initialState;

    default:
      return state;
  }
}
