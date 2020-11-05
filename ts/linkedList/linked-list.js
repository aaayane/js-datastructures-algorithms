export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.equalsFn = equalsFn;
        this.count = 0;
    }
    append(element) {
        const node = new Node(element);
        let current;
        if (this.head === null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }
}
class Node {
    constructor(element, next) {
        this.element = element;
        this.next = next;
    }
}
function defaultEquals(a, b) {
    return a === b;
}
let list = new LinkedList();
console.log('new list');
list.append(15);
console.log('15append');
list.append(10);
