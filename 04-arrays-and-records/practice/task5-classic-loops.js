"use strict";
// Task 5: classic loops over arrays
// Run: node 04-arrays-and-records/practice/task5-classic-loops.js
//
// 1. sumPositiveEven(numbers) - the sum of the positive even numbers.
//      [-2, 3, 7, 8, -1, 4, 2] -> 14
//
// 2. separate(numbers) - two NEW arrays: the positive even numbers and the
//    negative odd numbers (0 goes nowhere). Return them as [even, odd].
//      [1, 6, -3, 5, 2, -8, 0, 4, -7] -> [[6, 2, 4], [-3, -7]]
//
// 3. oldestName(students) - every student is an array
//    [gender, age, first name, last name]. Return "First Last" of the oldest.
//
// 4. diagonalSum(matrix) - matrix[0][0] + matrix[1][1] + ... (a square table).
//
// 5. hotIds(header, rows, limit) - rows is a table, header has the column
//    names. Return the ids of the rows whose temperature is above limit.
//    Find the columns with header.indexOf(...) - do not write row[1].

const check = require("../../check.js");

function sumPositiveEven(numbers) {
    let sum = 0;
    // ---- your code ----

    // ---- end of your code ----
    return sum;
}

function separate(numbers) {
    const even = [];
    const odd = [];
    // ---- your code ----

    // ---- end of your code ----
    return [even, odd];
}

function oldestName(students) {
    // ---- your code: return "First Last" ----

    // ---- end of your code ----
}

function diagonalSum(matrix) {
    let sum = 0;
    // ---- your code ----

    // ---- end of your code ----
    return sum;
}

function hotIds(header, rows, limit) {
    const ids = [];
    // ---- your code ----

    // ---- end of your code ----
    return ids;
}

const text = JSON.stringify;

check("sumPositiveEven",             sumPositiveEven([-2, 3, 7, 8, -1, 4, 2]), 14);
check("sumPositiveEven empty",       sumPositiveEven([]), 0);
check("sumPositiveEven none",        sumPositiveEven([-4, 1, 3]), 0);

check("separate",                    text(separate([1, 6, -3, 5, 2, -8, 0, 4, -7])), "[[6,2,4],[-3,-7]]");
check("separate empty",              text(separate([])), "[[],[]]");

const students = [
    ["male", 24, "Ivan", "Ivanov"],
    ["female", 22, "Maria", "Petrova"],
    ["male", 18, "Georgi", "Georgiev"],
    ["male", 21, "Nikolai", "Nikolov"],
];
check("oldestName",                  oldestName(students), "Ivan Ivanov");
check("oldestName - not the first",  oldestName([["female", 30, "Ana", "Dimova"], ["male", 41, "Petar", "Kolev"]]), "Petar Kolev");

check("diagonalSum 3x3",             diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), 15);
check("diagonalSum 1x1",             diagonalSum([[42]]), 42);

const header = ["state", "id", "temperature"];
const rows = [
    ["normal", "ENC-01", "31"],
    ["normal", "ENC-02", "36"],
    ["degraded", "ENC-07", "38"],
];
check("hotIds above 35",             text(hotIds(header, rows, 35)), '["ENC-02","ENC-07"]');
check("hotIds above 40",             text(hotIds(header, rows, 40)), "[]");
