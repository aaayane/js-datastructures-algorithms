import { Node } from './../models/node';
import { Compare, defaultCompare } from '../util';
// 搜索二叉树
export default class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
    }
    insert(key) {
        // 向树中插入一个新的键
        if (this.root === undefined) {
            this.root = new Node(key);
        }
        else {
            this.insertNode(this.root, key);
        }
    }
    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left == undefined) {
                node.left = new Node(key);
            }
            else {
                this.insertNode(node.left, key);
            }
        }
        else if (node.right == undefined) {
            node.right = new Node(key);
        }
        else {
            this.insertNode(node.right, key);
        }
    }
    getRoot() {
        return this.root;
    }
    search(key) {
        this.searchNode(this.root, key);
    }
    searchNode(node, key) {
        if (node === undefined) {
            return false;
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key);
        }
        else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key);
        }
        else {
            return true;
        }
    }
    // 中序遍历
    inOederTraverse(callback) {
        this.inOederTraverseNode(this.root, callback);
    }
    inOederTraverseNode(node, callback) {
        if (node !== undefined) {
            this.inOederTraverseNode(node.left, callback);
            callback(node.key);
            this.inOederTraverseNode(node.right, callback);
        }
    }
    // 先序遍历
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }
    preOrderTraverseNode(node, callback) {
        if (node != undefined) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }
    // 后续遍历
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }
    postOrderTraverseNode(node, callback) {
        if (node != undefined) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }
    min() {
        return this.minNode(this.root);
    }
    minNode(node) {
        if (node === undefined)
            return node;
        let current = node;
        while (current.left) {
            current = current.left;
        }
        return current;
    }
    max() {
        return this.maxNode(this.root);
    }
    maxNode(node) {
        if (node === undefined)
            return node;
        let current = node;
        while (current.right) {
            current = current.right;
        }
        return current;
    }
    remove(key) {
        this.root = this.removeNode(this.root, key);
    }
    removeNode(node, key) {
        if (node === undefined)
            return node;
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        else {
            // key 等于 node.key
            // 有3种情况
            // 1 node是一个叶节点 没有子元素
            // 2 node 只有一个子节点
            // 3 node 有两个子节点
            // case 1
            if (node.left === undefined && node.right === undefined) {
                node = undefined;
                return node;
            }
            // case 2
            if (node.left == undefined) {
                node = node.right;
                return node;
            }
            else if (node.right == undefined) {
                node = node.left;
                return node;
            }
            // case 3
            const aux = this.minNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    }
}
