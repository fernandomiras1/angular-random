import { HistoryNavigationActions, HistoryNavigationActionsTypes } from './history-navigation.actions';

export interface HistoryNavigationState {
  urlRoute: string[];
  previousLink: string;
}

export const initialState: HistoryNavigationState = {
  urlRoute: [],
  previousLink: null,
};

export function reducer(state = initialState, action: HistoryNavigationActions): HistoryNavigationState {
  switch (action.type) {
    case HistoryNavigationActionsTypes.SAVE_DATA:
      const newState = { ...state };
      newState.urlRoute.push(action.payload);
      return newState;

    case HistoryNavigationActionsTypes.SAVE_PREVIOUS_LINK:
      return {
        ...state,
        previousLink: action.payload,
      };

    case HistoryNavigationActionsTypes.CLEAR_DATA:
      return initialState;

    default:
      return state;
  }
}
