"use strict";
// Homework: alert details, settings with defaults, a rule over a dictionary
// Run: node 06-objects/homework.js
//
// get(obj, path, fallback) is ready-made below - use your own from task 2 if you like.
//
// 1. alertDetails(doc, failed) - the payload of an alert, with the columns in a
//    FIXED order (COLUMNS below), whatever order you fill them in:
//      { details: [ { "Device": ..., "Model": ..., "Serial": ..., "Firmware": ...,
//                     "Failed modules": ... } ],
//        column_order: COLUMNS }
//    Device = the system name (inventory.extended_info.json.data.system.name), else
//    the device alias (status.device_alias), else "unknown". Model and Serial from
//    overview. Firmware = inventory.labels["Firmware Version"]. Failed modules =
//    failed.join(", "). A missing value becomes "". column_order must be a COPY of
//    COLUMNS (changing it must not change COLUMNS).
//
// 2. parseSettings(text) - "SA=2,SG=1,SN=2" -> { SA: "2", SG: "1", SN: "2" }.
//    "" -> {}. A part without "=" is skipped.
//    withDefaults(settings, defaults) - a NEW object with every key of defaults
//    and of settings; a value of settings wins, unless it is undefined, null or "".
//    Do not change either input.
//
// 3. driveAlert(report) - report is data/report-dictionary.json. Look at the
//    dictionary device_report.configuration.drives. For every drive whose state
//    is not "" (empty = fine), make a row { "Drive": <key>, "Serial": ...,
//    "Model": ..., "State": ... }. Return null when there are no rows, else
//    { device: device_report.device_id, details: rows, column_order: [the four
//    column names] }. It must not throw when configuration or drives is
//    missing, and it must not change the report.

const check = require("../check.js");
const doc = require("../data/sample-asset.json");
const dictionary = require("../data/report-dictionary.json");

function get(obj, path, fallback) {
    const keys = Array.isArray(path) ? path : String(path).split(".");
    let cur = obj;
    for (const key of keys) {
        if (cur === undefined || cur === null) return fallback;
        cur = cur[key];
    }
    return cur ?? fallback;
}

const COLUMNS = ["Device", "Model", "Serial", "Firmware", "Failed modules"];

function alertDetails(doc, failed) {
    // ---- your code: return { details: [...], column_order: [...] } ----

    // ---- end of your code ----
}

function parseSettings(text) {
    const settings = {};
    // ---- your code ----

    // ---- end of your code ----
    return settings;
}

function withDefaults(settings, defaults) {
    // ---- your code: return a new object ----

    // ---- end of your code ----
}

function driveAlert(report) {
    // ---- your code: return null or { device, details, column_order } ----

    // ---- end of your code ----
}

// runs fn and returns its result, or the error message
function attempt(fn) {
    try { return fn(); } catch (err) { return "error: " + err.message; }
}
const text = JSON.stringify;
const docBefore = text(doc);

// 1
const payload = attempt(() => alertDetails(doc, ["47 (1.07)"]));
check("alertDetails: the row", text(payload?.details),
      '[{"Device":"LAB-DEV-01","Model":"XR-220","Serial":"SN4X7Q92","Firmware":"4.2.1.7","Failed modules":"47 (1.07)"}]');
check("alertDetails: column_order", text(payload?.column_order), text(COLUMNS));
check("alertDetails: keys in order", payload?.details && Object.keys(payload.details[0]).join("|"), COLUMNS.join("|"));
if (payload?.column_order) payload.column_order.push("X");
check("column_order is a copy", COLUMNS.length, 5);
const small = attempt(() => alertDetails({ status: { device_alias: "LAB-DEV-07" } }, []));
check("alertDetails: missing data", text(small?.details),
      '[{"Device":"LAB-DEV-07","Model":"","Serial":"","Firmware":"","Failed modules":""}]');
check("alertDetails: no data at all", attempt(() => alertDetails({}, [])?.details?.[0]?.Device), "unknown");
check("the report is unchanged", text(doc), docBefore);

// 2
check("parseSettings",             text(parseSettings(doc.inventory.details.settings)), '{"SA":"2","SG":"1","SN":"2"}');
check('parseSettings("")',         text(parseSettings("")), "{}");
check("parseSettings with spaces", text(parseSettings(" A = 1 ,junk,B=x=y")), '{"A":"1","B":"x=y"}');
const defaults = { SA: "0", SG: "0", SN: "0", SX: "1" };
const given = { SA: "2", SG: "", SN: null };
check("withDefaults",              text(attempt(() => withDefaults(given, defaults))), '{"SA":"2","SG":"0","SN":"0","SX":"1"}');
check("withDefaults: new keys",    attempt(() => withDefaults({ NEW: "5" }, defaults).NEW), "5");
check("withDefaults: inputs unchanged", text(given) + text(defaults), '{"SA":"2","SG":"","SN":null}{"SA":"0","SG":"0","SN":"0","SX":"1"}');

// 3
const dictBefore = text(dictionary);
const alert = attempt(() => driveAlert(dictionary));
check("driveAlert: the device",    alert?.device, "LAB-TL-02");
check("driveAlert: rows",          text(alert?.details), '[{"Drive":"drive_f02_r01","Serial":"LABDRV21XX","Model":"60F","State":"offline"}]');
check("driveAlert: column_order",  text(alert?.column_order), '["Drive","Serial","Model","State"]');
check("driveAlert: all drives fine", attempt(() => driveAlert({ device_report: { device_id: "X", configuration: { drives: { d1: { state: "" } } } } })), null);
check("driveAlert: no drives",     attempt(() => driveAlert({ device_report: { device_id: "X" } })), null);
check("driveAlert: empty report",  attempt(() => driveAlert({})), null);
check("the dictionary report is unchanged", text(dictionary), dictBefore);
