"use strict";
// Task 3: small pure helpers
// Run: node 05-functions/practice/task3-helpers.js
//
// Every helper here must be PURE: it returns a new value and does not change
// its arguments. The checks also test that.
//
// 1. asList(value) - an array is returned as it is; undefined or null give [];
//    any other value gives a list with that one value: "ENC-01" -> ["ENC-01"].
//
// 2. capitalize(word) - the first letter in upper case, the rest unchanged:
//    "degraded" -> "Degraded", "" -> "".
//
// 3. lastPart(id, separator = "-") - the part after the last separator:
//    "LAB-DEV-01" -> "01"; lastPart("a.b.c", ".") -> "c"; "" -> "".
//
// 4. deviceName(doc, fallback = "unknown device") - the system name
//    (doc.inventory.extended_info.json.data.system.name), else
//    doc.status.device_alias, else fallback. It must not throw when a level
//    is missing (use ?.).
//
// 5. problemsOf(enclosures) - a NEW array with "<id> is <state>" for every
//    enclosure whose state is not "normal": "ENC-03 is degraded". The list of
//    enclosures must stay as it was.

const check = require("../../check.js");
const doc = require("../../data/sample-asset.json");

function asList(value) {
    // ---- your code: return an array ----

    // ---- end of your code ----
}

function capitalize(word) {
    // ---- your code: return a string ----

    // ---- end of your code ----
}

function lastPart(id, separator = "-") {
    // ---- your code: return a string ----

    // ---- end of your code ----
}

function deviceName(doc, fallback = "unknown device") {
    // ---- your code: return a string ----

    // ---- end of your code ----
}

function problemsOf(enclosures) {
    const problems = [];
    // ---- your code: push into problems ----

    // ---- end of your code ----
    return problems;
}

const text = JSON.stringify;
const list = ["a", "b"];

check("asList of an array",          asList(list), list);
check("asList of undefined",         text(asList(undefined)), "[]");
check("asList of null",              text(asList(null)), "[]");
check("asList of a string",          text(asList("ENC-01")), '["ENC-01"]');
check("asList of an object",         text(asList({ id: "ENC-09" })), '[{"id":"ENC-09"}]');

check('capitalize("degraded")',      capitalize("degraded"), "Degraded");
check('capitalize("XR-220")',        capitalize("XR-220"), "XR-220");
check('capitalize("")',              capitalize(""), "");

check('lastPart("LAB-DEV-01")',      lastPart("LAB-DEV-01"), "01");
check('lastPart("a.b.c", ".")',      lastPart("a.b.c", "."), "c");
check('lastPart("SN4X7Q92")',        lastPart("SN4X7Q92"), "SN4X7Q92");
check('lastPart("")',                lastPart(""), "");

check("deviceName of the sample",    deviceName(doc), "LAB-DEV-01");
check("deviceName from the alias",   deviceName({ status: { device_alias: "LAB-DEV-07" } }), "LAB-DEV-07");
check("deviceName fallback",         deviceName({}), "unknown device");
check("deviceName own fallback",     deviceName({}, "?"), "?");

const before = text(doc.inventory.enclosures);
check("problemsOf the sample",       text(problemsOf(doc.inventory.enclosures)), '["ENC-03 is degraded"]');
check("problemsOf []",               text(problemsOf([])), "[]");
check("the enclosures are unchanged", text(doc.inventory.enclosures), before);
