import { defaultEquals } from './../util';
import { Node } from './../models/linked-list-models';
export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.equalsFn = equalsFn;
        this.count = 0;
    }
    // 向链表结尾添加一个元素
    push(element) {
        const node = new Node(element);
        let current = this.head;
        if (current === undefined) {
            current = node;
        }
        else {
            while (current) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }
    // 找到对应下标的元素
    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            return current;
        }
        return undefined;
    }
    // 插入元素在传入的下标处
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) {
                let current = this.head;
                node.next = current;
                this.head = node;
            }
            else {
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    // 删除对应下标的元素
    removeAt(index) {
        if (index >= 0 && index <= this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next;
            }
            else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
    // 找到一个传入元素的下标
    indexOf(element) {
        let current = this.head;
        for (let index = 0; index < this.count; index++) {
            if (this.equalsFn(element, current.element)) {
                return index;
            }
            current = current.next;
        }
        return -1;
    }
    // 找到并删除一个传入的元素
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }
    size() {
        return this.count;
    }
    // 判断链表是否为空
    isEmpty() {
        return this.size() === 0;
    }
    // 返回head
    getHead() {
        return this.head;
    }
    // 清除链表
    clear() {
        this.head = undefined;
        this.count = 0;
    }
    toString() {
        if (this.head == null) {
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }
}
