"use strict";
// Task 4: versions and loops
// Run: node 03-conditions-and-loops/practice/task4-version-loops.js
//
// Use loops over the characters of the string (text[i] or for...of).
// Do not use split, replace, regular expressions or other ready-made helpers -
// the point is to practise loops, break and continue.
//
// 1. cutVersion(level) - the text before the first space:
//      "4.2.1.7 (build 412.17.2607151200)" -> "4.2.1.7"
//      no space -> the whole text
// 2. countParts(version) - the number of parts separated by dots:
//      "4.2.1.7" -> 4, "8" -> 1, "" -> 0
// 3. majorVersion(version) - the first part as a NUMBER:
//      "11.7.23.0" -> 11
// 4. cleanVersion(text) - skip everything before the first digit (continue),
//    then keep digits and dots, and stop at the first other character (break):
//      "v4.2.1.7-B00" -> "4.2.1.7", "XR420_117" -> "420", "abc" -> ""
//    Hint: a character ch is a digit if ch >= "0" && ch <= "9".

const check = require("../../check.js");
const doc = require("../../data/sample-asset.json");

function cutVersion(level) {
    let version = "";
    // ---- your code ----

    // ---- end of your code ----
    return version;
}

function countParts(version) {
    let parts = 0;
    // ---- your code ----

    // ---- end of your code ----
    return parts;
}

function majorVersion(version) {
    let major;
    // ---- your code ----

    // ---- end of your code ----
    return major;
}

function cleanVersion(text) {
    let clean = "";
    // ---- your code ----

    // ---- end of your code ----
    return clean;
}

check("cut: sample firmware level", cutVersion(doc.inventory.details.firmware_level), "4.2.1.7");
check("cut: no space",              cutVersion("4.2.1.7"), "4.2.1.7");
check("cut: empty",                 cutVersion(""), "");

check("parts: 4.2.1.7",             countParts("4.2.1.7"), 4);
check("parts: 10.12",               countParts("10.12"), 2);
check("parts: 8",                   countParts("8"), 1);
check("parts: empty",               countParts(""), 0);

check("major: 4.2.1.7",             majorVersion("4.2.1.7"), 4);
check("major: 11.7.23.0",           majorVersion("11.7.23.0"), 11);
check("major: 8",                   majorVersion("8"), 8);

check("clean: v4.2.1.7-B00",        cleanVersion("v4.2.1.7-B00"), "4.2.1.7");
check("clean: 5.0.3.2-B01",         cleanVersion("5.0.3.2-B01"), "5.0.3.2");
check("clean: XR420_117",           cleanVersion("XR420_117"), "420");
check("clean: with build",          cleanVersion("4.2.1.7 (build 412)"), "4.2.1.7");
check("clean: no digits",           cleanVersion("abc"), "");
