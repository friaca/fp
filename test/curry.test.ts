import { curry } from '../lib/curry';

test('curries functions', () => {
  const sum = (a: number, b: number, c: number) => a + b + c;
  const curried = curry(sum)(1);
  const anotherCurried = curry(sum)(1, 2);
  const summed = curry(sum)(1, 2, 3);

  expect(typeof curried).toBe("function");
  expect(typeof anotherCurried).toBe("function");
  expect(summed).toBe(6);
})