import { selectData } from './promotion.selectors';
import { IPromotion } from './promotion.reducer';

describe('Promotion Selector', () => {
  const fakeData = { id: '1' };

  it('should return true', () => {
    const fakeState: IPromotion = {
      data: fakeData,
      pending: false,
      error: false,
      isFetchCompleted: true,
    };
    selectData.projector(fakeState);
    expect(fakeState.isFetchCompleted).toBe(true);
  });

  it('should return false', () => {
    const fakeState: IPromotion = {
      data: fakeData,
      pending: false,
      error: false,
      isFetchCompleted: false,
    };
    selectData.projector(fakeState);
    expect(fakeState.isFetchCompleted).toBe(false);

  });
});
