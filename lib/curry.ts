// curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c
export default function curry(fn: Function): Function {
  const arity = fn.length;

  return function $curry(...args: any[]): any {
    return args.length < arity ?
      $curry.bind(null, ...args) :
      fn.call(null, ...args);
  }
}

