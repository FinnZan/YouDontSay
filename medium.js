// 419. Battleships in a Board
Medium = {
    countBattleships: function (board) {
        var M = board.length;
        var N = board[0].length;

        var findShip = function (board, m, n) {
            var mp = m + 1;
            var np = n + 1;

            while (np < N && board[m][np] === 'X') {
                board[m][np] = '.';
                np++;
            }

            while (mp < M && board[mp][n] === 'X') {
                board[mp][n] = '.';
                mp++;
            }
        }

        var ret = 0;

        for (var i = 0; i < M; i++) {
            for (var j = 0; j < N; j++) {
                if (board[i][j] === 'X') {
                    ret++;
                    board[i][j] = '.';
                    findShip(board, i, j);
                }
            }
        }

        return ret;
    },

    // 78. Subsets
    subsets: function (nums) {
        var ret = [[]];

        for (var i = 0; i < nums.length; i++) {
            var l = ret.length;
            for (var j = 0; j < l; j++) {
                var newSet = ret[j].slice(0);
                newSet.push(nums[i]);
                ret.push(newSet);
            }
        }

        return ret;
    },

    //260. Single Number III
    singleNumber: function (nums) {
        var counts = {};
        for (i = 0; i < nums.length; i++) {
            if (counts[nums[i]] == undefined) {
                counts[nums[i]] = 1;
            } else {
                delete counts[nums[i]];
            }
        }

        var ret = [];
        var c = 0;

        Object.keys(counts).forEach(function (key, index) {
            ret[c] = key;
            c++;
        });
    },

    // 347. Top K Frequent Elements
    topKFrequent: function (nums, k) {
        var counts = {};

        for (i = 0; i < nums.length; i++) {
            if (counts[nums[i]] == undefined) {
                counts[nums[i]] = 1;
            } else {
                counts[nums[i]]++;
            }
        }

        var ret = [];
        var c = 0;
        Object.keys(counts).forEach(function (key, index) {
            ret[c] = { value: key, count: counts[key] };
            c++;
        });

        ret.sort(function (a, b) { return b.count - a.count });

        var r = [];
        for (j = 0; j < k; j++) {
            r[j] = ret[j].value;
        }

        return r;
    },

    // 921. Minimum Add to Make Parentheses Valid
    minAddToMakeValid: function (S) {
        var stack = [];

        for (var i = 0; i < S.length; i++) {
            var c = S[i];
            if (c == '(') {
                stack.push(c);
            }

            if (c == ')') {
                if (stack[stack.length - 1] == '(') {
                    stack.pop();
                }
                else {
                    stack.push(c);
                }
            }
        }

        return stack.length;
    },

    // 547. Friend Circles
    findCircleNum: function (M) {
        var rows = M.length;
        var cols = M[0].length;
        var ret = 0;

        var clearFriends = function (M, i) {
            var hasFriend = false;
            for (var j = 0; j < cols; j++) {
                if (M[i][j] == 1) {
                    hasFriend = true;
                    M[i][j] = 0;
                    M[j][i] = 0;
                    if (i != j) {
                        clearFriends(M, j);
                    }
                }
            }
            return hasFriend;
        }

        var ret = 0;

        for (var i = 0; i < rows; i++) {
            if (clearFriends(M, i)) {
                ret++;
            }
        }

        return ret;
    },

    // 739. Daily Temperatures
    dailyTemperatures: function (T) {
        var ret = [];
        console.log(T.length);

        for (i = 0; i < T.length; i++) {
            ret[i] = 0;
            for (j = i + 1; j < T.length; j++) {
                if (T[j] > T[i]) {
                    ret[i] = j - i;
                    break;
                }
            }
            console.log(i + "-" + ret[i]);
        }
    },

    // 791. Custom Sort String
    customSortString: function (S, T) {
        var ret = "";
        var mask = [];

        for (j = 0; j < T.length; j++) {
            mask[j] = 0;
        }

        for (i = 0; i < S.length; i++) {
            for (j = 0; j < T.length; j++) {
                if (T[j] == S[i]) {
                    ret += T[j];
                    T[j] = '_';
                    mask[j] = 1;
                }
            }
        }

        for (j = 0; j < T.length; j++) {
            if (mask[j] == 0) {
                ret += T[j];
            }
        }

        console.log(S);
        console.log(T);
        console.log(ret);

        return ret;
    },

    // 950. Reveal Cards In Increasing Order  
    deckRevealedIncreasing: function (deck) {
        var ret = [];
        deck.sort(function (a, b) {
            return b - a;
        });

        for (var i = 0; i < deck.length; i++) {
            if (ret.length > 1) {
                var tail = ret[ret.length - 1];
                ret.pop();
                ret.unshift(tail);
            }
            ret.unshift(deck[i]);
        }

        return ret;
    },

    // 951. Flip Equivalent Binary 
    flipEquiv: function (root1, root2) {
        var func = function (root1, root2) {
            if (root1 != null && root2 != null) {
                if (root1.val == root2.val) {
                    if ((func(root1.left, root2.left) && func(root1.right, root2.right))) {
                        return true;
                    } else if ((func(root1.left, root2.right) && func(root1.right, root2.left))) {
                        return true;
                    }
                    else {
                        return false;
                    }
                } else {
                    return false;
                }
            }
            else {
                return root1 == root2;
            }
        }

        return func(root1, root2);
    },

    //442. Find All Duplicates in an Array
    findDuplicates: function (nums) {
        var obj = {};
        var ret = [];
        for (var i = 0; i < nums.length; i++) {
            if (obj[nums[i]] == undefined) {
                obj[nums[i]] = 1;
            } else {
                ret.push(nums[i]);
            }
        }

        return ret;
    },

    // 513. Find Bottom Left Tree Value
    findBottomLeftValue: function (root) {
        var ret = {};
        ret.pos = -1;
        ret.level = -1;
        ret.val = null;

        var goDown = function (r, level, pos) {
            if (r != null) {
                if (level > ret.level || (level == ret.level && pos > ret.pos)) {
                    ret.pos = pos;
                    ret.level = level;
                    ret.val = r.val
                }
                goDown(r.left, level + 1, pos + 2);
                goDown(r.right, level + 1, pos + 1);
            }
        }

        goDown(root, 0, 0);

        return ret.val;
    },

    // 946. Validate Stack Sequences
    validateStackSequences: function (pushed, popped) {
        var stack = [];
        var i = 0; // push index
        var j = 0; // pop index

        while (i < pushed.length || stack.length > 0) {
            var keepOn = false;

            if (i < pushed.length) {
                stack.push(pushed[i]);
                //console.log("push [" + toPush[0] + "]");
                i++;
                keepOn = true;
            }

            while (stack.length > 0 && (stack[stack.length - 1] == popped[j])) {
                var p = stack.pop();
                j++;
                keepOn = true;
                //console.log("pop [" + p + "]");
            }

            if (!keepOn) {
                break;
            }
        }

        return stack.length == 0;
    },

    // 338. Counting Bits
    countBits: function (num) {
        var ret = [];
        for (var i = 0; i <= num; i++) {
            var d = i;
            ret[i] = 0;
            while (d > 0) {
                if (d & 1) {
                    ret[i]++;
                }
                d = d >> 1;
            }
        }

        return ret;
    },

    // 931. Minimum Falling Path Sum
    minFallingPathSum: function (A) {
        var M = A.length;
        var N = A[0].length;

        var cache = [];
        var min = 99999999999999999;

        for (var i = 0; i < N; i++) {
            cache[i] = [];
        }

        var go = function (m, n, sum) {
            if (m >= 0 && m < M) {
                var v = sum + A[n][m];
                if (cache[n][m] != undefined) {
                    if (v < cache[n][m]) {
                        cache[n][m] = v;
                    } else {
                        return;
                    }
                } else {
                    cache[n][m] = v;
                }

                if (n == N - 1) {
                    min = Math.min(min, v);
                } else {
                    go(m + 1, n + 1, v)
                    go(m - 1, n + 1, v);
                    go(m, n + 1, v);
                }
            }
        }

        for (var i = 0; i < M; i++) {
            go(i, 0, 0);
        }

        return min;
    },

    // 647. Palindromic Substrings    
    countSubstrings: function (s) {
        var verify = function (start, end) {
            for (var i = 0; i <= (end - start); i++) {
                if (s[start + i] != s[end - i]) {
                    return false;
                }
            }
            return true;
        }

        var count = 0;

        for (var i = 0; i < s.length; i++) {
            for (var j = i; j < s.length; j++) {
                if (verify(i, j)) {
                    count++;
                }
            }
        }

        return count;
    },

    // 238. Product of Array Except Self
    productExceptSelf: function (nums) {
        var n = nums.length;
        res = [];
        res[0] = 1;
        for (var i = 1; i < n; i++) {
            res[i] = res[i - 1] * nums[i - 1];
        }
        var right = 1;
        for (var i = n - 1; i >= 0; i--) {
            res[i] *= right;
            right *= nums[i];
        }
        return res;
    },

    // 938. Range Sum of BST
    rangeSumBST: function (root, L, R) {
        var sum = 0;
        var go = function (r) {
            if (r != null) {
                if (r.val >= L && r.val <= R) {
                    sum += r.val;
                }
                go(r.left);
                go(r.right);
            }
        }

        go(root);

        return sum;
    },

    // 1008. Construct Binary Search Tree from Preorder Traversal
    bstFromPreorder: function (preorder) {
        var add = function (root, value) {
            if (root.val == undefined) {
                root.val = value;
            }
            else {
                if (root.val > value) {
                    if (root.left != null) {
                        add(root.left, value);
                    } else {
                        root.left = new TreeNode(value);
                    }
                } else {
                    if (root.right != null) {
                        add(root.right, value);
                    } else {
                        root.right = new TreeNode(value);
                    }
                }
            }
        }


        var r = new TreeNode();

        preorder.forEach((e) => {
            add(r, e);
        });

        return r;
    },

    // 318. Maximum Product of Word Lengths
    maxProduct: function (words) {
        var t = [];

        for (var j = 0; j < words.length; j++) {
            for (var i = 0; i < words[j].length; i++) {
                var c = words[j].charAt(i);
                if (t[c] == undefined) {
                    t[c] = {};
                }
                t[c][j] = 1;
            }
        };

        var max = 0;

        for (var i = 0; i < words.length; i++) {
            for (var j = i + 1; j < words.length; j++) {
                var M = words[i].length;
                var N = words[j].length;
                var found = false;
                for (var k = 0; k < M; k++) {
                    var c = words[i].charAt(k);
                    if (t[c][j] != undefined) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    var m = M * N;
                    if (m > max) {
                        max = m;
                    }
                }
            }
        }

        return max;
    },

    // 537. Complex Number Multiplication
    complexNumberMultiply: function (a, b) {
        var ap = a.replace("i", "").split("+");
        var bp = b.replace("i", "").split("+");

        return (ap[0] * bp[0] - ap[1] * bp[1]) + "+" + (ap[1] * bp[0] + ap[0] * bp[1]) + "i";
    },

    // 973. K Closest Points to Origin
    kClosest: function (points, K) {
        var dist = [];
        for (var i = 0; i < points.length; i++) {
            dist[i] = [i, points[i][0] * points[i][0] + points[i][1] * points[i][1]];
        }

        dist.sort(function (a, b) { return a[1] - b[1] });

        var ret = [];
        for (var k = 0; k < K; k++) {
            ret.push(points[dist[k][0]]);
        }

        return ret;
    },
    // 912. Sort an Array
    sortArray: function (nums) {
        nums.sort(function (a, b) {
            return a - b
        });
        return nums;
    },

    // 885. Spiral Matrix III
    spiralMatrixIII: function (R, C, r0, c0) {
        var total = 0;
        var ret = [];

        var mat = [R];
        for (var i = 0; i < R; i++) {
            mat[i] = [C];
            for (var j = 0; j < C; j++) {
                mat[i][j] = 0;
            }
        }

        var go = function (r, c, dir) {

            if (total == R * C) {
                return;
            }

            if ((r >= 0 && c >= 0 && r < mat.length && c < mat[0].length)) {
                // console.log(r + ", " + c + ", " + dir + " O ");
                mat[r][c] = 1;
                ret[total] = [r, c];
                total++;
            } else {
                // console.log(r + ", " + c + ", " + dir + " X ");
            }

            var np = fetch(r, c, dir);

            if (np[0] >= 0 && np[1] >= 0 && np[0] < mat.length && np[1] < mat[0].length) {
                if (mat[np[0]][np[1]] == 1) {
                    var nnp = fetch(r, c, turn(dir, -1));
                    go(nnp[0], nnp[1], dir)
                } else {
                    go(np[0], np[1], turn(dir, 1))
                }
            } else {
                go(np[0], np[1], turn(dir, 1))
            }
        }

        var turn = function (d, c) {
            var ret = d + c;
            if (ret >= 0) {
                ret = ret % 4;
            } else {
                ret = 4 + ret;
            }

            return ret;
        }

        var fetch = function (r, c, dir) {
            var nr, nc;

            if (dir == 0) {
                nc = c + 1;
                nr = r;
            } else if (dir == 1) {
                nc = c;
                nr = r + 1;
            } else if (dir == 2) {
                nc = c - 1;
                nr = r;
            } else if (dir == 3) {
                nc = c;
                nr = r - 1;
            } else {

            }

            return [nr, nc];
        }

        go(r0, c0, 0);

        return ret;
    },

    // 1038. Binary Search Tree to Greater Sum Tree
    bstToGst: function (root) {
        var go = function (r, grt) {
            if (r != null) {
                //console.log("Enter [" + r.val +"] + ["+ grt + "]");
                var rv = go(r.right, grt);

                var ov = r.val;
                var nv = ov + rv + grt;
                //console.log("[" + r.val+ "] to ["+ nv + "]");
                r.val = nv;
                grt += rv;
                var lv = go(r.left, grt + ov);

                var ret = ov + rv + lv;
                //console.log("return [" + ret + "]");
                return ret;
            } else {
                return 0;
            }
        }
        go(root, 0);

        return root;
    },

    // 986. Interval List Intersections
    intervalIntersection: function (A, B) {
        var k = 0; j = 0;

        while (k < A.length || j < B.length) {
            if (k < A.length) {
                var vA = A[k];
            } else {
                var vA = -1;
            }

            if (j < B.length) {
                var vB = B[j];
            } else {
                var vB = -1;
            }


        }

        var steps = [];

        A.forEach(element => {
            steps.push(element[0]);
            steps.push(element[1]);
        });

        B.forEach(element => {
            steps.push(element[0]);
            steps.push(element[1]);
        });

        steps.sort(function (a, b) { return a - b });

        var intercept = function (x, arr) {
            for (var i = 0; i < arr.length; i++) {
                if (x == arr[i][0]) {
                    return 0;
                }

                if (x == arr[i][1]) {
                    arr.shift();
                    return 2;
                }

                if (x >= arr[i][0] && x <= arr[i][1]) {
                    return 1;
                }
            }
            return -1;
        };

        var cA = -1;
        var cB = -1;
        var index = 0;
        var ret = [];

        var last = -1;

        for (var i = 0; i < steps.length; i++) {
            if (steps[i] != last) {
                //console.log("Run: " + steps[i]);
                var nA = intercept(steps[i], A);
                var nB = intercept(steps[i], B);

                if ((nA == 0 && nB == 0) || (nA == 0 && nB > 0) || (nA > 0 && nB == 0)) {
                    //console.log("[" + i);
                    ret[index] = [];
                    ret[index][0] = steps[i];
                }

                if ((nA == 2 && nB != -1) || (nA != -1 && nB == 2)) {
                    ret[index][1] = steps[i];
                    index++;
                    //console.log(i + "]");
                }
            }
            last = steps[i];
        }

        return ret;
    },

    // 1079. Letter Tile Possibilities
    numTilePossibilities: function (tiles) {
        var ret = {};
        var count = 0;

        var go = function (arr, cur) {
            if (arr.length > 0) {
                for (var i = 0; i < arr.length; i++) {
                    const cloneArr = [...arr];
                    var c = (cur + arr[i]);
                    if (ret[c] == undefined) {
                        ret[c] = 1;
                        count++;
                        //console.log(c);
                    }
                    cloneArr.splice(i, 1)
                    go(cloneArr, c);
                }
            }
        }

        go(tiles, "");

        return count;
    },

    // 1282. Group the People Given the Group Size They Belong To
    groupThePeople: function (groupSizes) {
        var groups = [];
        var ret = [];

        for (var i = 0; i < groupSizes.length; i++) {
            if (groupSizes[i] == 1) {
                ret.push([i]);
            } else {
                var found = false;
                for (var j = 0; j < groups.length; j++) {
                    if (groups[j].expect == groupSizes[i]) {
                        groups[j].IDs.push(i);
                        if (groups[j].IDs.length == groups[j].expect) {
                            ret.push(groups[j].IDs);
                            groups.splice(j, 1);
                        }
                        found = true;
                        break;
                    }
                }

                if (!found) {
                    groups.push({ expect: groupSizes[i], IDs: [i] });
                }
            }
        }

        return ret;
    },

    // 1302. Deepest Leaves Sum
    deepestLeavesSum: function (root) {
        var sum = {};
        var max = 0;

        var go = function (r, depth) {
            if (r == null) {
                return;
            }

            if (depth >= max) {
                max = depth;

                if (r.left == null && r.right == null) {
                    if (sum[depth] == undefined) {
                        sum[depth] = r.val;
                    } else {
                        sum[depth] += r.val;
                    }
                }
            }

            go(r.left, depth + 1);
            go(r.right, depth + 1);
        }

        go(root, 0);

        return sum[max];
    },

    // 12. Integer to Roman
    intToRoman: function (num) {
        var result = "";

        var numSet = ["I", "V", "X", "L", "C", "D", "M", "?", "?"];

        var d = num;
        var j = 0;

        while (d > 0) {

            var d1 = d % 10;
            var digit = "";
            var one = numSet[j];
            var five = numSet[j + 1];
            var ten = numSet[j + 2];

            if (d1 == 4) {
                digit = one + five;
            } else if (d1 == 5) {
                digit = five;
            } else if (d1 == 9) {
                digit = one + ten;
            } else {
                if (d1 < 5) {
                    for (var i = 0; i < d1; i++) {
                        digit += one;
                    }
                } else {
                    digit = five;
                    for (var i = 0; i < d1 - 5; i++) {
                        digit += one;
                    }
                }
            }

            d = ~~(d / 10);
            j += 2;
            result = digit + result;
        }

        return result;
    },

    // 39. Combination Sum
    combinationSum: function (candidates, target) {
        var ret = [];
        var c = 0;

        function TakeNext(sum, set) {
            for (var i = 0; i < candidates.length; i++) {                
                set.push(candidates[i]);
                var newSum = sum + candidates[i]; 
                if (newSum == target) {
                    var newSet = set.slice(0);
                    newSet.sort();
                    if (!Contains(newSet)) {
                        ret[c] = newSet;
                        c++;
                    }
                } else if (newSum < target) {
                    TakeNext(newSum, set);
                }
                set.pop();
            }
        }

        function Contains(b) {
            for (var j = 0; j < ret.length; j++) {
                if (ret[j].length == b.length) {
                    var result = true;
                    for (var i = 0; i < ret[j].length; i++) {
                        if (ret[j][i] != b[i]) {
                            result = false;
                            break;
                        }
                    }
                    if (result) {
                        return true;
                    }
                }
            }

            return false;
        }

        TakeNext(0, []);

        return ret;
    }
}