const { DateCalculator } = require('./v4');

describe('DateCalculator class', () => {
  describe('Leap years', () => {
    // There is a leap year every year whose number is perfectly divisible by four,
    // except for years which are both divisible by 100 and not divisible by 400.
    test('should occur every 4 years', () => {
      expect(new DateCalculator(0, 2004).isLeapYear).toBeTruthy();
    });

    test('but should not occur every 100 years', () => {
      expect(new DateCalculator(0, 2100).isLeapYear).toBeFalsy();
    });

    test('but should occur every 400 years', () => {
      expect(new DateCalculator(0, 2000).isLeapYear).toBeTruthy();
    });
  });

  describe('Adding a leap year', () => {
    test('should not add year when too few days', () => {
      const date = new DateCalculator(255, 2004);
      date.addLeapYear();
      expect(date.year).toBe(2004);
    });

    test('should add leap year if > than 1 year of days', () => {
      const date = new DateCalculator(400, 2004);
      date.addLeapYear();
      expect(date.year).toBe(2005);
    });

    test('should add leap year if exactly 1 year of days', () => {
      const date = new DateCalculator(366, 2004);
      date.addLeapYear();
      expect(date.year).toBe(2005);
    });
  });

  describe('Adding a common year', () => {
    test('should add year and decrement days', () => {
      const date = new DateCalculator(400, 2003);
      date.addCommonYear();
      expect(date.year).toBe(2004);
      expect(date.days).toBe(35);
    });
  });

  describe('Converts days to year/day', () => {
    test('should not add a year when too few days', () => {
      const date = new DateCalculator(255, 2003);
      expect(date.convert()).toBe(2003);
      expect(date.days).toBe(255);
    });

    test('should add year for last day of leap year', () => {
      const date = new DateCalculator(10593, 1980);
      expect(date.convert()).toBe(2009);
      expect(date.days).toBe(0);
    });
  });
});
