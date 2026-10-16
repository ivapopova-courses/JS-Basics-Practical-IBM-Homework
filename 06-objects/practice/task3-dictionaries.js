"use strict";
// Task 3: dictionaries
// Run: node 06-objects/practice/task3-dictionaries.js
//
// data/report-dictionary.json keeps modules and drives as DICTIONARIES: the keys
// are ids, and the keys carry information:
//   modules: { "12_4.20": { number, version, status, ... }, "47_1.07": {...}, ... }
//   drives:  { "drive_f02_r01": { drive_serial, state, ... }, ... }
//
// 1. moduleInfo(key) - "12_4.20" -> { number: "12", version: "4.20" }.
//    A key without "_" -> { number: key, version: "" }.
// 2. moduleList(modules) - an array with one record per module, in the order of
//    the keys: { key, number, version, status } (number and version from the key).
// 3. failedModules(modules) - the keys of the modules whose status is set and is
//    not "OK" (an empty status "" is unknown, not failed).
// 4. versionsByNumber(modules) - { "12": ["4.20", "4.08"], "31": ["2.00"], ... }
//    - a dictionary: module number -> the list of its versions, in key order.
// 5. countBy(dict, field) - how many values of the dictionary have each value of
//    field: countBy(drives, "fw_code") -> { "5A9D": 5, "5A1C": 1 }.
// 6. driveLocation(key) - "drive_f02_r01" -> "frame 2, row 1" (numbers without
//    the leading 0). offlineDrives(drives) - "<location> (<serial>)" for every
//    drive whose state is "offline".
//
// Do not change the dictionaries.

const check = require("../../check.js");
const data = require("../../data/report-dictionary.json");
const config = data.device_report.configuration;

function moduleInfo(key) {
    // ---- your code: return { number, version } ----

    // ---- end of your code ----
}

function moduleList(modules) {
    const list = [];
    // ---- your code ----

    // ---- end of your code ----
    return list;
}

function failedModules(modules) {
    const failed = [];
    // ---- your code ----

    // ---- end of your code ----
    return failed;
}

function versionsByNumber(modules) {
    const result = {};
    // ---- your code ----

    // ---- end of your code ----
    return result;
}

function countBy(dict, field) {
    const counts = {};
    // ---- your code ----

    // ---- end of your code ----
    return counts;
}

function driveLocation(key) {
    // ---- your code: return "frame F, row R" ----

    // ---- end of your code ----
}

function offlineDrives(drives) {
    const result = [];
    // ---- your code ----

    // ---- end of your code ----
    return result;
}

const text = JSON.stringify;
const before = text(config);

check('moduleInfo("12_4.20")',        text(moduleInfo("12_4.20")), '{"number":"12","version":"4.20"}');
check('moduleInfo("90")',             text(moduleInfo("90")), '{"number":"90","version":""}');
const list = moduleList(config.modules);
check("moduleList: 7 records",        list.length, 7);
check("moduleList: the 4th record",   text(list[3]), '{"key":"47_1.07","number":"47","version":"1.07","status":"FAILED"}');
check("failedModules",                text(failedModules(config.modules)), '["47_1.07"]');
const byNumber = versionsByNumber(config.modules);
check("versionsByNumber: module 12",  text(byNumber["12"]), '["4.20","4.08"]');
check("versionsByNumber: numbers",    Object.keys(byNumber).join(","), "12,31,47,55,90");
check("countBy drives fw_code",       text(countBy(config.drives, "fw_code")), '{"5A9D":5,"5A1C":1}');
check("countBy drives drive_model",   countBy(config.drives, "drive_model")["60E"], 2);
check('driveLocation("drive_f02_r01")', driveLocation("drive_f02_r01"), "frame 2, row 1");
check("offlineDrives",                text(offlineDrives(config.drives)), '["frame 2, row 1 (LABDRV21XX)"]');
check("the dictionaries are unchanged", text(config), before);
