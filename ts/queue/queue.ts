export default class Queue<T> {

    private items: any[];
    constructor() {
        this.items = []
    }
    enqueue(element: any) {
        this.items.push(element)
    }

    dequeue() {
        return this.items.shift()
    }

    peek() {
        return this.items[0]
    }

    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = []
    }
    print() {
        console.log(this.items.toString());
    }

}
const queue = new Queue();
console.log(queue.isEmpty()); // outputs true
queue.enqueue('John');
queue.enqueue('Jack');

queue.print()// John,Jack
queue.enqueue('Camila');
queue.print()// John,Jack,Camila
console.log(queue.size()); // outputs 3
console.log(queue.isEmpty()); // outputs false
queue.dequeue(); // remove John
queue.dequeue(); // remove Jack
queue.print()// Camilas