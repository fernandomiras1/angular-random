import { initialState, reducer } from './promotions.reducer';
import * as fromActions from './promotions.actions';

describe('Promotions reducer', () => {
  it('should return the default state', () => {
    const action = {
      type: null,
    };
    const state = reducer(undefined, action);

    expect(state).toBe(initialState);
  });
  it('should return pending true', () => {
    const action = new fromActions.FetchPending({ pageNumber: 1 });
    const state = reducer(undefined, action);

    expect(state.pending).toBeTruthy();
  });
  it('should return clear state', () => {
    const action = new fromActions.ClearData();
    const state = reducer(initialState, action);
    expect(state.pending).toEqual(null);
    expect(state.data).toEqual(null);
    expect(state.error).toEqual(null);
  });
  it('should return state with error', () => {
    const action = new fromActions.FetchError({
      type: 'ERROR',
      status: 401,
    });
    const state = reducer(initialState, action);
    expect(state.error).toEqual(true);
  });

  it('should return state with data', () => {
    const fakeData = 'data';

    const action = new fromActions.FetchFulfilled(fakeData);
    const state = reducer(initialState, action);
    expect(state.data).toEqual(fakeData);
  });
});
