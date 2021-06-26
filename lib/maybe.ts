import { inspect } from '../util/inspect';

class Maybe {
  // This should be a private variable but I'm letting it public just for the unit tests.
  $value;

  constructor(x: any) {
    this.$value = x;
  }

  static of(x: any) {
    return new Maybe(x);
  }

  get isNothing() {
    return this.$value === null || this.$value === null;
  }

  map(fn: Function) {
    return this.isNothing ? this : Maybe.of(fn(this.$value));
  }

  inspect() {
    return this.isNothing ? 'Nothing' : `Just(${inspect(this.$value)})`;
  }
}

export default Maybe;