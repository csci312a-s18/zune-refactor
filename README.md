# Time Setting Refactoring Example

This example was adapted from [Berkeley cs169](https://github.com/saasbook/flipped-demos/tree/master/ch09-legacy/refactoring_timesetter) under a CC-BY-SA-NC license.

On December 31, 2008, all Microsoft Zune MP3 players that were booted up on that day mysteriously froze. If you rebooted on January 1, 2009, it would work again. This example includes the buggy code, as explained in this [blog post](http://www.zuneboards.com/forums/showthread.php?t=38143), transliterated to ES6 and Ruby. Try 10593 (Dec 31, 2008) or 1827 (Dec 31, 1984) to trigger the bug (an infinite loop).

## Files

* `v0.js`: Original transliterated
* `v1.js`: Refactored with more relevant variable names, but no other changes
* `v2.js`: Extract the `isLeapYear` method to improve readability and introduce a test suite
* `v3.js`: Encapsulates the logic in a class with instance variables to track the day and year. Doing so allows instance methods to modify those values without having to pass them back and forth and is a good example of the value of encapsulation. Extracts methods `addLeapYear` and `addCommonYear` to reduce method complexity. Adds additional test cases for extracted methods.
* `v4.js`: Fixes logic error

## Complexity Analysis

This package incorporates ESLint, which is configured to flag functions/methods with [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity) greater than [NIST-recommended limit of 10](https://github.com/JetBrains/resharper-cyclomatic-complexity/blob/master/docs/ThresholdGuidance.md). None of the examples should trigger that limit. You can modify `.eslintrc.json` to implement stricter limits (e.g. 5).

This package also incorporates the Plato code analysis tool to generate complexity and other statistics for each file (and function/method). You can generate the Plato report (a static website in the `report` directory) with:

```
npm run plato
```

Unfortunately there is not a readily available tool for [ABC complexity](https://en.wikipedia.org/wiki/ABC_Software_Metric) analysis for ES6. So instead, this package incorporates the Ruby transliterations of the JavaScript code. You can then run [`flog`](http://ruby.sadi.st/Flog.html) on the Ruby code to obtain ABC statistics, e.g.

```
flog -a v4.rb
```
