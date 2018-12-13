require("./TreeNode")
require("./easy")
require("./medium")

var root1 = BuildTree([1, 2, 3, 4, 5, 6, null, null, null, 7, 8]);
var root2 = BuildTree([1, 3, 2, null, 6, 4, 5, null, null, null, null, 8, 7]);

console.log(Medium.flipEquiv(root1, root2));