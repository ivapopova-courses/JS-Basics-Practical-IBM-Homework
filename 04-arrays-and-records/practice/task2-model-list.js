"use strict";
// Task 2: an allow-list of models
// Run: node 04-arrays-and-records/practice/task2-model-list.js
//
// 1. isSupported(models, model) - true if model is in the list, false if not.
//    The model from a report can have spaces around it and lower-case letters:
//    " xr-220 " counts as "XR-220". Clean it first with trim() and
//    toUpperCase(), then search. A missing model (undefined) is not supported.
//
// 2. addModel(models, model) - add model at the END of the list, but only if it
//    is not there yet (no duplicates). Return the new length of the list.
//
// 3. removeModel(models, model) - remove model from the list, if it is there.
//    Return true if something was removed, false if not.
//    Careful: indexOf gives -1 when the model is missing - what does
//    splice(-1, 1) do?
//
// addModel and removeModel CHANGE the list they get - this is what we want here.

const check = require("../../check.js");

function isSupported(models, model) {
    // ---- your code: return true or false ----

    // ---- end of your code ----
}

function addModel(models, model) {
    // ---- your code: push only if missing, return the length ----

    // ---- end of your code ----
}

function removeModel(models, model) {
    // ---- your code: indexOf + splice, return true or false ----

    // ---- end of your code ----
}

const MODELS = ["XR-210", "XR-220"];

check("exact match",              isSupported(MODELS, "XR-220"), true);
check("spaces and lower case",    isSupported(MODELS, " xr-220 "), true);
check("not in the list",          isSupported(MODELS, "XR-300"), false);
check("missing model",            isSupported(MODELS, undefined), false);

const list = ["XR-210", "XR-220"];
check("add a new model",          addModel(list, "XR-230"), 3);
check("it is at the end",         list[list.length - 1], "XR-230");
check("add it again: no change",  addModel(list, "XR-230"), 3);
check("the list",                 list.join(","), "XR-210,XR-220,XR-230");

check("remove XR-220",            removeModel(list, "XR-220"), true);
check("the list after remove",    list.join(","), "XR-210,XR-230");
check("remove a missing model",   removeModel(list, "XR-999"), false);
check("the last one is still there", list.join(","), "XR-210,XR-230");
