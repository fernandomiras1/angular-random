import { PromotionsCountActions, PromotionsCountActionsTypes } from './promotions-count.actions';

export interface IStatePromotionsCount {
  data: any;
  pending: boolean;
  error: boolean;
  isFetchCompleted: boolean;
}

export const initialState: IStatePromotionsCount = {
  data: null,
  pending: null,
  error: null,
  isFetchCompleted: false,
};

export function reducer(state = initialState, action: PromotionsCountActions): IStatePromotionsCount {
  switch (action.type) {
    case PromotionsCountActionsTypes.FETCH_PENDING:
      return {
        ...state,
        pending: true,
        error: false,
        isFetchCompleted: false,
      };

    case PromotionsCountActionsTypes.FETCH_FULFILLED:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: false,
        data: action.payload,
      };

    case PromotionsCountActionsTypes.FETCH_ERROR:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: true,
        data: null,
      };

    case PromotionsCountActionsTypes.CLEAR_DATA:
      return initialState;

    default:
      return state;
  }
}
