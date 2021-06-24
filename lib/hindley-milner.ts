// https://mostly-adequate.gitbook.io/mostly-adequate-guide/ch07

import curry from'./curry';

/**
 * `head` receives a T array and returns T
 */

// head :: [a] -> a
const head = (xs: any) => xs[0];

/**
 * `filter` receives a predicate function that returns a boolean, 
 * then receives a T array and returns a T array
 */

// filter :: (a -> Bool) -> [a] -> [a]
const filter = curry((f: Function, xs: any) => xs.filter(f));

/**
 * `reduce` receives a function that receives T and V (accumulator, current) and returns V,
 * then receives V as a initial value, then receives a T array and finally returns a V array 
 */

// reduce :: ((b, a) -> b) -> b -> [a] -> b
const reduce = curry((f: Function, x: any, xs: any) => xs.reduce(f, x));