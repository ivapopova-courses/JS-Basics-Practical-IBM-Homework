"use strict";
// Helper for the practice tasks - you do not need to change or understand it yet.
// check("what is checked", actualValue, expectedValue) prints OK or FAIL.
// When the program ends it prints "N of M checks passed" and, if any check
// failed, sets the exit code to 1.
let total = 0;
let passed = 0;

function check(label, actual, expected) {
    total++;
    const same = actual === expected || (Number.isNaN(actual) && Number.isNaN(expected));
    if (same) {
        passed++;
        console.log("OK   " + label);
    } else {
        process.exitCode = 1;
        console.log("FAIL " + label + ": got " + JSON.stringify(actual) + ", expected " + JSON.stringify(expected));
    }
}

process.on("exit", () => {
    if (total > 0) {
        console.log("\n" + passed + " of " + total + " checks passed");
    }
});

module.exports = check;
