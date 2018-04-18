# Adapted from: https://github.com/saasbook/flipped-demos/blob/master/ch09-legacy/refactoring_timesetter/v2.rb
class DateCalculator

  def convert(days)
    year = 1980
    while (days > 365) do
      if leap_year?(year)
        if (days > 366)
          days -= 366
          year += 1
        end
      else
        days -= 365
        year += 1
      end
    end
    return year
  end

  # extracted method
  def leap_year?(year)
    (year % 400 == 0 ||
      (year % 4 == 0 && year % 100 != 0))
  end

end
