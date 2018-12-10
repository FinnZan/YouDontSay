// 258. Add Digits
var addDigits = function (num) {
    var newNum = num;
    while (newNum >= 10) {
        var sum = 0;
        while (newNum > 0) {
            var digit = newNum % 10;
            sum += digit;
            newNum = Math.floor(newNum / 10);
        }
        newNum = sum;
    }

    return newNum;
};

// 888. Fair Candy Swap
var fairCandySwap = function (A, B) {

    var sumA = 0;
    for (var i = 0; i < A.length; i++) {
        sumA += A[i];
    }

    var sumB = 0;
    for (var j = 0; j < B.length; j++) {
        sumB += B[j];
    }

    for (var i = 0; i < A.length; i++) {
        for (var j = 0; j < B.length; j++) {
            if ((sumA - A[i] + B[j]) == (sumB + A[i] - B[j])) {
                var ret = [A[i], B[j]];
                return ret;
            }
        }
    }
};

// 283. Move Zeroes
var moveZeroes = function (nums) {
    var ret = [];
    var c = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            ret.push(nums[i]);
        } else {
            c++;
        }
    }

    for (var i = 0; i < c; i++) {
        ret.push(0);
    }

    for (var i = 0; i < nums.length; i++) {
        nums[i] = ret[i];
    }
};

// 540. Single Element in a Sorted Array
var singleNonDuplicateWithMap = function (nums) {
    var dict = new Map();

    for (var i = 0; i < nums.length; i++) {
        var n = nums[i];
        if (dict.has(n)) {
            dict.set(n, dict.get(n) + 1);
        } else {
            dict.set(n, 1);
        }
    }

    var iter = dict.entries();
    while (!iter.done) {
        var c = iter.next().value;
        if (c[1] == 1) {
            return c[0];
        }
    }
};

// 637. Average of Levels in Binary Tree
var averageOfLevels = function (root) {
    var sum = [];
    var count = [];
    var max = 0;

    function Go(root, level) {
        if (root != undefined) {
            if (level > max) {
                max = level;
            }

            if (sum[level] == undefined) {
                sum[level] = 0;
            }

            if (count[level] == undefined) {
                count[level] = 0;
            }

            sum[level] += root.val;
            count[level]++;

            Go(root.left, level + 1);
            Go(root.right, level + 1);
        }
    };

    Go(root, 0);

    var ret = [];
    for (i = 0; i < max + 1; i++) {
        ret[i] = sum[i] / count[i];
    }

    console.log(sum);
    console.log(count);
    console.log(ret);

    return ret;
};

// 766. Toeplitz Matrix
var isToeplitzMatrix = function (matrix) {
    var N = matrix.length;
    var M = matrix[0].length;
    var ret = false;

    for (n = 0; n < N - 1; n++)
        for (m = 0; m < M - 1; m++) {
            //console.log(matrix[n][m] + " "+  matrix[n+1][m+1]);
            if (matrix[n][m] != matrix[n + 1][m + 1]) {
                return false;
            }
        }

    return true;
};