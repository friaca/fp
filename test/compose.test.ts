import compose from '../lib/compose';

describe('composition', () => {
  const toUpper = x => x.toUpperCase();
  const exclamation = x => `${x}!`;
  /* -------------------------------------- */
  const addOne = x => x + 1;
  const divideByTwo = x => x / 2;
  const square = x => x * x;

  it('composites two functions into one', () => {
    // shout :: String -> String
    const shout = compose(exclamation, toUpper);

    expect(shout('Hello, world')).toBe('HELLO, WORLD!');
    expect(() => shout(1973)).toThrow(TypeError);
  })

  it('composites multiple functions into one', () => {
    // calculate :: Number -> Number
    const calculate = compose(square, divideByTwo, addOne);

    expect(calculate(5)).toBe(9);
  })

  it('composes already composed functions', () => {
    // calculate :: Number -> Number
    const calculate = compose(square, divideByTwo, addOne); 
    // calculateAndAddOne :: Number -> Number
    const calculateAndAddOne = compose(addOne, calculate);

    expect(calculateAndAddOne(5)).toBe(10);
  })
})