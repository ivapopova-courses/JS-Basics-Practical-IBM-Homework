"use strict";
// Task 1: variables for the data of a sample check rule
// Run: node 02-variables-and-types/practice/task1-rule-variables.js
//
// `doc` is the sample asset document (data/sample-asset.json in this repo).
// How require() works comes in session 8 - here we just use it.
//
// Where the values are in doc:
//   system name   doc.inventory.extended_info.json.data.system.name
//   serial        doc.overview.serial_number
//   model         doc.overview.model
//   firmware      doc.overview.version
//
// 1. Replace each `undefined` below with the right value from doc.
// 2. Build `message` with a template string, so that it reads exactly:
//      LAB-DEV-01 (model XR-220, serial SN4X7Q92) runs firmware level 4.2.1.7
// 3. Build `minimumNote` from MIN_FIRMWARE_LEVEL and firmwareLevel:
//      firmware level 4.2.1.7, minimum 4.2.1.7

const check = require("../../check.js");
const doc = require("../../data/sample-asset.json");

const MIN_FIRMWARE_LEVEL = "4.2.1.7";

// ---- your code ----
const name = undefined;
const serial = undefined;
const model = undefined;
const firmwareLevel = undefined;

const message = undefined;
const minimumNote = undefined;
// ---- end of your code ----

check("name", name, "LAB-DEV-01");
check("serial", serial, "SN4X7Q92");
check("model", model, "XR-220");
check("firmwareLevel", firmwareLevel, "4.2.1.7");
check("message", message, "LAB-DEV-01 (model XR-220, serial SN4X7Q92) runs firmware level 4.2.1.7");
check("minimumNote", minimumNote, "firmware level 4.2.1.7, minimum 4.2.1.7");
