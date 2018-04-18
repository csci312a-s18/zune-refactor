class DateCalculator {
  constructor(days, initialYear = 1980) {
    this.days = days;
    this.year = initialYear;
  }

  convert() {
    while (this.days > 365) {
      if (this.isLeapYear) {
        this.addLeapYear();
      } else {
        this.addCommonYear();
      }
    }
    return this.year;
  }

  // A getter enables us to invoke this method as this.isLeapYear (with no parentheses)
  get isLeapYear() {
    return this.year % 400 === 0 || (this.year % 4 === 0 && this.year % 100 !== 0);
  }

  addLeapYear() {
    if (this.days > 366) {
      this.days -= 366;
      this.year += 1;
    }
  }

  addCommonYear() {
    this.days -= 365;
    this.year += 1;
  }
}


module.exports = {
  DateCalculator,
};
