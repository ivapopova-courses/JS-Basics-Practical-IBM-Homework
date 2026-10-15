"use strict";
// Task 1: predict the result
// Run: node 03-conditions-and-loops/practice/task1-predict.js
//
// Do NOT run the expressions first. For each line, replace "?" with what you
// think the expression gives. Write strings in quotes ("Unknown") and numbers
// and booleans without quotes (5, true).
// Then run the file and see how many you got right. For each FAIL, find the
// rule in the lecture that explains it.

const check = require("../../check.js");

// comparisons
check('2 == "2"',            2 == "2",            "?");
check('2 === "2"',           2 === "2",           "?");
check('"4.10" < "4.2"',      "4.10" < "4.2",      "?");
check('"10" > 9',            "10" > 9,            "?");
check('"10" > "9"',          "10" > "9",          "?");
check('"b" > "azzzz"',       "b" > "azzzz",       "?");
check('"Yes" === "yes"',     "Yes" === "yes",     "?");
check("null == undefined",   null == undefined,   "?");
check("null === undefined",  null === undefined,  "?");
check("NaN === NaN",         NaN === NaN,         "?");
check('"no" == false',       "no" == false,       "?");
check('"0" == false',        "0" == false,        "?");

// truthy, falsy and short-circuit
check('Boolean("no")',       Boolean("no"),       "?");
check('Boolean("")',         Boolean(""),         "?");
check('"" || "Unknown"',     "" || "Unknown",     "?");
check("0 || 5",              0 || 5,              "?");
check("0 ?? 5",              0 ?? 5,              "?");
check('"XR-220" && "OK"',    "XR-220" && "OK",    "?");
