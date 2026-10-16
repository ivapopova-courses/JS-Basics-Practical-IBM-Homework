"use strict";
// Task 5: classic tasks as functions
// Run: node 05-functions/practice/task5-classic-functions.js
//
// 1. rectangleArea(width, height) - the area of a rectangle.
//
// 2. sumArray(numbers) - the sum of the elements. Then sumArrays(a, b) - the sum
//    of all elements of two arrays: call sumArray twice, do not copy the loop.
//
// 3. findMaxEven(numbers) - the largest even number; undefined if there is none.
//      [1, 8, 3, 6] -> 8,   [-4, -2, 7] -> -2,   [1, 3] -> undefined
//
// 4. highestScoreIndex(scores) - the INDEX of the highest score (the first one
//    if there are several); -1 for an empty array.
//
// 5. sumEven2D(matrix) - the sum of the even numbers in an array of arrays.
//
// 6. createBoard(rows, cols, fill = ".") - an array of `rows` arrays, each with
//    `cols` cells set to fill. boardToText(board) - one line per row, the cells
//    joined without spaces, the lines joined with "\n".

const check = require("../../check.js");

function rectangleArea(width, height) {
    // ---- your code: return the area ----

    // ---- end of your code ----
}

function sumArray(numbers) {
    let sum = 0;
    // ---- your code ----

    // ---- end of your code ----
    return sum;
}

function sumArrays(a, b) {
    // ---- your code: use sumArray ----

    // ---- end of your code ----
}

function findMaxEven(numbers) {
    let max;
    // ---- your code ----

    // ---- end of your code ----
    return max;
}

function highestScoreIndex(scores) {
    let best = -1;
    // ---- your code ----

    // ---- end of your code ----
    return best;
}

function sumEven2D(matrix) {
    let sum = 0;
    // ---- your code ----

    // ---- end of your code ----
    return sum;
}

function createBoard(rows, cols, fill = ".") {
    const board = [];
    // ---- your code ----

    // ---- end of your code ----
    return board;
}

function boardToText(board) {
    const lines = [];
    // ---- your code ----

    // ---- end of your code ----
    return lines.join("\n");
}

check("rectangleArea(3, 4)",          rectangleArea(3, 4), 12);
check("rectangleArea(4, 4.5)",        rectangleArea(4, 4.5), 18);
check("sumArray([1, 2, 3])",          sumArray([1, 2, 3]), 6);
check("sumArray([])",                 sumArray([]), 0);
check("sumArrays([1, 2], [10, 20])",  sumArrays([1, 2], [10, 20]), 33);
check("findMaxEven([1, 8, 3, 6])",    findMaxEven([1, 8, 3, 6]), 8);
check("findMaxEven([-4, -2, 7])",     findMaxEven([-4, -2, 7]), -2);
check("findMaxEven([1, 3])",          findMaxEven([1, 3]), undefined);
check("highestScoreIndex",            highestScoreIndex([4.5, 6, 5.25, 6]), 1);
check("highestScoreIndex([])",        highestScoreIndex([]), -1);
check("sumEven2D",                    sumEven2D([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), 20);

const board = createBoard(2, 3);
check("createBoard: rows",            board.length, 2);
check("createBoard: cells in a row",  board[1] && board[1].length, 3);
if (board[0]) board[0][1] = "X";
check("boardToText",                  boardToText(board), ".X.\n...");
check("the rows are separate arrays", board[1] && board[1][1], ".");
check("createBoard with a fill",      boardToText(createBoard(1, 2, "-")), "--");
