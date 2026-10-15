"use strict";
// Homework: an LDAP summary
// Run: node 02-variables-and-types/homework.js
//
// The values come from doc.inventory.details:
//   auth_service_configured, auth_service_enabled,
//   auth_service_cert_set, auth_service_pwd_set   - "yes" or "no"
//   auth_service_type                             - for example "ldap"
//
// 1. Convert the four "yes" / "no" values to booleans.
// 2. Count how many are "yes" WITHOUT if statements.
//    Hint: Number(true) is 1 and Number(false) is 0.
// 3. Return exactly this text (the values change with the input):
//    "auth ldap: configured true, enabled true, 2 of 4 settings are yes"

const check = require("../check.js");

function ldapSummary(configured, enabled, certSet, pwdSet, type) {
    let summary;
    // ---- your code: set summary ----

    // ---- end of your code ----
    return summary;
}

check("sample asset", ldapSummary("yes", "yes", "no", "no", "ldap"),
    "auth ldap: configured true, enabled true, 2 of 4 settings are yes");
check("not enabled", ldapSummary("yes", "no", "no", "no", "ldap"),
    "auth ldap: configured true, enabled false, 1 of 4 settings are yes");
check("nothing", ldapSummary("no", "no", "no", "no", "none"),
    "auth none: configured false, enabled false, 0 of 4 settings are yes");
check("all yes", ldapSummary("yes", "yes", "yes", "yes", "ldap"),
    "auth ldap: configured true, enabled true, 4 of 4 settings are yes");
