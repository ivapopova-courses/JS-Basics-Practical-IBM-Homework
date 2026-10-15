"use strict";
// Task 5: || or ?? - defaults without losing real values
// Run: node 03-conditions-and-loops/practice/task5-defaults.js
//
// 1. displayValue(value) - the text for an alert table:
//      undefined, null or ""  -> "Not reported"
//      anything else          -> String(value)   (0 -> "0", false -> "false")
//    Careful: `String(value || "Not reported")` loses 0 and false.
//
// 2. slotCount(text) - a count from the JSON (a string) as a number;
//    when it is not a number at all, 0. Use parseInt(text, 10) and ONE operator.
//
// 3. nameOrUnknown(name) - the name, or "Unknown" when it is undefined, null
//    or "". Which operator is right here: || or ?? ?

const check = require("../../check.js");

function displayValue(value) {
    // ---- your code: return the text ----

    // ---- end of your code ----
}

function slotCount(text) {
    // ---- your code: return the number ----

    // ---- end of your code ----
}

function nameOrUnknown(name) {
    // ---- your code: return the name ----

    // ---- end of your code ----
}

check("display: 0",          displayValue(0), "0");
check("display: false",      displayValue(false), "false");
check("display: empty",      displayValue(""), "Not reported");
check("display: null",       displayValue(null), "Not reported");
check("display: undefined",  displayValue(undefined), "Not reported");
check("display: an address", displayValue("10.0.0.1"), "10.0.0.1");

check("slots: 550",          slotCount("550"), 550);
check("slots: 12 slots",     slotCount("12 slots"), 12);
check("slots: 0",            slotCount("0"), 0);
check("slots: empty",        slotCount(""), 0);
check("slots: n/a",          slotCount("n/a"), 0);

check("name: LAB-DEV-01",    nameOrUnknown("LAB-DEV-01"), "LAB-DEV-01");
check("name: empty",         nameOrUnknown(""), "Unknown");
check("name: undefined",     nameOrUnknown(undefined), "Unknown");
