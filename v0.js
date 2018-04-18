/* eslint-disable no-param-reassign */

/**
 * Convert a number of days since 1/1/1980 to the year
 * @param  {[number]} d Days since 1/1/1980
 * @return {[number]}   Year
 */
function convert(d) {
  let y = 1980;
  while (d > 365) {
    if (y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0)) {
      if (d > 366) {
        d -= 366;
        y += 1;
      }
    } else {
      d -= 365;
      y += 1;
    }
  }
  return y;
}

module.exports = {
  convert,
};
