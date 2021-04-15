import { ByBussinesRulePromotionsActions, ByBussinesRulePromotionsActionsTypes } from './by-bussinesRule-promotion.actions';

export interface IByBussinesRulePromotions {
  data: any;
  pending: boolean;
  error: boolean;
  isFetchCompleted: boolean;
  code: string;
}

export const initialState: IByBussinesRulePromotions = {
  data: null,
  pending: null,
  error: null,
  isFetchCompleted: false,
  code: null,
};

export function reducer(state = initialState, action: ByBussinesRulePromotionsActions): IByBussinesRulePromotions {
  switch (action.type) {
    case ByBussinesRulePromotionsActionsTypes.FETCH_PENDING:
      return {
        ...state,
        pending: true,
        error: false,
        isFetchCompleted: false,
        code: action.payload.code,
      };

    case ByBussinesRulePromotionsActionsTypes.FETCH_FULFILLED:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: false,
        data: action.payload,
        code: action.payload.code,
      };

    case ByBussinesRulePromotionsActionsTypes.FETCH_ERROR:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: true,
        data: null,
        code: action.payload.code,
      };

    case ByBussinesRulePromotionsActionsTypes.CLEAR_DATA:
      return initialState;

    default:
      return state;
  }
}
