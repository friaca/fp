// compose :: ((a -> b), (b -> c),  ..., (y -> z)) -> a -> z
export default function compose(...fns: Function[]) {
  return function (...args: any[]) {
    return fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0]
  }
}

// Compact version of compose
export const _compose = (...fns: Function[]) => 
  (...args: any[]) => 
    fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];