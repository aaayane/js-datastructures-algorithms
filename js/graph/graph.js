import Dictionary from "../dictionary/dictionary";
export default class Graph {
    /**
     *
     * @param isDirected 是否为有向图
     */
    constructor(isDirected = false) {
        this.isDirected = isDirected;
        /**
       * 顶点
       */
        this.vertices = [];
        /**
         * 边的集合
         */
        this.adjList = new Dictionary;
    }
    /**
     * 添加顶点
     * @param v
     */
    addVertex(v) {
        this.vertices.push(v);
        this.adjList.set(v, []);
    }
    /**
     * 链接两个顶点
     * @param a
     * @param b
     */
    addEdge(a, b) {
        // this.adjList.set(a)
        if (!this.adjList.hasKey(a)) {
            this.addVertex(a);
        }
        if (!this.adjList.hasKey(b)) {
            this.addVertex(b);
        }
        this.adjList.get(a).push(b);
        if (!this.isDirected) {
            this.adjList.get(b).push(a);
        }
    }
    getVertices() {
        return this.vertices;
    }
    getAdjList() {
        return this.adjList;
    }
    toString() {
        let s = '';
        for (let i = 0; i < this.vertices.length; i++) {
            s += this.vertices[i] + ' -> ';
            const neighbors = this.adjList.get(this.vertices[i]);
            for (let j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    }
}
let a = new Graph();
a.addEdge(2, 5);
a.addEdge(2, 8);
a.addEdge(5, 8);
a.addEdge(7, 8);
console.log(a.toString());
