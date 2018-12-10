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

    // TODO
    // 547. Friend Circles
    findCircleNum: function (M) {
        var rows = M.length;
        var cols = M[0].length;
        var ret = 0;

        var clearFriends = function (M, x, y) {
            for (var j = 0; j < cols; j++) {
                if (x != j && M[x][j] == 1) {
                    M[x, j] = 0;
                    clearFriends(M, j);
                }
            }
        }

        for (var i = 0; i < rows; i++) {            
            for (var j = 0; j < cols; j++) {
                if (i != j) {
                    clearFriends(M, i, j);
                }
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
    }
}