import * as fromActions from './promotion.actions';

describe('filter-data: actions ', () => {
  it('FetchPending -- should create an action', () => {
    const fakeParams = {};
    const action = new fromActions.FetchPending(fakeParams);
    expect({ ...action }).toEqual({
      type: fromActions.PromotionActionsTypes.FETCH_PENDING,
      payload: fakeParams,
    });
  });

  it('FetchFulfilled -- should create an action', () => {
    const fakeParams = {};
    const action = new fromActions.FetchFulfilled(fakeParams);
    expect({ ...action }).toEqual({
      type: fromActions.PromotionActionsTypes.FETCH_FULFILLED,
      payload: fakeParams,
    });
  });

  it('FetchError -- should create an action', () => {
    const fakeParams = {};
    const action = new fromActions.FetchError(fakeParams);
    expect({ ...action }).toEqual({
      type: fromActions.PromotionActionsTypes.FETCH_ERROR,
      payload: fakeParams,
    });
  });

  it('ClearData -- should create an action', () => {
    const action = new fromActions.ClearData();
    expect({ ...action }).toEqual({
      type: fromActions.PromotionActionsTypes.CLEAR_DATA,
    });
  });
});
