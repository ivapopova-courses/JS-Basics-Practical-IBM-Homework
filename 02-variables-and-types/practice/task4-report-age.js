"use strict";
// Task 4: how long ago was the report sent?
// Run: node 02-variables-and-types/practice/task4-report-age.js
//
// epochText - the report EPOCH from the JSON: seconds since 1.1.1970, as a STRING
// nowSeconds - "now", also in seconds (a number)
//
// 1. Convert epochText to a number.
// 2. Compute the difference in seconds.
// 3. Split it into whole days and the remaining whole hours
//    (1 day = 24 * 60 * 60 seconds; use Math.floor and %).
// 4. Return a text like: "1 days 4 hours ago"

const check = require("../../check.js");

function reportAge(epochText, nowSeconds) {
    let text;
    // ---- your code: set text ----

    // ---- end of your code ----
    return text;
}

const NOW = 1791874402;   // 13.10.2026, 06:53:22 UTC

check("sample asset", reportAge("1791770402", NOW), "1 days 4 hours ago");
check("just now", reportAge("1791874402", NOW), "0 days 0 hours ago");
check("2.5 hours", reportAge("1791865402", NOW), "0 days 2 hours ago");
check("a week", reportAge("1791269602", NOW), "7 days 0 hours ago");
