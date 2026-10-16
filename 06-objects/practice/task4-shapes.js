"use strict";
// Task 4: the same data in different shapes
// Run: node 06-objects/practice/task4-shapes.js
//
// data/report-export.json has the same report TWICE:
//   _source - the nested document: _source.body.device_event.device_id
//   fields  - a flattened export: fields["body.device_event.device_id"] = ["EDGE-77Q"]
//             every key is a whole path, every value is an ARRAY. Lists of records
//             are split into one array per field:
//             fields["body....node_disks.node_name"]    = ["node-01", "node-02", ...]
//             fields["body....node_disks.percent_used"] = [21.6, 89.9, ...]
//
// 1. field(fields, path) - the FIRST value of a flattened field, or undefined.
// 2. records(fields, prefix, names) - rebuild a list of records from the parallel
//    arrays: one object per index, with the given names as keys.
//      records(fields, "body....node_disks", ["node_name", "percent_used"])
//      -> [{ node_name: "node-01", percent_used: 21.6 }, ...]
//    The number of records is the length of the first array; a missing field -> [].
// 3. sameValue(report, path) - true if get(report._source, path) and
//    field(report.fields, path) give the same value (get is ready-made below).
// 4. toDictionary(list, keyName) - a dictionary: list item[keyName] -> the item.
// 5. toList(dict, keyName) - the opposite: an array of NEW records, each with the
//    key put in as keyName: { [keyName]: key, ...value }. Do not change dict.

const check = require("../../check.js");
const report = require("../../data/report-export.json");

// ready-made (practice task 2)
function get(obj, path, fallback) {
    const keys = Array.isArray(path) ? path : String(path).split(".");
    let cur = obj;
    for (const key of keys) {
        if (cur === undefined || cur === null) return fallback;
        cur = cur[key];
    }
    return cur ?? fallback;
}

function field(fields, path) {
    // ---- your code: one line ----

    // ---- end of your code ----
}

function records(fields, prefix, names) {
    const result = [];
    // ---- your code ----

    // ---- end of your code ----
    return result;
}

function sameValue(report, path) {
    // ---- your code: return true or false ----

    // ---- end of your code ----
}

function toDictionary(list, keyName) {
    const dict = {};
    // ---- your code ----

    // ---- end of your code ----
    return dict;
}

function toList(dict, keyName) {
    const list = [];
    // ---- your code ----

    // ---- end of your code ----
    return list;
}

const text = JSON.stringify;
const fields = report.fields;
const DISKS = "body.device_event_detail.body.payload.cluster_info.node_disks";

check("field: the device id",         field(fields, "body.device_event.device_id"), "EDGE-77Q");
check("field: a number",              field(fields, "body.device_event_detail.body.payload.cluster_info.workload.nodes"), 6);
check("field: a missing path",        field(fields, "body.nothing.here"), undefined);
const disks = records(fields, DISKS, ["node_name", "percent_used"]);
check("records: 3 disks",             disks.length, 3);
check("records: the second disk",     text(disks[1]), '{"node_name":"node-02","percent_used":89.9}');
check("records: a missing prefix",    records(fields, "body.nothing", ["a"]).length, 0);
check("sameValue: the version",       sameValue(report, "body.device_event.software.version"), true);
check("sameValue: the hostname",      sameValue(report, "body.device_event_detail.body.payload.cluster_info.workload.hostname"), true);
check("sameValue: a list is not one value", sameValue(report, "body.device_event_detail.body.payload.cluster_info.workload.storage_classes"), false);
const dict = toDictionary(disks, "node_name");
check("toDictionary: keys",           Object.keys(dict).join(","), "node-01,node-02,node-03");
check("toDictionary: a record",       dict["node-03"]?.percent_used, 0);
const modules = { "12_4.20": { status: "OK" }, "47_1.07": { status: "FAILED" } };
const back = toList(modules, "id");
check("toList",                       text(back), '[{"id":"12_4.20","status":"OK"},{"id":"47_1.07","status":"FAILED"}]');
check("toList does not change dict",  text(modules), '{"12_4.20":{"status":"OK"},"47_1.07":{"status":"FAILED"}}');
