TreeNode = function (val) {
    this.val = val;
    this.left = this.right = null;
};

BuildTree = function (array) {
    var index = 0;

    var popNext = function (l, v) {
        ++index;
        //console.log("pop at [" + l + ":" + v +  "] - [" + array[index] + "]");
        return array[index];
    }

    // I feel this is stupid to go from the top every iteration, 
    // but I can't get it to work otherwise 
    var grow = function (root, level, targetLevel) {
        if (root != null && root.val != null) {
            if (level == targetLevel) {
                var v = popNext(level, root.val);
                if (v != undefined) {
                    root.left = new TreeNode(v);
                }

                v = popNext(level, root.val);
                if (v != undefined) {
                    root.right = new TreeNode(v);
                }
            } else {
                ++level;
                grow(root.left, level, targetLevel);
                grow(root.right, level, targetLevel);
            }
        }
    }

    var ret = new TreeNode(array[0]);

    var j = 0;
    while (index < array.length - 1) {
        grow(ret, 0, j);
        j++;
    }

    return ret;
}