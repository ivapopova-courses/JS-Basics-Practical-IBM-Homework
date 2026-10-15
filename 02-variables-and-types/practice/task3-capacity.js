"use strict";
// Task 3: capacity from the JSON
// Run: node 02-variables-and-types/practice/task3-capacity.js
//
// The capacity values come as STRINGS of bytes (made-up fields for this task).
// 1. Convert both values to numbers.
// 2. capacityTiB = capacity / 1024 ** 4, shown with 2 decimals (.toFixed(2)).
// 3. usedPercent = used / capacity * 100, rounded to a whole number (Math.round).
// 4. Return a text like: "2.00 TiB, 69% used"
//
// Write your code between the lines. It is wrapped in a function, so that we
// can check it with several inputs - functions come in session 5.

const check = require("../../check.js");

function capacityReport(capacityText, usedText) {
    let report;
    // ---- your code: set report ----

    // ---- end of your code ----
    return report;
}

check("2 TiB, 69%", capacityReport("2199023255552", "1517325046333"), "2.00 TiB, 69% used");
check("empty", capacityReport("1099511627776", "0"), "1.00 TiB, 0% used");
check("full", capacityReport("549755813888", "549755813888"), "0.50 TiB, 100% used");
check("spaces around", capacityReport(" 4398046511104 ", " 1099511627776 "), "4.00 TiB, 25% used");
