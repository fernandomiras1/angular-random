import { selectData } from './promotions.selectors';
import { IPromotions } from './promotions.reducer';

describe('Promotions Selector', () => {
  const fakeData = [
        { id: '1' },
        { id: '2' },
  ];

  it('should return true', () => {
    const fakeState: IPromotions = {
      data: fakeData,
      pending: false,
      error: false,
      isFetchCompleted: true,
    };
    selectData.projector(fakeState);
    expect(fakeState.isFetchCompleted).toBe(true);
  });

  it('should return false', () => {
    const fakeState: IPromotions = {
      data: fakeData,
      pending: false,
      error: false,
      isFetchCompleted: false,
    };
    selectData.projector(fakeState);
    expect(fakeState.isFetchCompleted).toBe(false);

  });
});
