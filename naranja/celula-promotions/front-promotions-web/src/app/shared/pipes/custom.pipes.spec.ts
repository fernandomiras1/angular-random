import { CapitalizeFirstPipe, ElypsisPipe } from './custom.pipes';

describe('CapitalizeFirstPipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizeFirstPipe();
    expect(pipe).toBeTruthy();
  });

  it('CapitalizeFirstPipe - should capitalize first letter', () => {
    const text = 'this is a test text.';

    const pipe = new CapitalizeFirstPipe();

    const result = pipe.transform(text);

    expect(result).toBe('This is a test text.');

  });

  it('CapitalizeFirstPipe - should return is value is null', () => {
    const text = null;

    const pipe = new CapitalizeFirstPipe();

    const result = pipe.transform(text);

    expect(result).toBe(null);

  });
});

describe('ElypsisPipe', () => {
  it('create an instance', () => {
    const pipe = new ElypsisPipe();
    expect(pipe).toBeTruthy();
  });

  it('ElypsisPipe - should return is value is null', () => {
    const text = null;

    const pipe = new ElypsisPipe();

    const result = pipe.transform(text);

    expect(result).toBe(null);

  });
  it('ElypsisPipe - should add ellipsis if length >= 10', () => {
    const text = 'this is a long test text.';

    const pipe = new ElypsisPipe();

    const result = pipe.transform(text);

    expect(result).toBe('this is a ...');

  });

  it('ElypsisPipe - should not add ellipsis if length < 10', () => {
    const text = 'text';

    const pipe = new ElypsisPipe();

    const result = pipe.transform(text);

    expect(result).toEqual(text);

  });
});
