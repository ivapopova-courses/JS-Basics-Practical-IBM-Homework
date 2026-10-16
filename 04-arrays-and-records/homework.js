"use strict";
// Homework: firmware names, alert lines, empty pools
// Run: node 04-arrays-and-records/homework.js
//
// 1. firmwareNames(levels) - the record with code "FV" in the records export
//    packs several firmware levels into one string:
//      "Core_1 11562024112780A00701;Svc 20042024073181CF0681;Boot ..."
//    Every item is "<name> <level>", items are separated by ";".
//    Return the names only: ["Core_1", "Svc", "Boot"]. "" -> [].
//
// 2. alertLines(ids, titles, models) - three lists of the same length: the
//    check id, its title, and the list of models the check applies to.
//    Return one line per check:
//      "CHK-0132: Auth service enabled (XR-210, XR-220)"
//    Use the index i to take the elements with the same position from all
//    three lists, and join for the models.
//
// 3. emptyPools(records) - the items of the pools whose capacity (code "CP")
//    is "0", in the order of the list.
//
// 4. partitionSetting(records, partition, key) - the "Settings" record of a
//    partition (item = the partition, code "SN") has a packed value
//    "SA=2,SG=1,SN=2,...". Return the value of key in it; "" if the record or
//    the key is missing. Find the record first, then unpack its value.

const check = require("../check.js");
const data = require("../data/report-records.json");
const records = data.array_report.records;

function firmwareNames(levels) {
    const names = [];
    // ---- your code ----

    // ---- end of your code ----
    return names;
}

function alertLines(ids, titles, models) {
    const lines = [];
    // ---- your code ----

    // ---- end of your code ----
    return lines;
}

function emptyPools(records) {
    const pools = [];
    // ---- your code ----

    // ---- end of your code ----
    return pools;
}

function partitionSetting(records, partition, key) {
    let value = "";
    // ---- your code ----

    // ---- end of your code ----
    return value;
}

const text = JSON.stringify;

let fv = "";
for (const r of records) {
    if (r.code === "FV") fv = r.value;
}
check("firmwareNames of the export", text(firmwareNames(fv)), '["Core_1","Svc","Boot"]');
check("firmwareNames one item",      text(firmwareNames("Main 4.2.1.7")), '["Main"]');
check("firmwareNames empty",         text(firmwareNames("")), "[]");

const lines = alertLines(
    ["CHK-0132", "CHK-0211"],
    ["Auth service enabled", "Firmware below recommended"],
    [["XR-210", "XR-220"], ["XR-220"]]
);
check("alertLines count",            lines.length, 2);
check("alertLines first",            lines[0], "CHK-0132: Auth service enabled (XR-210, XR-220)");
check("alertLines second",           lines[1], "CHK-0211: Firmware below recommended (XR-220)");
check("alertLines empty",            alertLines([], [], []).length, 0);

check("emptyPools",                  text(emptyPools(records)), '["POOL-005","POOL-010"]');
check("emptyPools none",             text(emptyPools([])), "[]");

check("partitionSetting P1 SG",      partitionSetting(records, "P1", "SG"), "2");
check("partitionSetting P2 SG",      partitionSetting(records, "P2", "SG"), "1");
check("partitionSetting missing key", partitionSetting(records, "P2", "XX"), "");
check("partitionSetting missing partition", partitionSetting(records, "P9", "SG"), "");
