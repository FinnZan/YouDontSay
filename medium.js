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
    },

    // 59. Spiral Matrix II
    generateMatrix: function (n) {
        var ret = [];

        for (var i = 0; i < n; i++) {
            ret[i] = [];
        }

        var count = 1;

        function Go(x, y, dir) {
            ret[y][x] = count;

            if (count == n * n) {
                return;
            }

            if (dir == 0) {
                if (x + 1 >= n || ret[y][x + 1] != undefined) {
                    Go(x, y, 1)
                } else {
                    count++;
                    Go(x + 1, y, 0);

                }
            }

            if (dir == 1) {
                if (y + 1 >= n || ret[y + 1][x] != undefined) {
                    Go(x, y, 2)
                } else {
                    count++;
                    Go(x, y + 1, 1);
                }
            }

            if (dir == 2) {
                if (x - 1 < 0 || ret[y][x - 1] != undefined) {
                    Go(x, y, 3)
                } else {
                    count++;
                    Go(x - 1, y, 2);
                }
            }

            if (dir == 3) {
                if (y - 1 < 0 || ret[y - 1][x] != undefined) {
                    Go(x, y, 0)
                } else {
                    count++;
                    Go(x, y - 1, 3);
                }
            }

        }

        Go(0, 0, 0);

        return ret;
    },

    // 3. Longest Substring Without Repeating Characters
    lengthOfLongestSubstring: function (s) {
        var max = 0;
        var table = {};
        var cut = 0;

        for (var i = 0; i < s.length && (s.length - cut) > max; i++) {
            var found = table[s[i]];
            if (found == undefined || found < cut) {
                var len = (i - cut) + 1;
                if (len > max) {
                    max = len;
                }
            } else {
                cut = found + 1;
            }
            table[s[i]] = i;
        }

        return max;
    },

    // 200. Number of Islands
    numIslands: function (grid) {
        num = 2;

        var Expand = function (x, y, c) {
            if (y >= 0 && y < grid.length && x >= 0 && x < grid[0].length
                && grid[y][x] == 1) {
                grid[y][x] = c;
                Expand(x - 1, y, c);
                Expand(x + 1, y, c)
                Expand(x, y - 1, c)
                Expand(x, y + 1, c)
            }
        }

        for (var y = 0; y < grid.length; y++)
            for (var x = 0; x < grid[0].length; x++) {
                if (grid[y][x] == 1) {
                    Expand(x, y, num);
                    num++;
                }
            }

        return num - 2;
    },

    // 841. Keys and Rooms
    canVisitAllRooms: function (rooms) {
        var visited = [];
        var count = 0;

        var Visit = function (r) {
            visited[r] = true;
            count++;

            for (var i = 0; i < rooms[r].length; i++) {
                if (visited[rooms[r][i]] == undefined) {
                    Visit(rooms[r][i]);
                }
            }
        }

        Visit(0);

        return count == rooms.length;
    },

    // 264. Ugly Number II
    nthUglyNumber: function (n) {
        if (n == 1)
            return 1;

        var a = [];

        a.push(1);

        var i = 0, j = 0, k = 0, m;

        for (var l = 1; l < n; l++) {
            m = Math.min(2 * a[i], Math.min(3 * a[j], 5 * a[k]));
            a.push(m);

            if (m == 2 * a[i])
                i++;
            if (m == 3 * a[j])
                j++;
            if (m == 5 * a[k])
                k++;
        }

        return a[n - 1];
    },

    // 71. Simplify Path
    simplifyPath: function (path) {
        var toks = path.split("/").filter(function (x) {
            return x.length > 0;
        });

        var folders = [];

        for (var i = 0; i < toks.length; i++) {
            if (toks[i] == "..") {
                folders.pop();
            } else if (toks[i] == ".") {
            }
            else {
                folders.push(toks[i]);
            }
        }

        var result = "/";

        for (var i = 0; i < folders.length; i++) {
            result += (folders[i] + "/");
        }

        if (result.length > 1) {
            return result.slice(0, -1);
        }

        return result;
    },

    // 310. Minimum Height Trees
    findMinHeightTrees: function (n, edges) {
        var depth = 1;
        var result = [];

        var NextNode = function (r, pEdges, d) {

            depth = Math.max(depth, d);

            for (var i = 0; i < pEdges.length; i++) {

                if (pEdges[i][0] == r) {
                    var edges2 = pEdges.slice(0);
                    edges2.splice(i, 1);
                    NextNode(pEdges[i][1], edges2, d + 1);
                }

                if (pEdges[i][1] == r) {
                    var edges2 = pEdges.slice(0);
                    edges2.splice(i, 1);
                    NextNode(pEdges[i][0], edges2, d + 1);
                }
            }
        }

        var min = undefined;
        var ret = [];

        for (var i = 0; i < n; i++) {
            depth = 1;
            NextNode(i, edges, 1);

            result[i] = depth;

            if (min == undefined || depth < min) {
                ret = [];
                ret.push(i);
                min = depth;
            } else if (depth == min) {
                ret.push(i);
            }
        }

        return ret;
    },

    // 767. Reorganize String
    reorganizeString: function (s) {


    },

    // 29. Divide Two Integers
    divide: function (dividend, divisor) {
        var s = Math.abs(divisor);
        var d = Math.abs(dividend);

        var q = 0;
        while (d >= s) {
            d = d - s;
            q++;
        }

        if (dividend * divisor > 0) {
            return q;
        } else {
            return -q;
        }
    },

    // 91. Decode Ways
    numDecodings: function (s) {
        var map = {};

        var NextCode = function (index) {

            if (map[index] != undefined) {
                return map[index];
            }

            var ret = 0;

            if (index >= s.length) {
                ret = 1
            }
            else if (s[index] == '0') {
                ret = 0
            }
            else if (index == s.length - 1) {
                ret = 1
            }
            else {
                var num = s[index] + s[index + 1];

                if (num > 26) {
                    ret = NextCode(index + 1);
                }
                else {
                    ret = NextCode(index + 1) + NextCode(index + 2);
                }
            }

            map[index] = ret;
            return ret;
        };

        return NextCode(0);
    },

    // 33. Search in Rotated Sorted Array
    search: function (nums, target) {
        var ret = -1;

        var Split = function (start, end) {

            if (nums[start] == target) {
                ret = start;
                return;
            }

            if (nums[end] == target) {
                ret = end;
                return;
            }

            if (end - start > 1 &&
                (nums[end] < nums[start] || (nums[start] < target && nums[end] > target))) {

                var mid = (((end + start) / 2) + 0.5) << 0;

                Split(start + 1, mid);

                Split(mid + 1, end - 1);
            }

            return;
        }

        Split(0, nums.length - 1);

        return ret;
    },

    // 1376. Time Needed to Inform All Employees
    numOfMinutes: function (n, headID, manager, informTime) {
        var map = {};

        var FindHead = function (e) {
            if (map[e] != undefined) {
                return map[e];
            }

            if (manager[e] == -1) {
                return 0;
            } else {
                var ret = informTime[manager[e]] + FindHead(manager[e]);
                map[e] = ret;
                return ret;
            }
        }

        var max = 0;

        for (var i = 0; i < n; i++) {
            var t = FindHead(i);
            if (t > max) {
                max = t;
            }
        }

        return max;
    },

    // 6. Zigzag Conversion
    convert: function (s, numRows) {
        if (numRows == 1) {
            return s;
        }

        var ret = "";

        for (var shift = 0; shift < numRows; shift++) {
            var index = shift;
            while (index < s.length) {
                ret += s[index];
                if (shift != 0 && shift != numRows - 1) {
                    var m = index + (numRows - shift - 1) * 2;
                    if (m < s.length) {
                        ret += s[m];
                    }
                }
                index += (numRows - 1 + (numRows - 1));
            }
        }

        return ret;
    },


    // 98. Validate Binary Search Tree
    isValidBST: function (root) {
        var dfs = function (root, min, max) {
            if (root == null) return true;

            if (!(root.val > min && root.val < max)) {
                return false;
            } else {
                return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
            }
        }

        return dfs(root, -9007199254740991, 9007199254740991);
    },

    // 11. Container With Most Water
    maxArea: function (height) {
        var max = 0;
        for (var i = 0; i < height.length; i++) {
            var atLeast = Math.floor(max / height[i]);

            for (var j = i + atLeast + 1; j < height.length; j++) {
                var a = Math.min(height[i], height[j]) * (j - i);
                if (a > max) {
                    max = a;
                }
            }
        }

        return max;
    },

    // 809. Expressive Words
    expressiveWords: function (s, words) {

        var Compress = function (ss) {
            if (ss.length <= 0) {
                return null;
            }
            var p = [];
            var c = 0;
            p[c] = { char: ss[0], count: 1 };

            for (let i = 1; i < ss.length; i++) {
                if (ss[i] == ss[i - 1]) {
                    p[c].count++;
                } else {
                    c++;
                    p[c] = { char: ss[i], count: 1 };
                }
            }

            return p;
        }

        var sc = Compress(s);

        var ret = 0;

        for (var j = 0; j < words.length; j++) {
            var cc = Compress(words[j]);

            if (cc.length == sc.length) {

                var match = true;

                for (let k = 0; k < cc.length; k++) {
                    if (cc[k].char != sc[k].char || cc[k].count > sc[k].count || (cc[k].count != sc[k].count && sc[k].count < 3)) {
                        match = false;
                        break;
                    }
                }

                if (match) {
                    ret++;
                }
            }
        }

        return ret;
    },

    // 554. Brick Wall
    leastBricks: function (wall) {
        var gaps = [];
        var max = 0;

        for (let i = 0; i < wall.length; i++) {
            const w = wall[i];
            let l = 0;

            for (let j = 0; j < w.length - 1; j++) {
                l += w[j];
                if (gaps[l] == undefined) {
                    gaps[l] = 0;
                }
                gaps[l]++;
                if (gaps[l] > max) {
                    max = gaps[l];
                }
            }
        }

        return wall.length - max;
    },

    // 213. House Robber II
    rob: function (nums) {
        var n = nums.length;
        var dp = [];
        for (let i = 0; i < n + 1; i++) {
            dp[i] = [0, 0];
        }
        dp[1][0] = nums[0];
        for (var i = 2; i <= n; i++) {
            for (var j = 0; j <= 1; j++) {
                if (i == n && j == 0) {
                    // we are not robbing the last house. 
                    // We are interested in the profit so far, so update the current state with the previous state value.
                    dp[i][j] = dp[i - 1][j];
                } else {
                    dp[i][j] = Math.max(nums[i - 1] + dp[i - 2][j], dp[i - 1][j]);
                }
            }
        }
        return Math.max(dp[n][0], dp[n][1]); // Max profit by robbing or not robbing the last house.
    },
    // 934. Shortest Bridge
    shortestBridge: function (grid) {
        var M = grid[0].length;
        var N = grid.length;

        var dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];

        var visited = [];
        for (var i = 0; i < N; i++) {
            visited[i] = [];
        }

        var Explore = (p) => {
            visited[p[1]][p[0]] = 1;
            for (let d of dirs) {
                var np = [p[0] + d[0], p[1] + d[1]];
                if (np[0] >= 0 && np[0] < M && np[1] >= 0 && np[1] < N) {
                    if (grid[np[1]][np[0]] === 1 && visited[np[1]][np[0]] != 1) {
                        Explore(np);
                    }
                }
            }
        };

        var min = 99999999999999999;

        var Sail = (p, dist) => {
            if (dist > min) {
                return;
            }

            for (let d of dirs) {
                var np = [p[0] + d[0], p[1] + d[1]];
                if (np[0] >= 0 && np[0] < M && np[1] >= 0 && np[1] < N) {

                    if (visited[np[1]][np[0]] == 1) {

                    } else if (grid[np[1]][np[0]] == 0) {
                        if (visited[np[1]][np[0]] == undefined || visited[np[1]][np[0]] > (1 + dist + 1)) {
                            visited[np[1]][np[0]] = 1 + dist + 1;
                            Sail(np, dist + 1);
                        }
                    } else {
                        if (dist < min) {
                            min = dist;
                        }
                    }
                }
            }
        }

        let MarkFirstIsland = () => {
            for (var x = 0; x < M; x++)
                for (var y = 0; y < N; y++) {
                    if (grid[y][x] == 1) {
                        Explore([x, y]);
                        return;
                    }
                }
        };

        MarkFirstIsland();       

        for (var i = 0; i < M; i++)
            for (var j = 0; j < N; j++) {
                if (visited[j][i] == 1) {
                    Sail([i, j], 0);
                }
            }
        return min;
    }
}