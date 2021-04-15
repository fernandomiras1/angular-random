import { PaidMediaPromotionsActionsTypes, PaidMediaPromotionsActions } from './paid-media-promotions.actions';

export interface IPaidMediaPromotions {
  data: any;
  pending: boolean;
  error: boolean;
  isFetchCompleted: boolean;
}

export const initialState: IPaidMediaPromotions = {
  data: null,
  pending: null,
  error: null,
  isFetchCompleted: false,
};

export function reducer(state = initialState, action: PaidMediaPromotionsActions): IPaidMediaPromotions {
  switch (action.type) {
    case PaidMediaPromotionsActionsTypes.FETCH_PENDING:
      return {
        ...state,
        pending: true,
        error: false,
        isFetchCompleted: false,
      };

    case PaidMediaPromotionsActionsTypes.FETCH_FULFILLED:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: false,
        data: action.payload,
      };

    case PaidMediaPromotionsActionsTypes.FETCH_ERROR:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: true,
        data: null,
      };

    case PaidMediaPromotionsActionsTypes.CLEAR_DATA:
      return initialState;

    default:
      return state;
  }
}
