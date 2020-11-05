import Queue from './queue';
export function hotPotato(elementsList, num) {
    const queue = new Queue();
    const elimitatedList = [];
    for (let index = 0; index < elementsList.length; index++) {
        queue.enqueue(elementsList[index]);
    }
    while (queue.size() > 1) {
        for (let index = 0; index < num; index++) {
            queue.enqueue(queue.dequeue());
        }
        elimitatedList.push(queue.dequeue());
    }
    return {
        eliminated: elimitatedList,
        winner: queue.dequeue()
    };
}
const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);
result.eliminated.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato game.`);
});
console.log(`The winner is: ${result.winner}`);
