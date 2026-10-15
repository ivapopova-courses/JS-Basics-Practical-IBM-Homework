"use strict";
// Task 3: the condition of the sample rule
// Run: node 03-conditions-and-loops/practice/task3-rule-condition.js
//
// The sample rule creates an alert when the model is "XR-210" or "XR-220" and
// the firmware version (overview.version) is NOT below "4.2.1.7".
//
// 1. isAffected(report) returns true or false (a real boolean, not just a
//    truthy value). Start with guard clauses - `return false;` stops the
//    function when:
//      - report is missing (null or undefined),
//      - report.overview is missing,
//      - overview.version is missing or "".
//    Then return the condition itself. No arrays yet: use || for the models.
//
// 2. displayName(report) returns the name for the alert:
//      report.inventory.extended_info.json.data.system.name, if it is there,
//      otherwise report.status.device_alias, if it is there,
//      otherwise "Unknown".
//    Missing levels must not cause an error: guard every level with &&, or
//    use ?. (preview from the lecture). Combine the fallbacks with ||.

const check = require("../../check.js");
const doc = require("../../data/sample-asset.json");

// Ready-made helper - you write your own in session 5.
function versionBelow(a, b) {
    const pa = String(a).split(".").map(Number);
    const pb = String(b).split(".").map(Number);
    for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
        const x = pa[i] || 0;
        const y = pb[i] || 0;
        if (x !== y) return x < y;
    }
    return false;
}

const MIN_FIRMWARE_LEVEL = "4.2.1.7";

function isAffected(report) {
    // ---- your code: guard clauses, then return the condition ----

    // ---- end of your code ----
}

function displayName(report) {
    // ---- your code: return the name ----

    // ---- end of your code ----
}

check("the sample report",       isAffected(doc), true);
check("no report",               isAffected(null), false);
check("no overview",             isAffected({}), false);
check("no version",              isAffected({ overview: { model: "XR-220" } }), false);
check("empty version",           isAffected({ overview: { model: "XR-220", version: "" } }), false);
check("other model",             isAffected({ overview: { model: "XR-100", version: "5.0.0.0" } }), false);
check("old firmware",            isAffected({ overview: { model: "XR-210", version: "4.1.9.9" } }), false);
check("4.10 is not below 4.2",   isAffected({ overview: { model: "XR-210", version: "4.10.0.0" } }), true);

check("name from the system",    displayName(doc), "LAB-DEV-01");
check("name from the alias",     displayName({ status: { device_alias: "D1" } }), "D1");
check("empty system name",       displayName({
    inventory: { extended_info: { json: { data: { system: { name: "" } } } } },
    status: { device_alias: "D2" }
}), "D2");
check("no name at all",          displayName({}), "Unknown");
