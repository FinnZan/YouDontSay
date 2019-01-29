require("./TreeNode")
require("./easy")
require("./medium")

var root = BuildTree([3, 1, 5, 0, 2, 4, 6, null, null, null, 3]);

var emails = [
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com"
]

console.log(numUniqueEmails(emails));