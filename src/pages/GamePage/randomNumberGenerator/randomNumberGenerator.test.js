import { randomNumberGenerator } from './randomNumberGenerator';

describe('randomNumberGenerator', () => {
  it('throws an error when the input is not an integer', () => {
    expect(() => randomNumberGenerator('3')).toThrow();
    expect(() => randomNumberGenerator({})).toThrow();
    expect(() => randomNumberGenerator([])).toThrow();
    expect(() => randomNumberGenerator()).toThrow();
    expect(() => randomNumberGenerator(true)).toThrow();
  });

  it('returns an integer', () => {
    const value = Number.isInteger(randomNumberGenerator(3));
    expect(value).toBeTruthy();
  });

  it('returns an integer with the exact number of digits as specified by the input', () => {
    const stringValue = `${randomNumberGenerator(3)}`;
    expect(stringValue.length).toBe(3);
  });
});
