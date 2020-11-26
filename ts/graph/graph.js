"use strict";
exports.__esModule = true;
var dictionary_1 = require("../dictionary/dictionary");
var Graph = /** @class */ (function () {
    /**
     *
     * @param isDirected 是否为有向图
     */
    function Graph(isDirected) {
        if (isDirected === void 0) { isDirected = false; }
        this.isDirected = isDirected;
        /**
       * 顶点
       */
        this.vertices = [];
        /**
         * 边的集合
         */
        this.adjList = new dictionary_1["default"];
    }
    /**
     * 添加顶点
     * @param v
     */
    Graph.prototype.addVertex = function (v) {
        this.vertices.push(v);
        this.adjList.set(v, []);
    };
    /**
     * 链接两个顶点
     * @param a
     * @param b
     */
    Graph.prototype.addEdge = function (a, b) {
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
    };
    Graph.prototype.getVertices = function () {
        return this.vertices;
    };
    Graph.prototype.getAdjList = function () {
        return this.adjList;
    };
    Graph.prototype.toString = function () {
        var s = '';
        for (var i = 0; i < this.vertices.length; i++) {
            s += this.vertices[i] + ' -> ';
            var neighbors = this.adjList.get(this.vertices[i]);
            for (var j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    };
    return Graph;
}());
exports["default"] = Graph;
var a = new Graph();
a.addEdge(2, 5);
a.addEdge(2, 8);
a.addEdge(5, 8);
a.addEdge(7, 8);
console.log(a.toString());
