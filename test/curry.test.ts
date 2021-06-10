import curry from '../lib/curry';

describe('currying', () => {
  it('curries functions with multiple arguments', () => {
    const sum = (a: number, b: number, c: number) => a + b + c;
    const curried = curry(sum)(1);
    const addThree = curry(sum)(1, 2);
    const summed = curry(sum)(1, 2, 3);

    expect(typeof curried).toBe("function");
    expect(typeof addThree).toBe("function");
    expect(addThree(10)).toBe(13);
    expect(summed).toBe(6);
  })

  it('curries filter', () => {
    const filter = curry((fn, xs) => xs.filter(fn));
    const onlyNumbers = filter(x => typeof x === 'number');

    expect(onlyNumbers([1, 2, 3, 'a', '12', 4])).toStrictEqual([1, 2, 3, 4]);
  })

  it('curries map', () => {
    const map = curry((fn, xs) => xs.map(fn));
    const square = map((x: number) => x * x);

    expect(square([1, 2, 3, 4, 5])).toStrictEqual([1, 4, 9, 16, 25]);
  })
})