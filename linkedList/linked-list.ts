export default class LinkedList<T>  {
    protected count = 0;
    protected head: Node<T> | undefined;
    constructor(protected equalsFn: IEqualsFunction<T> = defaultEquals) { }
    append(element: T) {
        const node = new Node(element);
        let current;
        if (this.head === null) {
            this.head = node
        } else {
            current = this.head;
            while (current.next !== null) {
                current = current.next
            }
            current.next = node
        }
        this.count++;
    }
}
class Node<T> {
    constructor(public element: T, public next?: Node<T>) { }
}
type IEqualsFunction<T> = (a: T, b: T) => boolean;
function defaultEquals<T>(a: T, b: T): boolean {
    return a === b;
}

let list = new LinkedList();
console.log('new list');

list.append(15);
console.log('15append');

list.append(10)