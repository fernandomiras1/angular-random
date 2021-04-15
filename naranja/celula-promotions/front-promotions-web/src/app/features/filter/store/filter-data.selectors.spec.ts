import { selectData } from './filter-data.selectors';
import { IFilterData } from './filter-data.reducer';

describe('FilterData Selector', () => {
  const fakeData = [
      { id: '1' },
      { id: '2' },
  ];

  it('should return true', () => {
    const fakeState: IFilterData = {
      data: fakeData,
      pending: false,
      error: false,
      isFetchCompleted: true,
    };
    selectData.projector(fakeState);
    expect(fakeState.isFetchCompleted).toBe(true);
  });

  it('should return false', () => {
    const fakeState: IFilterData = {
      data: fakeData,
      pending: false,
      error: false,
      isFetchCompleted: false,
    };
    selectData.projector(fakeState);
    expect(fakeState.isFetchCompleted).toBe(false);

  });
});
