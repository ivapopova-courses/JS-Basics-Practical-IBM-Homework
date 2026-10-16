"use strict";
// Task 5: classic object tasks
// Run: node 06-objects/practice/task5-objects-classic.js
//
// 1. developerFactory(firstName, surName, skills) - return a new object with the
//    three properties and a method applyForJob() that RETURNS
//    "Hi, I'm Ivan Ivanov. My strongest skills are HTML, CSS, JavaScript."
// 2. class Developer - the same, as a class with a constructor and the method.
// 3. swap(obj) - a NEW object where a and b are swapped: { a: 1, b: 2 } ->
//    { a: 2, b: 1 }. Use destructuring. Do not change obj.
// 4. createPerson(name, age) - return an object made with SHORTHAND properties
//    and a method greet() (short method syntax) that returns
//    "Hello, my name is Ada Byron!".
// 5. combineArrays - an ARROW function that takes any number of arrays (rest)
//    and returns one new array with all their elements (spread).
// 6. countVowels(text) - the number of vowels (a, e, i, o, u; also capital) in
//    the text, with for...of.
// 7. youngestName(people) - people is an array of objects { name, age }; return
//    the name of the youngest; "" for an empty array.
// 8. calculator - an object with four methods: add(a, b), subtract(a, b),
//    multiply(a, b), divide(a, b); divide by 0 returns undefined.

const check = require("../../check.js");

function developerFactory(firstName, surName, skills) {
    // ---- your code: return an object ----

    // ---- end of your code ----
}

// ---- your code: class Developer ----
class Developer {
    // constructor and applyForJob()
}
// ---- end of your code ----

function swap(obj) {
    // ---- your code: destructuring, return a new object ----

    // ---- end of your code ----
}

function createPerson(name, age) {
    // ---- your code: shorthand properties and a greet() method ----

    // ---- end of your code ----
}

// ---- your code: const combineArrays = ... ----
const combineArrays = null;
// ---- end of your code ----

function countVowels(text) {
    let count = 0;
    // ---- your code ----

    // ---- end of your code ----
    return count;
}

function youngestName(people) {
    // ---- your code: return a name or "" ----

    // ---- end of your code ----
}

// ---- your code: const calculator = { ... } ----
const calculator = {};
// ---- end of your code ----

// runs fn and returns its result, or the error message - so one unfinished
// part does not stop the other checks
function attempt(fn) {
    try { return fn(); } catch (err) { return "error: " + err.message; }
}
const text = JSON.stringify;

const dev1 = developerFactory("Ivan", "Ivanov", ["HTML", "CSS", "JavaScript"]);
check("factory: applyForJob",     attempt(() => dev1.applyForJob()), "Hi, I'm Ivan Ivanov. My strongest skills are HTML, CSS, JavaScript.");
check("factory: a property",      attempt(() => dev1.surName), "Ivanov");
const dev2 = attempt(() => new Developer("Maria", "Mineva", ["Python", "Data Science"]));
check("class: applyForJob",       attempt(() => dev2.applyForJob()), "Hi, I'm Maria Mineva. My strongest skills are Python, Data Science.");
check("class: instanceof",        dev2 instanceof Developer, true);
const pair = { a: 1, b: 2 };
check("swap",                     text(swap(pair)), '{"a":2,"b":1}');
check("swap does not change obj", text(pair), '{"a":1,"b":2}');
const person = createPerson("Ada Byron", 30);
check("createPerson: greet",      attempt(() => person.greet()), "Hello, my name is Ada Byron!");
check("createPerson: age",        attempt(() => person.age), 30);
check("combineArrays (2 arrays)", attempt(() => text(combineArrays([1, 2, 3], [6, 7, 8]))), "[1,2,3,6,7,8]");
check("combineArrays (3 arrays)", attempt(() => text(combineArrays([1], [2, 3], [4]))), "[1,2,3,4]");
check("combineArrays is an arrow", typeof combineArrays === "function" && !("prototype" in combineArrays), true);
check("countVowels",              countVowels("Hello, World!"), 3);
check("countVowels with capitals", countVowels("AEIOU xyz"), 5);
const people = [{ name: "Ivan", age: 24 }, { name: "Maria", age: 19 }, { name: "Georgi", age: 31 }];
check("youngestName",             youngestName(people), "Maria");
check("youngestName of []",       youngestName([]), "");
check("calculator.add",           attempt(() => calculator.add(2, 3)), 5);
check("calculator.divide",        attempt(() => calculator.divide(7, 2)), 3.5);
check("calculator.divide by 0",   attempt(() => calculator.divide(1, 0)), undefined);
