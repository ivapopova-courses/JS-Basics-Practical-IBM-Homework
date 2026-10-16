"use strict";
// Task 2: our own version helpers
// Run: node 05-functions/practice/task2-versions.js
//
// 1. compareVersions(a, b) - return -1 if a is lower than b, 0 if they are equal,
//    1 if a is higher. The rules:
//    - compare part by part, as numbers: "4.10" is higher than "4.2";
//    - a missing part counts as 0: "4.2" equals "4.2.0.0";
//    - a part with a suffix counts as its number: "7-B00" is 7 (parseInt);
//    - a number works like a string: 2.14 equals "2.14";
//    - undefined and null count as "" - that is 0.
//
// 2. versionBelow(current, minimum) - true if current is lower than minimum.
//    One line: use compareVersions.
//
// 3. versionStatus(current, minimum, recommended) - "Below minimum" if current
//    is lower than minimum, else "Below recommended" if it is lower than
//    recommended, else "OK". Use your helpers.
//
// 4. firmwareVersion(doc) - the first word of doc.inventory.details.firmware_level
//    ("4.2.1.7 (build 412.17)" -> "4.2.1.7"). Return "" when the level is
//    missing or is not a string. It must not throw for {} - stop early.

const check = require("../../check.js");
const doc = require("../../data/sample-asset.json");

function compareVersions(a, b) {
    let result = 0;
    // ---- your code ----

    // ---- end of your code ----
    return result;
}

function versionBelow(current, minimum) {
    // ---- your code: one line with return ----

    // ---- end of your code ----
}

function versionStatus(current, minimum, recommended) {
    // ---- your code: return "Below minimum", "Below recommended" or "OK" ----

    // ---- end of your code ----
}

function firmwareVersion(doc) {
    // ---- your code: return the version or "" ----

    // ---- end of your code ----
}

check('compare "4.10" "4.2"',            compareVersions("4.10", "4.2"), 1);
check('compare "4.2" "4.10"',            compareVersions("4.2", "4.10"), -1);
check('compare "4.2.1.7" "4.2.1.7"',     compareVersions("4.2.1.7", "4.2.1.7"), 0);
check('compare "4.2" "4.2.0.0"',         compareVersions("4.2", "4.2.0.0"), 0);
check('compare "4.2.1.7-B00" "4.2.1.7"', compareVersions("4.2.1.7-B00", "4.2.1.7"), 0);
check('compare 2.14 "2.14"',             compareVersions(2.14, "2.14"), 0);
check('compare undefined "1.0"',         compareVersions(undefined, "1.0"), -1);
check('compare null ""',                 compareVersions(null, ""), 0);

check('versionBelow "2.10" "2.14"',      versionBelow("2.10", "2.14"), true);
check('versionBelow "2.14" "2.14"',      versionBelow("2.14", "2.14"), false);
check('versionBelow "10.1" "9.9"',       versionBelow("10.1", "9.9"), false);

check("status below minimum",            versionStatus("4.1.9.9", "4.2.0.0", "4.2.1.0"), "Below minimum");
check("status below recommended",        versionStatus("4.2.0.9", "4.2.0.0", "4.2.1.0"), "Below recommended");
check("status OK",                       versionStatus("4.2.1.7", "4.2.0.0", "4.2.1.0"), "OK");
check("status equal to minimum",         versionStatus("4.2", "4.2.0.0", "4.2.1.0"), "Below recommended");

check("firmwareVersion of the sample",   firmwareVersion(doc), "4.2.1.7");
check("firmwareVersion of {}",           firmwareVersion({}), "");
check("firmwareVersion of a number",     firmwareVersion({ inventory: { details: { firmware_level: 42 } } }), "");
