"use strict";
// Task 1: predict the result
// Run: node 04-arrays-and-records/practice/task1-predict.js
//
// Do NOT run the expressions first. For each line, replace "?" with what you
// think the expression gives. Write strings in quotes ("XR-220"), numbers and
// booleans without quotes (3, true), and undefined as undefined.
// Then run the file and see how many you got right. For each FAIL, find the
// section in the lecture that explains it.

const check = require("../../check.js");

const models = ["XR-210", "XR-220", "XR-230"];

// index and length
check("models.length",                 models.length,                 "?");
check("models[1]",                     models[1],                     "?");
check("models[3]",                     models[3],                     "?");
check("models[models.length - 1]",     models[models.length - 1],     "?");
check("models[-1]",                    models[-1],                    "?");
check("typeof models",                 typeof models,                 "?");
check('Array.isArray("XR-210")',       Array.isArray("XR-210"),       "?");
check("Boolean([])",                   Boolean([]),                   "?");
check("[1, 2] === [1, 2]",             [1, 2] === [1, 2],             "?");

// methods
check("[3, 1, 2].push(4)",             [3, 1, 2].push(4),             "?");
check("[3, 1, 2].pop()",               [3, 1, 2].pop(),               "?");
check("[5, 6, 7, 8].slice(1, 3).length", [5, 6, 7, 8].slice(1, 3).length, "?");
check("[5, 6, 7, 8].slice(-1)[0]",     [5, 6, 7, 8].slice(-1)[0],     "?");
check('models.indexOf("XR-230")',      models.indexOf("XR-230"),      "?");
check('models.indexOf("xr-230")',      models.indexOf("xr-230"),      "?");
check('models.includes("XR-220")',     models.includes("XR-220"),     "?");

// split and join
check('"4.2.1.7".split(".").length',   "4.2.1.7".split(".").length,   "?");
check('"4.2.1.7".split(".")[1]',       "4.2.1.7".split(".")[1],       "?");
check('"".split(";").length',          "".split(";").length,          "?");
check('[4, 2, 1, 7].join("")',         [4, 2, 1, 7].join(""),         "?");
