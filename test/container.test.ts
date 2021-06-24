import Container from '../lib/container';

describe('containerization', () => {
  const toUpperCase = (x: string) => x.toUpperCase();

  it('encapsulates values', () => {
    const numberContainer = Container.of(5);
    const stringContainer = Container.of('Protector');

    expect(typeof Container.of(numberContainer)).toBe('object');
    expect(stringContainer.map(toUpperCase).$value).toBe(Container.of('PROTECTOR').$value);
  })
})