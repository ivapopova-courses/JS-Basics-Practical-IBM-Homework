"use strict";
// Homework: module versions, a function factory, a rule split into helpers
// Run: node 05-functions/homework.js
//
// compareVersions is ready-made below (the same as in task 2).
//
// 1. bestModuleVersion(modules, number) - modules is a list of records
//    { number, version, status } (from data/report-dictionary.json, already
//    turned into a list for you). Return the HIGHEST version among the modules
//    with this number, skipping the ones whose status is set and is not "OK"
//    (an empty status "" counts as OK). Return undefined if there is none.
//    number can come as a string ("12") or as a number (12).
//
// 2. olderThan(minimum) - return a FUNCTION that takes a version and returns
//    true if it is lower than minimum (a closure, lecture section 11).
//      const tooOld = olderThan("2.14");   tooOld("2.10") -> true
//
// 3. oldRule(doc) below works, but it is long and in the older style, and it
//    has bugs. Split it into helpers and write a modern rule:
//    - deviceName(doc) - the system name, else doc.status.device_alias, else
//      "unknown device" (as in task 3);
//    - enclosureProblems(enclosures, minFirmware) - a NEW array of problem
//      texts, in the order of the enclosures; for each enclosure first
//      "<id>: <state>" if the state is not "normal", then
//      "<id>: firmware <firmware>" if the firmware is below minFirmware;
//    - newRule(doc) - uses them; emit(doc.status.device_alias, details) with
//      details { "Device", "Problems", "Details" } exactly like oldRule.
//    newRule must give the same alert as oldRule for the sample report, and
//    fix the bugs of oldRule: no alert when extended_info is missing, and no
//    alert when enclosures is one object instead of a list (use asList). It
//    must stop without an error when enclosures is missing, and it must not
//    change doc.

const check = require("../check.js");
const doc = require("../data/sample-asset.json");
const dictionary = require("../data/report-dictionary.json");
const modules = Object.values(dictionary.device_report.configuration.modules);

// ready-made helpers
function compareVersions(a, b) {
    const pa = String(a ?? "").split(".");
    const pb = String(b ?? "").split(".");
    for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
        const x = parseInt(pa[i], 10) || 0;
        const y = parseInt(pb[i], 10) || 0;
        if (x !== y) return x < y ? -1 : 1;
    }
    return 0;
}

function asList(value) {
    if (Array.isArray(value)) return value;
    if (value === undefined || value === null) return [];
    return [value];
}

// the fake emit: collects the alerts as text, so the checks can compare them
let alerts = [];
function emit(id, details) {
    alerts.push(id + " " + JSON.stringify(details));
}

// ---- the old rule: do not change it ----
function oldRule(doc) {  // the engine calls rule(doc) - keep this line as it is
    function cmp(a, b) {
        var x = String(a).split("."), y = String(b).split(".");
        for (var i = 0; i < Math.max(x.length, y.length); i++) {
            var p = parseInt(x[i], 10) || 0, q = parseInt(y[i], 10) || 0;
            if (p != q) return p < q ? -1 : 1;
        }
        return 0;
    }
    try {
        var list = doc.inventory.enclosures;
        var problems = new Array();
        for (var i = 0; i < list.length; i++) {
            var e = list[i];
            if (e.state != "normal") problems.push(e.id + ": " + e.state);
            if (cmp(e.firmware, "2.14") < 0) problems.push(e.id + ": firmware " + e.firmware);
        }
        if (problems.length == 0) return;
        var details = new Object();
        details["Device"] = doc.inventory.extended_info.json.data.system.name;
        details["Problems"] = problems.length;
        details["Details"] = problems.join("; ");
        emit(doc.status.device_alias, details);
    } catch (err) {
        return;
    }
}

function bestModuleVersion(modules, number) {
    let best;
    // ---- your code ----

    // ---- end of your code ----
    return best;
}

function olderThan(minimum) {
    // ---- your code: return a function ----

    // ---- end of your code ----
}

const MIN_FIRMWARE = "2.14";

function deviceName(doc) {
    // ---- your code ----

    // ---- end of your code ----
}

function enclosureProblems(enclosures, minFirmware) {
    const problems = [];
    // ---- your code ----

    // ---- end of your code ----
    return problems;
}

function newRule(doc) {
    // ---- your code ----

    // ---- end of your code ----
}

// runs fn and returns its result, or the error message - so one unfinished
// function does not stop the other checks
function attempt(fn) {
    try { return fn(); } catch (err) { return "error: " + err.message; }
}
// runs a rule on a report and returns its alerts as one string ("" = no alert)
function alertsOf(rule, report) {
    alerts = [];
    const error = attempt(() => { rule(report); });
    return error ? error : alerts.join("\n");
}

// 1
check("best version of module 12",   bestModuleVersion(modules, "12"), "4.20");
check("module 47 (one FAILED)",      bestModuleVersion(modules, "47"), "1.12");
check("module 90 (empty status)",    bestModuleVersion(modules, 90), "1.20");
check("a FAILED one is higher",      bestModuleVersion([{ number: "5", version: "3.0", status: "FAILED" }, { number: "5", version: "2.9", status: "OK" }], "5"), "2.9");
check("versions as numbers",         bestModuleVersion([{ number: "5", version: "1.9", status: "OK" }, { number: "5", version: "1.10", status: "OK" }], "5"), "1.10");
check("a missing module",            bestModuleVersion(modules, "99"), undefined);

// 2
const tooOld = olderThan("2.14");
check("olderThan returns a function", typeof tooOld, "function");
check('tooOld("2.10")',               attempt(() => tooOld("2.10")), true);
check('tooOld("2.14")',               attempt(() => tooOld("2.14")), false);
check('olderThan("4.2")("4.10")',     attempt(() => olderThan("4.2")("4.10")), false);

// 3
const sample = JSON.parse(JSON.stringify(doc));
check("deviceName of the sample",     deviceName(sample), "LAB-DEV-01");
check("enclosureProblems",            enclosureProblems(sample.inventory.enclosures, "2.14").join("; "),
      "ENC-02: firmware 2.10; ENC-03: degraded; ENC-04: firmware 2.10");
check("enclosureProblems of []",      enclosureProblems([], "2.14").length, 0);

check("newRule = oldRule on the sample", alertsOf(newRule, sample), alertsOf(oldRule, sample));
check("the sample is unchanged",      JSON.stringify(sample), JSON.stringify(doc));

const fine = { status: { device_alias: "LAB-DEV-02" },
               inventory: { enclosures: [{ id: "ENC-01", firmware: "2.14", state: "normal" }] } };
check("no alert when all is fine",    alertsOf(newRule, fine), "");

const noName = { status: { device_alias: "LAB-DEV-07" },
                 inventory: { enclosures: [{ id: "ENC-01", firmware: "2.10", state: "normal" }] } };
check("oldRule misses this report",   alertsOf(oldRule, noName), "");
check("newRule reports it",           alertsOf(newRule, noName),
      'LAB-DEV-07 {"Device":"LAB-DEV-07","Problems":1,"Details":"ENC-01: firmware 2.10"}');

const single = { status: { device_alias: "LAB-DEV-08" },
                 inventory: { enclosures: { id: "ENC-09", firmware: "2.14", state: "failed" } } };
check("oldRule misses one object",    alertsOf(oldRule, single), "");
check("newRule handles one object",   alertsOf(newRule, single),
      'LAB-DEV-08 {"Device":"LAB-DEV-08","Problems":1,"Details":"ENC-09: failed"}');

check("no enclosures: no alert, no error", alertsOf(newRule, { status: { device_alias: "LAB-DEV-09" }, inventory: {} }), "");
