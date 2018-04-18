// Use the rewire package to expose hidden functions in module for testing
const rewire = require('rewire');

// Extract "private" isLeapYear function from DateCalculator
const DateCalculator = rewire('./v2');
const isLeapYear = DateCalculator.__get__('isLeapYear');

describe('dayToYear function', () => {
  describe('Leap years', () => {
    // There is a leap year every year whose number is perfectly divisible by four,
    // except for years which are both divisible by 100 and not divisible by 400.
    test('should occur every 4 years', () => {
      expect(isLeapYear(2004)).toBeTruthy();
    });

    test('but should not occur every 100 years', () => {
      expect(isLeapYear(2100)).toBeFalsy();
    });

    test('but should occur every 400 years', () => {
      expect(isLeapYear(2000)).toBeTruthy();
    });
  });
});
