import Dictionary from "../dictionary/dictionary"
/**
 * 图
 */
export default class Graph {
    /** 
   * 顶点
   */
    private vertices: (string | number)[] = []
    /** 
     * 边的集合
     */
    private adjList: Dictionary<string | number, (string | number)[]> = new Dictionary
    /**
     * 
     * @param isDirected 是否为有向图
     */
    constructor(private isDirected = false) { }
    /**
     * 添加顶点
     * @param v 
     */
    addVertex(v: string | number) {
        this.vertices.push(v)
        this.adjList.set(v, [])
    }
    /**
     * 链接两个顶点
     * @param a 
     * @param b 
     */
    addEdge(a: string | number, b: string | number) {
        // this.adjList.set(a)
        if (!this.adjList.hasKey(a)) {
            this.addVertex(a)
        }
        if (!this.adjList.hasKey(b)) {
            this.addVertex(b)
        }
        this.adjList.get(a).push(b)
        if (!this.isDirected) {
            this.adjList.get(b).push(a)
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
// let a = new Graph(true)
// a.addEdge(2, 5)
// a.addEdge(2, 8)
// a.addEdge(5, 8)
// a.addEdge(7, 8)

// console.log(a.toString());

