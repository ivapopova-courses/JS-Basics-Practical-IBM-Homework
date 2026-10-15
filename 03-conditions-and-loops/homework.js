"use strict";
// Homework: two settings, and where two versions differ
// Run: node 03-conditions-and-loops/homework.js
//
// 1. settingsStatus(timeServer, logServer) - a value is "reported" when it is
//    not undefined, not null and not "". Return exactly one of:
//      "TIME AND LOG SERVERS REPORTED"
//      "TIME SERVER REPORTED / LOG SERVER NOT REPORTED"
//      "LOG SERVER REPORTED / TIME SERVER NOT REPORTED"
//      "TIME AND LOG SERVERS NOT REPORTED"
//    First compute two booleans (timeReported, logReported), then use
//    if / else if / else. Which case must come first?
//
// 2. firstDifference(a, b) - the first position (index) where the two strings
//    differ; -1 if they are equal. If one string is the start of the other,
//    the answer is the length of the shorter one.
//      "4.10" vs "4.2"  -> 2      (this is where string comparison decides!)
//    Use a loop and break (or return inside the loop).

const check = require("../check.js");

function settingsStatus(timeServer, logServer) {
    let status;
    // ---- your code: set status ----

    // ---- end of your code ----
    return status;
}

function firstDifference(a, b) {
    let position = -1;
    // ---- your code: set position ----

    // ---- end of your code ----
    return position;
}

check("both",             settingsStatus("10.0.0.1", "10.0.0.2"), "TIME AND LOG SERVERS REPORTED");
check("time only",        settingsStatus("10.0.0.1", ""), "TIME SERVER REPORTED / LOG SERVER NOT REPORTED");
check("log only",         settingsStatus(undefined, "10.0.0.2"), "LOG SERVER REPORTED / TIME SERVER NOT REPORTED");
check("none",             settingsStatus(null, undefined), "TIME AND LOG SERVERS NOT REPORTED");
check("0 is a value",     settingsStatus(0, ""), "TIME SERVER REPORTED / LOG SERVER NOT REPORTED");

check("equal",            firstDifference("4.2.1.7", "4.2.1.7"), -1);
check("4.10 vs 4.2",      firstDifference("4.10", "4.2"), 2);
check("10.1.0 vs 9.0.0",  firstDifference("10.1.0", "9.0.0"), 0);
check("prefix",           firstDifference("4.2", "4.2.1"), 3);
check("empty vs 1",       firstDifference("", "1"), 0);
