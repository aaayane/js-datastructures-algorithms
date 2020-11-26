import Graph from './graph';
import Queue from '../queue/queue';

enum Colors {
    WHITE = 0,
    GREY = 1,
    BLACK = 2
}
/**
 * 初始化颜色
 * @param vertices 
 */
const initializeColor = (vertices: (string | number)[]) => {
    const color: any = {};
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE;
    }
    return color;
};
/**
 * 广度优先搜索
 * @param graph 
 * @param startVertex 初始顶点
 * @param callback 
 */
export const breadthFirstSearch = (graph: Graph, startVertex: any, callback: Function) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const queue = new Queue();
    queue.enqueue(startVertex)


    while (!queue.isEmpty()) {
        const u = queue.dequeue()
        const neighbors = adjList.get(u);
        color[u] = Colors.GREY;
        for (let index = 0; index < neighbors.length; index++) {
            const element = neighbors[index];

            if (color[element] === Colors.WHITE) {
                queue.enqueue(element)
                color[element] = Colors.GREY
            }
        }
        color[u] = Colors.BLACK

        if (callback) {
            callback(u)
        }
    }
}
/**
 * 广度优先搜索 计算距离
 * @param graph 
 * @param startVertex 
 */
export const breadthFirstSearch2 = (graph: Graph, startVertex: any) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const queue = new Queue();
    queue.enqueue(startVertex)
    const distances: any = {};
    const predecessors: any = {};
    // 初始化距离和上一个点
    for (let index = 0; index < vertices.length; index++) {
        const element = vertices[index];
        distances[element] = 0
        predecessors[element] = null
    }
    while (!queue.isEmpty()) {
        const u = queue.dequeue()
        const neighbors = adjList.get(u);
        color[u] = Colors.GREY;
        for (let index = 0; index < neighbors.length; index++) {
            const element = neighbors[index];
            if (color[element] === Colors.WHITE) {
                color[element] = Colors.GREY;
                distances[element] = distances[u] + 1;
                predecessors[element] = u
                queue.enqueue(element)
            }
        }
        color[u] = Colors.BLACK;
    }
    return {
        distances,
        predecessors
    };
}

// let a = new Graph()
// a.addEdge(2, 5)
// a.addEdge(2, 8)
// a.addEdge(5, 8)
// a.addEdge(7, 8)
// a.addEdge(8, 2)
// a.addEdge(10, 11)

// breadthFirstSearch(a, 2, (a) => {
//     console.log(a)
// })

// let { distances, predecessors } = breadthFirstSearch2(a, 2)
// console.log(distances);
// console.log(predecessors);

