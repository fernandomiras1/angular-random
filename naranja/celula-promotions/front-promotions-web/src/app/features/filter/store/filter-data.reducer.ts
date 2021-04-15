import { FilterDataActions, FilterDataActionsTypes } from './filter-data.actions';

export interface IFilterData {
  data: any;
  pending: boolean;
  error: boolean;
  isFetchCompleted: boolean;
}

export const initialState: IFilterData = {
  data: null,
  pending: null,
  error: null,
  isFetchCompleted: null,
};

export function reducer(state = initialState, action: FilterDataActions): IFilterData {
  switch (action.type) {
    case FilterDataActionsTypes.FETCH_PENDING:
      return { ...state, pending: true };

    case FilterDataActionsTypes.FETCH_FULFILLED:
      return {
        ...state,
        pending: false,
        isFetchCompleted: true,
        error: false,
        data: action.payload,
      };

    case FilterDataActionsTypes.FETCH_ERROR:
      return {
        ...state,
        pending: false,
        isFetchCompleted: false,
        error: true,
        data: null,
      };

    case FilterDataActionsTypes.CLEAR_DATA:
      return initialState;

    default:
      return state;
  }
}
