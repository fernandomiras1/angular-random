import * as fromActions from './featured-promotion-rule.actions';

describe('FeaturedPromotionRuleActions', () => {
  it('FetchPending -- should create an action', () => {
    const fakeParams = {};
    const action = new fromActions.FetchPending(fakeParams);
    expect({ ...action }).toEqual({
      type: fromActions.FeaturedPromotionRuleActionsTypes.FETCH_PENDING,
      payload: fakeParams,
    });
  });

  it('FetchFulfilled -- should create an action', () => {
    const fakeParams = {};
    const action = new fromActions.FetchFulfilled(fakeParams);
    expect({ ...action }).toEqual({
      type: fromActions.FeaturedPromotionRuleActionsTypes.FETCH_FULFILLED,
      payload: fakeParams,
    });
  });

  it('FetchError -- should create an action', () => {
    const fakeParams = {};
    const action = new fromActions.FetchError(fakeParams);
    expect({ ...action }).toEqual({
      type: fromActions.FeaturedPromotionRuleActionsTypes.FETCH_ERROR,
      payload: fakeParams,
    });
  });

  it('ClearData -- should create an action', () => {
    const action = new fromActions.ClearData();
    expect({ ...action }).toEqual({
      type: fromActions.FeaturedPromotionRuleActionsTypes.CLEAR_DATA,
    });
  });
});
