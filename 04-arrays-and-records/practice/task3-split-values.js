"use strict";
// Task 3: split and join
// Run: node 04-arrays-and-records/practice/task3-split-values.js
//
// 1. versionNumbers(version) - the parts of a version as NUMBERS:
//      "4.2.1.7" -> [4, 2, 1, 7]      "" -> []  (not [0]!)
//    split, then a loop with Number() and push.
//
// 2. shortVersion(version, count) - only the first count parts, as a string:
//      ("4.2.1.7", 2) -> "4.2"        ("4.2", 3) -> "4.2"
//    split, slice, join.
//
// 3. lastPart(id, separator) - the text after the last separator:
//      ("lab-dev-01", "-") -> "01"    ("SN4X7Q92", "-") -> "SN4X7Q92"
//
// 4. listItems(packed) - the items of a list packed into one string with ";".
//    Remove the spaces around every item and skip empty items:
//      "CON-01;CON-02" -> ["CON-01", "CON-02"]
//      " CON-01 ; CON-02 ;" -> ["CON-01", "CON-02"]
//      "" -> []
//
// 5. packedValue(packed, key) - the value of key in "key=value,key=value":
//      ("SA=2,SG=1,SN=2", "SG") -> "1"      a missing key -> ""
//    Stop the loop as soon as you find the key.

const check = require("../../check.js");
const doc = require("../../data/sample-asset.json");

function versionNumbers(version) {
    const numbers = [];
    // ---- your code ----

    // ---- end of your code ----
    return numbers;
}

function shortVersion(version, count) {
    // ---- your code: return the string ----

    // ---- end of your code ----
}

function lastPart(id, separator) {
    // ---- your code: return the string ----

    // ---- end of your code ----
}

function listItems(packed) {
    const items = [];
    // ---- your code ----

    // ---- end of your code ----
    return items;
}

function packedValue(packed, key) {
    let value = "";
    // ---- your code ----

    // ---- end of your code ----
    return value;
}

// arrays are compared as text: [4, 2, 1, 7] -> "[4,2,1,7]"
const text = JSON.stringify;

check("versionNumbers 4.2.1.7",      text(versionNumbers("4.2.1.7")), "[4,2,1,7]");
check("versionNumbers 4.10.0.3",     text(versionNumbers("4.10.0.3")), "[4,10,0,3]");
check("versionNumbers empty",        text(versionNumbers("")), "[]");
check("versionNumbers of the report", text(versionNumbers(doc.overview.version)), "[4,2,1,7]");

check("shortVersion 2 parts",        shortVersion("4.2.1.7", 2), "4.2");
check("shortVersion more than there are", shortVersion("4.2", 3), "4.2");

check("lastPart with -",             lastPart("lab-dev-01", "-"), "01");
check("lastPart without -",          lastPart("SN4X7Q92", "-"), "SN4X7Q92");

check("listItems simple",            text(listItems("CON-01;CON-02")), '["CON-01","CON-02"]');
check("listItems spaces, empty end", text(listItems(" CON-01 ; CON-02 ;")), '["CON-01","CON-02"]');
check("listItems empty",             text(listItems("")), "[]");
check("listItems of the report",     listItems(doc.inventory.details.consoles).length, 2);

check("packedValue SG",              packedValue("SA=2,SG=1,SN=2", "SG"), "1");
check("packedValue missing key",     packedValue("SA=2,SG=1,SN=2", "KC"), "");
check("packedValue of the report",   packedValue(doc.inventory.details.settings, "SN"), "2");
