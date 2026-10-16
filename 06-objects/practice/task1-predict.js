"use strict";
// Task 1: predict the result
// Run: node 06-objects/practice/task1-predict.js
//
// Do NOT run the file first. For each check replace "?" with what you think the
// expression gives. Write strings in quotes ("XR-220"), numbers and booleans
// without quotes (3, true), and undefined and null as they are.
// Then run the file and see how many you got right. For each FAIL, find the
// section in the lecture that explains it.

const check = require("../../check.js");

const prices = { apples: 2.5, "red pears": 3 };
const fruit = "apples";
const report = { overview: { model: "XR-220" }, inventory: { modules: { "12_4.20": { status: "OK" } } } };

// dot and brackets
check("prices[fruit]",                          prices[fruit],                          "?");
check("prices.fruit",                           prices.fruit,                           "?");
check('prices["red pears"]',                    prices["red pears"],                    "?");
check('Object.keys(prices).length',             Object.keys(prices).length,             "?");
check('report.inventory.modules["12_4.20"].status', report.inventory.modules["12_4.20"].status, "?");

// missing keys and safe access
check("report.status",                          report.status,                          "?");
check("report.status?.alias",                   report.status?.alias,                   "?");
check('report.status?.alias ?? "unknown"',      report.status?.alias ?? "unknown",      "?");
check('"model" in report.overview',             "model" in report.overview,             "?");
check('Object.hasOwn(report, "toString")',      Object.hasOwn(report, "toString"),      "?");

// the order of the keys
check('Object.keys({ b: 1, "10": 2, a: 3 })[0]', Object.keys({ b: 1, "10": 2, a: 3 })[0], "?");

// references and copies
const a = { n: 1, list: [1] };
const b = a;
const c = { ...a };
b.n = 2;
c.list.push(2);
check("a.n after b.n = 2",                      a.n,                                    "?");
check("c.n",                                    c.n,                                    "?");
check("a.list.length after c.list.push(2)",     a.list.length,                          "?");
check("{ x: 1 } === { x: 1 }",                  ({ x: 1 }) === ({ x: 1 }),              "?");

// spread and destructuring
const { model, serial = "none" } = report.overview;
const [major, minor] = "4.2.1.7".split(".");
check("model",                                  model,                                  "?");
check("serial",                                 serial,                                 "?");
check("major + minor",                          major + minor,                          "?");
check("{ ...{ a: 1, b: 2 }, b: 3 }.b",          ({ ...{ a: 1, b: 2 }, b: 3 }).b,        "?");
check("Math.max(...[4, 9, 2])",                 Math.max(...[4, 9, 2]),                 "?");
