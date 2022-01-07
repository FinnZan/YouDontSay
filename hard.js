ListNode = function (val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
};

BuildList = function (array) {

    var head = new ListNode(array[0]);
    var cur = head;

    for (var i = 1; i < array.length; i++) {
        cur.next = new ListNode(array[i]);
        cur = cur.next;
    }

    return head;
};

Hard = {
    // 25. Reverse Nodes in k-Group
    reverseKGroup: function (head, k) {
        if (head.next == undefined || k == 1) {
            return head;
        }

        var cur = head;
        var i = 0;
        var stack = [];
        var newHead = undefined;
        var segEnd = undefined;

        while (cur != null) {
            stack.push(cur);
            var next = cur.next;

            if ((i + 1) % k == 0) {
                var segHead = stack.pop();
                var sub = segHead;

                if (newHead == undefined) {
                    newHead = segHead;
                }

                if (segEnd != undefined) {
                    segEnd.next = segHead;
                }

                while (stack.length > 0) {
                    sub.next = stack.pop();
                    sub.next.next = null;
                    sub = sub.next;
                }

                segEnd = sub;
            }

            if (i > 0 && i % k == 0) {
                segEnd.next = cur;
            }

            cur = next;
            i++;
        }

        return newHead;
    }
};