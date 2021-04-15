import { BussinesRulesActions , BussinesRulesActionsTypes } from './bussines-rules-actions';

export interface IBussinesRules {
  data: any;
  pending: boolean;
  error: boolean;
  isFetchCompleted: boolean;
}

export const initialState: IBussinesRules = {
  data: null,
  pending: null,
  error: null,
  isFetchCompleted: false,
};

export function reducer(state = initialState, action: BussinesRulesActions): IBussinesRules {
  switch (action.type) {
    case BussinesRulesActionsTypes.FETCH_PENDING:
      return {
        ...state,
        pending: true,
        error: false,
        isFetchCompleted: false,
      };

    case BussinesRulesActionsTypes.FETCH_FULFILLED:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: false,
        data: action.payload,
      };

    case BussinesRulesActionsTypes.FETCH_ERROR:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: true,
        data: null,
      };

    case BussinesRulesActionsTypes.CLEAR_DATA:
      return initialState;

    default:
      return state;
  }
}
