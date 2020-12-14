
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

}
let list = new ListNode(1, new ListNode(2, new ListNode(3)))
let list1 = new ListNode(1, new ListNode(3, new ListNode(5)))

let a = mergeTwoLists(list, list1)
console.log(a);
console.log(a.val);
console.log(a.next.val);
console.log(a.next.next.val);
console.log(a.next.next.next.val);
console.log(a.next.next.next.next.val);
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let l1Temp = l1,
        l2Temp = l2,
        newList = new ListNode(),
        newTemp: ListNode | null = newList;
    while (l1Temp !== null && l2Temp !== null) {
        if (l1Temp.val <= l2Temp.val) {
            
            newTemp.val = l1Temp.val
            l1Temp = l1Temp.next

        } else {
            newTemp.val = l2Temp.val
            l2Temp = l2Temp.next
        }
        let node = new ListNode(l1Temp.val)
        newTemp.next = new ListNode()
        newTemp = newTemp.next
    }
    let temp;
    if (l1Temp !== null) {
        temp = l1Temp
    } else {
        temp = l2Temp
    }
    return newList
};


// // 递归（未优化，详尽注释）

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @name 构造函数-构造链表
//  * @param {*} val 初始化的值，可以不传，默认为 0
//  * @param {*} next 初始化的下一个链表，可以不传，默认为 null
//  */
// const ListNode = function(val, next) {
//   this.val = val || 0;
//   this.next = next || null;
// }

// /**
//  * @name 解题函数
//  * @param {ListNode} l1 第一个链表
//  * @param {ListNode} l2 第二个链表
//  * @return {ListNode} 返回的新链表
//  */
// const mergeTwoLists = (l1, l2) => {
//   // 1. 初始化一个链表
//   const newListNode = new ListNode();

//   // 3. 开始递归
//   const recursion = (tempListNode, l1, l2) => {
//     // 3.1 如果左链表和右链表都空了，那就结束本次递归
//     if (!l1 && !l2) {
//       return;
//     }

//     // 3.2 如果左链表或者右链表空了，那么当前的 result 追加有的那个，也结束本次递归
//     if (!l1 || !l2) {
//       tempListNode.next = l1 || l2;
//       return;
//     }

//     // 3.3 重点：初始化一个新链表，用来获取下一个新节点
//     // 这里配合点 4 来看比较容易懂
//     tempListNode.next = new ListNode();
//     tempListNode = tempListNode.next;

//     // 3.4 排序，同时将采纳了的链表往后挪一位
//     if (l1.val >= l2.val) {
//       tempListNode.val = l2.val;
//       l2 = l2.next;
//     } else {
//       tempListNode.val = l1.val;
//       l1 = l1.next;
//     }

//     // 3.4 继续下一次递归
//     recursion(tempListNode, l1, l2);
//   };
//   // 2. 传入这个链表，和 l1、l2
//   recursion(newListNode, l1, l2);

//   // 4. 重点：我们初始化的时候，有一个没用的链表，记得往后挪一位
//   return newListNode.next;
// };

// const l1 = {
//   val: 1,
//   next: {
//     val: 2,
//     next: { val: 4, next: null },
//   },
// };

// const l2 = {
//   val: 1,
//   next: {
//     val: 3,
//     next: { val: 4, next: null },
//   },
// };

// console.log(mergeTwoLists(l1, l2));
// 递归（优化）
// 下面这种解法一般不容易搞出来，如果对递归不熟，那还是看前面那种解法吧。


// const mergeTwoLists = (l1, l2) => {
//   if (!l1) {
//     return l2;
//   } else if (!l2) {
//     return l1;
//   } else if (l1.val < l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
//   } else {
//     l2.next = mergeTwoLists(l2.next, l1);
//     return l2;
//   }
// };
// 迭代
// 如果递归的第一种解法通了，那么迭代的方法也是可以相通的：


// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// const mergeTwoLists = (l1, l2) => {
//   const newList = {
//     val: -1,
//     next: null,
//   };
//   let tempList = newList;

//   while (l1 && l2) {
//     if (l1.val <= l2.val) {
//       tempList.next = l1;
//       l1 = l1.next;
//     } else if (l1.val > l2.val) {
//       tempList.next = l2;
//       l2 = l2.next;
//     }
//     tempList.next.next = null;
//     tempList = tempList.next;
//   }

