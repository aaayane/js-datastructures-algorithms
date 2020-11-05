// export default class PriorityQueue<T> {
//     private items: T[];
//     constructor() {
//         this.items = [];
//     }
//     enqueue(element, priority) {
//         let queueElement = new QueueElement(element, priority);
//         let added = false
//         for (let index = 0; index < this.items.length; index++) {
//             if (queueElement.priority < this.items.priority) {
//                 this.items.splice(index, 0, queueElement);
//                 added = true
//                 break;
//             }
//         }
//         if (!added) {
//             this.items.push(queueElement)
//         }
//     }
//     dequeue() {
//         return this.items.shift()
//     }
//     peek() {
//         return this.items[0]
//     }
//     isEmpty() {
//         return this.items.length === 0;
//     }
//     size() {
//         return this.items.length;
//     }
//     clear() {
//         this.items = []
//     }
//     // print() {
//     //     console.log(this.items.toString());
//     // }
// }
// class QueueElement {
//     private element;
//     private priority;
//     constructor(element, priority) {
//         this.element = element;
//         this.priority = priority;
//     }
// }
