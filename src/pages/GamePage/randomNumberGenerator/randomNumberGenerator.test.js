import { randomNumberGenerator } from './randomNumberGenerator';

describe('randomNumberGenerator', () => {
  it('throws an error when the input is not a positive integer', () => {
    expect(() => randomNumberGenerator(-1)).toThrow();
    expect(() => randomNumberGenerator(0)).toThrow();
    expect(() => randomNumberGenerator('2')).toThrow();
    expect(() => randomNumberGenerator({})).toThrow();
    expect(() => randomNumberGenerator([])).toThrow();
    expect(() => randomNumberGenerator()).toThrow();
    expect(() => randomNumberGenerator(true)).toThrow();
  });

  it('returns an integer between 1 and 9, inclusive, when the input equals 1', () => {
    let numberOf1DigitTestsRan = 0;
    while (numberOf1DigitTestsRan < 1000) {
      const d1 = randomNumberGenerator(1);
      expect(d1).toBeGreaterThanOrEqual(1);
      expect(d1).toBeLessThanOrEqual(9);
      numberOf1DigitTestsRan++;
    }
  });

  it('returns a positive integer with the exact number of digits as specified by the input', () => {
    let numberOf1DigitTestsRan = 0;
    while (numberOf1DigitTestsRan < 100) {
      const d1 = `${randomNumberGenerator(1)}`;
      expect(d1.length).toBe(1);
      numberOf1DigitTestsRan++;
    }

    let numberOf2DigitTestsRan = 0;
    while (numberOf2DigitTestsRan < 100) {
      const d2 = `${randomNumberGenerator(2)}`;
      expect(d2.length).toBe(2);
      numberOf2DigitTestsRan++;
    }

    let numberOf3DigitTestsRan = 0;
    while (numberOf3DigitTestsRan < 100) {
      const d3 = `${randomNumberGenerator(3)}`;
      expect(d3.length).toBe(3);
      numberOf3DigitTestsRan++;
    }

    let numberOf4DigitTestsRan = 0;
    while (numberOf4DigitTestsRan < 100) {
      const d4 = `${randomNumberGenerator(4)}`;
      expect(d4.length).toBe(4);
      numberOf4DigitTestsRan++;
    }

    let numberOf5DigitTestsRan = 0;
    while (numberOf5DigitTestsRan < 100) {
      const d5 = `${randomNumberGenerator(5)}`;
      expect(d5.length).toBe(5);
      numberOf5DigitTestsRan++;
    }
  });
});
