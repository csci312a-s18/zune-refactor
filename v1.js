function convert(days) {
  let year = 1980;
  let daysLeft = days;
  while (days > 365) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      if (daysLeft > 366) {
        daysLeft -= 366;
        year += 1;
      }
    } else {
      daysLeft -= 365;
      year += 1;
    }
  }
  return year;
}

module.exports = {
  convert,
};
