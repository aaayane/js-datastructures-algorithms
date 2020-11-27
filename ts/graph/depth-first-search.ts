import Graph from './graph';
import Dictionary from '../dictionary/dictionary';
enum Colors {
    WHITE = 0,
    GREY = 1,
    BLACK = 2
}

const initializeColor = (vertices: (string | number)[]) => {
    const color: { [key: string]: Colors } = {};
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE;
    }
    return color;
};
/**
 * 深度优先遍历
 * @param graph 
 * @param callback 
 */
export const depthFirstSearch = (graph: Graph, callback: Function) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    for (let index = 0; index < vertices.length; index++) {
        const element = vertices[index];
        if (color[element] === Colors.WHITE) {
            depthFirstSearchVisit(vertices[index], color, adjList, callback);
        }
    }
};

function depthFirstSearchVisit(
    startVertex: string | number,
    color: any,
    adjList: any,
    callback: Function
) {
    color[startVertex] = Colors.GREY
    if (callback) {
        callback(startVertex)
    }
    const neighbors = adjList.get(startVertex);
    for (let index = 0; index < neighbors.length; index++) {
        const element = neighbors[index];
        if (color[element] === Colors.WHITE) {
            depthFirstSearchVisit(element, color, adjList, callback)
        }

    }
    color[startVertex] = Colors.BLACK

}
/**
 * 对于给定的图，返回时间和完成探索时间
 * @param graph 
 * @returns obj.discovery 发现时间
 * @returns obj.finished 完成探索时间
 * @returns obj.predecessors 上一个节点
 */
function DFS(graph: Graph) {
    const veritces = graph.getVertices(),
        adjList = graph.getAdjList(),
        color = initializeColor(veritces),
        discovery: { [key: string]: number } = {},
        finished: { [key: string]: number } = {},
        predecessors: { [key: string]: string | number } = {},

        time = { count: 0 };
    for (let index = 0; index < veritces.length; index++) {
        const element = veritces[index];
        finished.element = 0;
        discovery.element = 0;
        predecessors.element = null;
    }
    for (let index = 0; index < veritces.length; index++) {
        const element = veritces[index];
        if (color[element] === Colors.WHITE) {
            DFSVisit(element, color, discovery, finished, predecessors, time, adjList)
        }
    }
    return {
        discovery,
        finished,
        predecessors
    };

}
function DFSVisit(
    startVertex: string | number,
    color: { [key: string]: Colors },
    discovery: { [key: string]: number },
    finished: { [key: string]: number },
    predecessors: { [key: string]: string | number },
    time: { count: number; },
    adjList: Dictionary<string | number, (string | number)[]>
) {
    color[startVertex] = Colors.GREY
    discovery[startVertex] = ++time.count
    const neighbors = adjList.get(startVertex)
    for (let index = 0; index < neighbors.length; index++) {
        const element = neighbors[index];
        if (color[element] === Colors.WHITE) {
            predecessors[element] = startVertex
            DFSVisit(element, color, discovery, finished, predecessors, time, adjList)
        }

    }
    color[startVertex] = Colors.BLACK;
    finished[startVertex] = ++time.count

}
// let graph = new Graph(true);
// let veritces = ['a', 'b', 'c', 'd', 'e',]
// for (let index = 0; index < veritces.length; index++) {
//     const element = veritces[index];
//     graph.addVertex(element)

// }
// graph.addEdge('a', 'c')
// graph.addEdge('a', 'd')
// graph.addEdge('b', 'd')
// graph.addEdge('b', 'f')
// graph.addEdge('c', 'f')
// graph.addEdge('f', 'e')
// console.log(DFS(graph));
