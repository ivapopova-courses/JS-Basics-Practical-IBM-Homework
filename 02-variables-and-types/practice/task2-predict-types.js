"use strict";
// Task 2: predict the result
// Run: node 02-variables-and-types/practice/task2-predict-types.js
//
// Do NOT run the expressions first. For each line, replace "?" with what you
// think the expression gives. Write strings in quotes ("string", "91") and
// numbers and booleans without quotes (8, true).
// Then run the file and see how many you got right.

const check = require("../../check.js");

check('typeof "9.1"',               typeof "9.1",               "?");
check("typeof 9.1",                 typeof 9.1,                 "?");
check("typeof undefinedVariable",   typeof undefinedVariable,   "?");
check("typeof null",                typeof null,                "?");
check('"9" + 1',                    "9" + 1,                    "?");
check('"9" - 1',                    "9" - 1,                    "?");
check("1 + 2 + \"3\"",              1 + 2 + "3",                "?");
check('Number("")',                 Number(""),                 "?");
check('parseInt("3.8.0.11")',       parseInt("3.8.0.11"),       "?");
check('parseFloat("3.8.0.11")',     parseFloat("3.8.0.11"),     "?");
check("2 ** 3 * 2",                 2 ** 3 * 2,                 "?");
check('"yes" === "Yes"',            "yes" === "Yes",            "?");
