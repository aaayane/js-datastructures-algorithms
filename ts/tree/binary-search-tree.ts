import { Node } from './../models/node';
import { Compare, defaultCompare, ICompareFunction } from '../util';

export default class BinarySearchTree<T> {
    protected root: Node<T>
    constructor(protected compareFn: ICompareFunction<T> = defaultCompare) { }

    protected insertNode(node: Node<T>, key: T) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key);
            }
        } else if (node.right == null) {
            node.right = new Node(key);
        } else {
            this.insertNode(node.right, key);
        }
    }

    insert(key: T) {
        // 向树中插入一个新的键
        if (this.root === null) {
            this.root = new Node(key)

        } else {
            this.insertNode(this.root, key)
        }
    }

    getRoot() {
        return this.root;
    }

    search(key: T) {
        this.searchNode(this.root, key)
    }
    private searchNode(node: Node<T>, key: T) {
        if (node === null) {
            return false
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key)
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key)
        } else {
            return true
        }
    }
    // 中序遍历
    inOederTraverse(callback: Function) {
        this.inOederTraverseNode(this.root, callback)
    }
    private inOederTraverseNode(node: Node<T>, callback: Function) {
        if (node !== null) {
            this.inOederTraverseNode(node.left, callback)
            callback(node.key)
            this.inOederTraverseNode(node.right, callback)
        }
    }
    // 先序遍历
    preOrderTraverse(callback: Function) {
        this.preOrderTraverseNode(this.root, callback);
    }

    private preOrderTraverseNode(node: Node<T>, callback: Function) {
        if (node != null) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }
    // 后续遍历
    postOrderTraverse(callback: Function) {
        this.postOrderTraverseNode(this.root, callback);
    }

    private postOrderTraverseNode(node: Node<T>, callback: Function) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    min() {
        return this.minNode(this.root);
    }

    protected minNode(node: Node<T>) {
        if (node === null) return node
        let current = node;
        while (current.left) {
            current = current.left
        }
        return current
    }
    max() {
        return this.maxNode(this.root);
    }

    protected maxNode(node: Node<T>) {
        if (node === null) return node
        let current = node;
        while (current.right) {
            current = current.right
        }
        return current
    }
    remove(key: T) {
        this.root = this.removeNode(this.root, key);
    }

    protected removeNode(node: Node<T>, key: T) {
        if (node === null) return node
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key)
            return node
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            // key 等于 node.key
            // 有3种情况
            // 1 node是一个叶节点 没有子元素
            // 2 node 只有一个子节点
            // 3 node 有两个子节点
            // case 1
            if (node.left === null && node.right === null) {
                node = null
                return node
            }


            // case 2
            if (node.left == null) {
                node = node.right;
                return node;
            } else if (node.right == null) {
                node = node.left;
                return node;
            }
            // case 3
            const aux = this.minNode(node.right)
            node.key = aux.key
            node.right = this.removeNode(node.right, aux.key)
            return node
        }

    }

}