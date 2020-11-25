import { RedBlackNode, Colors } from './../models/red-black-node';
import { defaultCompare, ICompareFunction, Compare } from '../util';
import BinarySearchTree from './binary-search-tree';

export default class RedBlackTree<T> extends BinarySearchTree<T> {
    protected root: RedBlackNode<T>;
    constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {
        super(compareFn)
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
    private rotationLL() {

    }
}
findRepeatNumber([2, 3, 1, 0, 2, 5, 3])
function findRepeatNumber(nums: number[]): number {
    let obj = {

    }
    for (let value of nums) {
        if (obj[value] !== undefined) {
            return value
        }
        obj[value] = value
    }
    return -1
};