"use strict";
// Task 2: the status of a firmware level
// Run: node 03-conditions-and-loops/practice/task2-firmware-status.js
//
// 1. firmwareStatus(current, minimum, recommended) returns
//      "Below minimum"      if current is below minimum,
//      "Below recommended"  if current is below recommended (but not below minimum),
//      "OK"                 otherwise.
//    Use if / else if / else and the ready-made versionBelow(a, b).
//    Think about the ORDER of the checks.
//
// 2. actionText(status) returns, with a switch:
//      "Below minimum"      -> "Upgrade as soon as possible."
//      "Below recommended"  -> "Plan an upgrade to the recommended level."
//      "OK"                 -> "No action required."
//      anything else        -> "Check the data."
//
// 3. summary(current, status) returns, with ONE ternary operator inside a
//    template string:
//      "4.2.1.7: no alert"   when status is "OK"
//      "4.1.9.3: alert"      otherwise
//
// The code is wrapped in functions, so that we can check it with several
// inputs - functions come in session 5. `return value;` gives the answer back.

const check = require("../../check.js");

// Ready-made helper - you write your own in session 5.
// true if version a is lower than version b, comparing part by part as numbers.
function versionBelow(a, b) {
    const pa = String(a).split(".").map(Number);
    const pb = String(b).split(".").map(Number);
    for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
        const x = pa[i] || 0;
        const y = pb[i] || 0;
        if (x !== y) return x < y;
    }
    return false;
}

function firmwareStatus(current, minimum, recommended) {
    let status;
    // ---- your code: set status ----

    // ---- end of your code ----
    return status;
}

function actionText(status) {
    let text;
    // ---- your code: set text with a switch ----

    // ---- end of your code ----
    return text;
}

function summary(current, status) {
    let text;
    // ---- your code: set text with a ternary ----

    // ---- end of your code ----
    return text;
}

const MIN = "4.2.0.0";
const REC = "4.2.1.7";

check("below minimum",          firmwareStatus("4.1.9.3", MIN, REC),  "Below minimum");
check("equal to minimum",       firmwareStatus("4.2.0.0", MIN, REC),  "Below recommended");
check("between",                firmwareStatus("4.2.0.5", MIN, REC),  "Below recommended");
check("equal to recommended",   firmwareStatus("4.2.1.7", MIN, REC),  "OK");
check("4.10 is above 4.2",      firmwareStatus("4.10.0.0", MIN, REC), "OK");
check("much older",             firmwareStatus("3.9.9.9", MIN, REC),  "Below minimum");

check("action: minimum",        actionText("Below minimum"),     "Upgrade as soon as possible.");
check("action: recommended",    actionText("Below recommended"), "Plan an upgrade to the recommended level.");
check("action: ok",             actionText("OK"),                "No action required.");
check("action: unknown",        actionText("ok"),                "Check the data.");

check("summary: ok",            summary("4.2.1.7", "OK"),            "4.2.1.7: no alert");
check("summary: alert",         summary("4.1.9.3", "Below minimum"), "4.1.9.3: alert");
