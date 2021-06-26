import Maybe from '../lib/maybe';

describe('optional types', () => {
  // -- Maybes -------------------------------
  const justNumber = Maybe.of(5);
  const justObject = Maybe.of({prop: 'value'});
  const noneValue = Maybe.of(null);

  // -- Helpers ------------------------------
  const toUpperCase = x => x.toUpperCase();
  const exclamation = x => `${x}!`;

  it('encapsulates values', () => {
    expect(justNumber.inspect()).toBe(`Just(5)`);
    expect(justObject.inspect()).toBe(`Just({prop: 'value'})`);
  })

  it('returns "Nothing" when value is null or undefined', () => {
    expect(noneValue.inspect()).toBe('Nothing');
  })

  it('doesn\'t break when trying to map or treat invalid values', () => {
    expect(noneValue.map(x => x * 2).inspect()).toBe(`Nothing`);   
  })

  it('maps the encapsulated value normally', () => {
    expect(justObject.map(x => toUpperCase(x.prop)).map(exclamation).inspect()).toBe(`Just('VALUE!')`);
  })
})