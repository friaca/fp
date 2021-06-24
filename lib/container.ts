/**
 * Functor is simply a type that implements map
 * Functor = Mappable 
 */

/**
 * This Container class in particular is pretty simple and in most cases it's simply an identity function
 * (minus the `map`)
 */
class Container {
  // This should be a private variable but I'm letting it public just for the unit tests.
  $value;

  constructor(x: any) {
    this.$value = x;
  }

  static of(x: any) {
    return new Container(x);
  }

  map(f: Function) {
    return Container.of(f(this.$value));
  }
}

export default Container;