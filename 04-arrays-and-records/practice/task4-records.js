"use strict";
// Task 4: a list of key / value records
// Run: node 04-arrays-and-records/practice/task4-records.js
//
// data/report-records.json is a made-up export. Its list
// array_report.records has 79 records like this one:
//   { kind: "INV", group: "Enclosures", item: "ENC-01", code: "FW",
//     label: "Firmware", value: "2.14", ... }
// Open the file in VSCode and look at it first.
//
// 1. findValue(records, item, code) - the value of the FIRST record with this
//    item and this code; undefined if there is none. Stop at the first match.
//      ("SYS", "BU") -> "10.12.39.0"
//
// 2. countGroup(records, group) - how many records are in the group.
//
// 3. itemsWith(records, code, value) - the items of all records with this code
//    and this value, in the order of the list:
//      ("ST", "degraded") -> ["ENC-07"]
//
// 4. hottest(records) - the item of the enclosure with the highest
//    temperature (code "TP"; the value is a string - convert it).
//    Start with the first temperature record, not with 0.

const check = require("../../check.js");
const data = require("../../data/report-records.json");
const records = data.array_report.records;

function findValue(records, item, code) {
    // ---- your code: return the value, or undefined ----

    // ---- end of your code ----
}

function countGroup(records, group) {
    let count = 0;
    // ---- your code ----

    // ---- end of your code ----
    return count;
}

function itemsWith(records, code, value) {
    const items = [];
    // ---- your code ----

    // ---- end of your code ----
    return items;
}

function hottest(records) {
    let hotItem;
    // ---- your code: set hotItem ----

    // ---- end of your code ----
    return hotItem;
}

const text = JSON.stringify;

check("number of records",           records.length, 79);
check("findValue release",           findValue(records, "SYS", "BU"), "10.12.39.0");
check("findValue enclosure state",   findValue(records, "ENC-07", "ST"), "degraded");
check("findValue missing",           findValue(records, "ENC-99", "ST"), undefined);

check("countGroup Enclosures",       countGroup(records, "Enclosures"), 32);
check("countGroup Pools",            countGroup(records, "Pools"), 36);
check("countGroup missing",          countGroup(records, "Fans"), 0);

check("itemsWith degraded",          text(itemsWith(records, "ST", "degraded")), '["ENC-07"]');
check("itemsWith mirror",            text(itemsWith(records, "RL", "mirror")), '["POOL-004","POOL-008","POOL-012"]');
check("itemsWith old firmware",      text(itemsWith(records, "FW", "2.10")), '["ENC-04"]');
check("itemsWith nothing",           text(itemsWith(records, "ST", "failed")), "[]");

check("hottest enclosure",           hottest(records), "ENC-07");
check("hottest of two",              hottest([
    { item: "A", code: "TP", value: "9" },
    { item: "B", code: "TP", value: "10" }
]), "B");
