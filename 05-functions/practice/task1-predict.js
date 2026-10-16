"use strict";
// Task 1: predict the result
// Run: node 05-functions/practice/task1-predict.js
//
// Do NOT run the file first. Read the functions, and for each check replace "?"
// with what you think the call gives. Write strings in quotes ("local"), numbers
// and booleans without quotes (3, true), and undefined, null and NaN as they are.
// Then run the file and see how many you got right. For each FAIL, find the
// section in the lecture that explains it.

const check = require("../../check.js");

// parameters and return
function sum(x, y) { return x + y; }
function noReturn(x) { x * 2; }
function sign(x) {
    if (x > 0) return "positive";
    return "not positive";
}
check("sum(2, 3)",              sum(2, 3),              "?");
check("sum(2)",                 sum(2),                 "?");
check('sum("2", 3)',            sum("2", 3),            "?");
check("noReturn(5)",            noReturn(5),            "?");
check("sign(0)",                sign(0),                "?");

// default values
function withDefault(x = 1) { return x; }
function withOr(x) { return x || 1; }
check("withDefault()",          withDefault(),          "?");
check("withDefault(0)",         withDefault(0),         "?");
check("withOr(0)",              withOr(0),              "?");
check("withDefault(null)",      withDefault(null),      "?");

// scope - the checks run in this order
let level = "global";
function readLevel() { return level; }
function shadow() { let level = "local"; return level; }
function change() { level = "changed"; return level; }
check("shadow()",               shadow(),               "?");
check("level after shadow()",   level,                  "?");
check("readLevel()",            readLevel(),            "?");
change();
check("level after change()",   level,                  "?");

// hoisting
check("typeof early",           typeof early,           "?");
function early() { return 1; }
check("typeof late",            typeof late,            "?");
var late = function () { return 2; };

// arrow functions
const double = x => x * 2;
const withBraces = x => { x * 2; };
check("double(4)",              double(4),              "?");
check("withBraces(4)",          withBraces(4),          "?");

// arrays as arguments
function addOne(list) { list.push(1); }
function replace(list) { list = [1, 2, 3]; }
const arr = [];
addOne(arr);
check("arr.length after addOne(arr)",  arr.length,     "?");
replace(arr);
check("arr.length after replace(arr)", arr.length,     "?");

// a callback
function apply(f, x) { return f(x); }
check("apply(double, 5)",       apply(double, 5),       "?");
