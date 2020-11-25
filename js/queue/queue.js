export default class Queue {
    constructor() {
        this.items = [];
    }
    /**
     * 向队列尾部添加一个（或多个）新的项
     * @param element
     */
    enqueue(element) {
        this.items.push(element);
    }
    /**
     * 移除队列中的第一（即排在队列最前面的）项，并返回删除的元素
     */
    dequeue() {
        return this.items.shift();
    }
    /**
     * 返回队列中的第一个元素---最先被添加，也将是最先被移除的元素。队列不做任何变动
     * 不移除元素，只返回元素信息 与Stack类的peek方法非常类似
     */
    peek() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
    print() {
        console.log(this.items.toString());
    }
}
const queue = new Queue();
console.log(queue.isEmpty()); // outputs true
queue.enqueue('John');
queue.enqueue('Jack');
queue.print(); // John,Jack
queue.enqueue('Camila');
queue.print(); // John,Jack,Camila
console.log(queue.size()); // outputs 3
console.log(queue.isEmpty()); // outputs false
queue.dequeue(); // remove John
queue.dequeue(); // remove Jack
queue.print(); // Camilas
