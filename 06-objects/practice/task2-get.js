"use strict";
// Task 2: get(obj, path, fallback) - the first helper of the course project
// Run: node 06-objects/practice/task2-get.js
//
// get(obj, path, fallback) returns the value at the end of the path, or fallback.
//
// - path is an ARRAY of keys (["inventory", "modules", "12_4.20", "status"]) or a
//   STRING with dots ("inventory.details.locale"). A string is split at the dots.
//   Use an array when a key itself contains a dot.
// - Array indexes work as keys: ["inventory", "enclosures", 2, "state"], or
//   "inventory.enclosures.2.state" in a string.
// - When a level is missing (undefined or null) return fallback - never throw.
// - The value at the end: undefined or null -> fallback. But 0, "" and false are
//   real values: return them, not the fallback.
// - fallback is undefined when it is not given.
// - An empty path ([] or "") returns obj itself.
// - get must not change obj.
//
// Keep your get: it goes into your library.js for the course project.

const check = require("../../check.js");
const doc = require("../../data/sample-asset.json");

function get(obj, path, fallback) {
    // ---- your code ----

    // ---- end of your code ----
}

const before = JSON.stringify(doc);
const data = { a: { zero: 0, empty: "", no: false, nothing: null, list: [{ id: "x" }] } };

check("a string path",               get(doc, "inventory.details.locale"), "en_US");
check("an array path",               get(doc, ["inventory", "details", "locale"]), "en_US");
check("a key with a dot",            get(doc, ["inventory", "modules", "12_4.20", "status"]), "OK");
check("a key with a space",          get(doc, ["inventory", "labels", "Firmware Version"]), "4.2.1.7");
check("an index in an array path",   get(doc, ["inventory", "enclosures", 2, "state"]), "degraded");
check("an index in a string path",   get(doc, "inventory.enclosures.2.state"), "degraded");
check("a deep path",                 get(doc, "inventory.extended_info.json.data.system.name"), "LAB-DEV-01");
check("a missing key",               get(doc, "overview.site", "?"), "?");
check("a missing level",             get(doc, "health.state.code", "?"), "?");
check("no fallback given",           get(doc, "health.state"), undefined);
check("0 is a value",                get(data, "a.zero", 99), 0);
check('"" is a value',               get(data, "a.empty", "?"), "");
check("false is a value",            get(data, "a.no", true), false);
check("null at the end",             get(data, "a.nothing", "?"), "?");
check("null in the middle",          get(data, "a.nothing.x", "?"), "?");
check("a record in a list",          get(data, ["a", "list", 0, "id"]), "x");
check("an empty path",               get(data, []), data);
check("obj itself is undefined",     get(undefined, "a.b", "?"), "?");
check("the report is unchanged",     JSON.stringify(doc), before);
