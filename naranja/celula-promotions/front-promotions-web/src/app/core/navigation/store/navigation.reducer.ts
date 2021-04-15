import { NavigationActions, NavigationActionsTypes } from './navigation.actions';
import { NavigationMetaData } from '../models/navigation.model';

export interface NavigationState {
  history: any;
}

export const initialState: NavigationState = {
  history: {},
};

export function reducer(state = initialState, action: NavigationActions): NavigationState {
  switch (action.type) {
    case NavigationActionsTypes.SAVE_DATA:

      const newState = { ...state };
      newState.history[action.payload.componentName] = action.payload;

      return newState;

    case NavigationActionsTypes.CLEAR_DATA:
      return initialState;

    default:
      return state;
  }
}
