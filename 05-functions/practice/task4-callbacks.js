"use strict";
// Task 4: functions that take functions
// Run: node 05-functions/practice/task4-callbacks.js
//
// 1. customMap(arr, f) - a NEW array with f(element) for every element.
//      customMap([1, 2, 3, 4], square) -> [1, 4, 9, 16]
//
// 2. customFilter(arr, f) - a NEW array with the elements for which f(element)
//    is true.   customFilter([-1, 1, -2, 3, 4], isPositive) -> [1, 3, 4]
//
// 3. countIf(list, test) - how many elements make test(element) true.
//
// 4. compose(f, g) - return a NEW FUNCTION that takes x and returns g(f(x)).
//      compose(double, increment)(3) -> 7
//
// 5. Write the four functions square, isPositive, double, increment as ARROW
//    functions, and the four arrow functions the checks at the end need:
//      toId       - an enclosure -> its id
//      isHdd      - true if the type of an enclosure starts with "HDD"
//      isOld      - true if the firmware is below "2.14" (use versionBelow)
//      toLine     - an enclosure -> "ENC-01: normal" (id, colon, state)
//
// Do not change the arrays you get. An unfinished function does not stop the
// other checks: attempt() catches the error and the check prints FAIL.

const check = require("../../check.js");
const doc = require("../../data/sample-asset.json");

// ready-made (task 2)
function versionBelow(a, b) {
    const pa = String(a ?? "").split(".");
    const pb = String(b ?? "").split(".");
    for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
        const x = parseInt(pa[i], 10) || 0;
        const y = parseInt(pb[i], 10) || 0;
        if (x !== y) return x < y;
    }
    return false;
}

function customMap(arr, f) {
    const mapped = [];
    // ---- your code ----

    // ---- end of your code ----
    return mapped;
}

function customFilter(arr, f) {
    const filtered = [];
    // ---- your code ----

    // ---- end of your code ----
    return filtered;
}

function countIf(list, test) {
    let n = 0;
    // ---- your code ----

    // ---- end of your code ----
    return n;
}

function compose(f, g) {
    // ---- your code: return a function ----

    // ---- end of your code ----
}

// ---- your code: arrow functions instead of null ----
const square = null;
const isPositive = null;
const double = null;
const increment = null;
const toId = null;
const isHdd = null;
const isOld = null;
const toLine = null;
// ---- end of your code ----

// runs fn and returns its result, or the error message - so one unfinished
// function does not stop the other checks
function attempt(fn) {
    try { return fn(); } catch (err) { return "error: " + err.message; }
}
const text = JSON.stringify;
const encs = doc.inventory.enclosures;
const before = text(encs);

check("customMap with square",        attempt(() => text(customMap([1, 2, 3, 4], square))), "[1,4,9,16]");
check("customMap of []",              attempt(() => text(customMap([], square))), "[]");
check("customFilter with isPositive", attempt(() => text(customFilter([-1, 1, -2, 3, 4], isPositive))), "[1,3,4]");
check("countIf with isPositive",      attempt(() => countIf([-1, 1, -2, 3, 4], isPositive)), 3);
check("compose(double, increment)(3)", attempt(() => compose(double, increment)(3)), 7);
check("compose(increment, double)(3)", attempt(() => compose(increment, double)(3)), 8);
check("compose returns a function",   typeof compose(double, increment), "function");

check("ids of the enclosures",        attempt(() => customMap(encs, toId).join(",")), "ENC-01,ENC-02,ENC-03,ENC-04");
check("HDD enclosures",               attempt(() => customMap(customFilter(encs, isHdd), toId).join(",")), "ENC-03,ENC-04");
check("enclosures with old firmware", attempt(() => countIf(encs, isOld)), 2);
check("lines of the enclosures",      attempt(() => customMap(encs, toLine)[2]), "ENC-03: degraded");
check("the enclosures are unchanged", text(encs), before);
