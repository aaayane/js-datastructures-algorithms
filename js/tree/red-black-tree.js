import { defaultCompare } from '../util';
import BinarySearchTree from './binary-search-tree';
export default class RedBlackTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
    }
    /**
 * Left left case: rotate right
 *
 *       b                           a
 *      / \                         / \
 *     a   e -> rotationLL(b) ->   c   b
 *    / \                             / \
 *   c   d                           d   e
 *
 * @param node Node<T>
 */
    rotationLL() {
    }
}
findRepeatNumber([2, 3, 1, 0, 2, 5, 3]);
function findRepeatNumber(nums) {
    let obj = {};
    for (let value of nums) {
        if (obj[value] !== undefined) {
            return value;
        }
        obj[value] = value;
    }
    return -1;
}
;
