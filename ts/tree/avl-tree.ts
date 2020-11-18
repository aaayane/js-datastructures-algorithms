import { Node } from './../models/node';
import { Compare, defaultCompare, ICompareFunction } from '../util';
import BinarySearchTree from './binary-search-tree';

enum BalanceFactor {
    UNBALANCED_RIGHT = 1,
    SLIGHTLY_UNBALANCED_RIGHT = 2,
    BALANCED = 3,
    SLIGHTLY_UNBALANCED_LEFT = 4,
    UNBALANCED_LEFT = 5
}
// 自平衡二叉树
export default class AVLTree<T> extends BinarySearchTree<T>  {
    constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {
        super(compareFn);
    }
    private getNodeHeight(node: Node<T>): number {
        if (node === null) {
            return -1
        }
        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    }
    /**
      * 右-右 :向左的单旋转
      *
      *     a                              b
      *    / \                            / \
      *   c   b   -> rotationRR(a) ->    a   e
      *      / \                        / \
      *     d   e                      c   d
      *
      * @param node Node<T>
      */
    private rotationRR(node: Node<T>) {
        let tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
    }
    /**
 * 左向左大小写：向右旋转
 *
 *       b                           a
 *      / \                         / \
 *     a   e -> rotationLL(b) ->   c   b
 *    / \                             / \
 *   c   d                           d   e
 *
 * @param node Node<T>
 */
    private rotationLL(node: Node<T>) {
        let tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
    }

    /**
     * 左-右 LR 向右的双旋转
     * 先对左子数左旋 在对自己右旋
     * @param node Node<T>
     */
    private rotationLR(node: Node<T>) {
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    }

    /**
     * 右-左 向左的双旋转
     * 先对右子数右旋 在对自己左旋
     * @param node Node<T>
     */
    private rotationRL(node: Node<T>) {
        node.right = this.rotationLL(node.right);
        return this.rotationRR(node);
    }

    insert(key: T) {
        this.root = this.insertNode(this.root, key)
    }
    protected insertNode(node: Node<T>, key: T) {
        if (node === null) {
            return new Node(key)
        } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.insertNode(node.left, key)
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.insertNode(node.right, key)
        } else {
            // 已有当前key
            return node
        }
        //验证树是否平衡
        const balanceState = this.getBalanceFactor(node);
        if (balanceState === BalanceFactor.UNBALANCED_LEFT) {
            // 左子树高度高 左不平衡
            if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
                // Left left case
                node = this.rotationLL(node);
            } else {
                // Left right case
                return this.rotationLR(node);
            }
        }
        if (balanceState === BalanceFactor.UNBALANCED_RIGHT) {
            // 右子树高度高 右不平衡
            if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
                // Right right case
                node = this.rotationRR(node);
            } else {
                // Right left case
                return this.rotationRL(node);
            }
        }
        return node;
    }
    /**
    * 获取平衡因子
    * @param node  Nodee<T>
    */
    private getBalanceFactor(node: Node<T>) {
        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
        switch (heightDifference) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return BalanceFactor.UNBALANCED_LEFT;
            default:
                return BalanceFactor.BALANCED;
        }
    }
    protected removeNode(node: Node<T>, key: T) {
        if (node === null) {
            return null
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            // 节点是要删除的节点
            if (node.left == null && node.right == null) {
                // node是一个叶节点 没有子元素
                node = null;
            } else if (node.left == null && node.right != null) {
                // 只有右节点
                node = node.right;
            } else if (node.left != null && node.right == null) {
                // 只有左节点
                node = node.left;
            } else {
                // 节点有2个子节点，获取右子树的最小值 放在当前节点处
                const inOrderSuccessor = this.minNode(node.right);
                node.key = inOrderSuccessor.key;
                node.right = this.removeNode(node.right, inOrderSuccessor.key);
            }
        }
        if (node == null) {
            // 自平衡二叉树删除一个叶节点还是平衡的
            return node;
        }
        //验证树是否平衡
        const balanceState = this.getBalanceFactor(node);

        if (balanceState === BalanceFactor.UNBALANCED_LEFT) {
            // 左不平衡
            // Left left case
            if (
                this.getBalanceFactor(node.left) === BalanceFactor.BALANCED ||
                this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
            ) {
                return this.rotationLL(node);
            }
            // Left right case
            if (this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                // 右子树不平衡
                return this.rotationLR(node.left);
            }
        }
        if (balanceState === BalanceFactor.UNBALANCED_RIGHT) {
            // 右不平衡
            // Right right case
            if (
                this.getBalanceFactor(node.right) === BalanceFactor.BALANCED ||
                this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
            ) {
                return this.rotationRR(node);
            }
            // Right left case
            if (this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                // 左子树不平衡
                return this.rotationRL(node.right);
            }
        }

        return node;
    }

}