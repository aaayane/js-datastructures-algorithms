/**
 * 背包问题
 *  最基本的背包问题就是01背包问题（01 knapsack problem）：
 * 一共有N件物品，
 * 第i（i从1开始）种物品的重量为w[i]，
 * 价值为v[i]。
 * 在总重量不超过背包承载上限W的情况下，能够装入背包的最大价值是多少？
 * @param capacity 背包大小 的约束
 * @param weights 重量为w[i]
 * @param values 价值为v[i]
 * @param n 一共有N种物品
 * 
 */
export function knapSack(capacity: number, weights: number[], values: number[], n: number) {
    let kS: number[][] = [];
    for (let i = 0; i <= n; i++) {
        // kS[i][w]表示将前i种物品装进限重为j的背包可以获得的最大价值, 0 <= i <= N, 0 <= w <= capacity
        kS[i] = [];
    }
    for (let i = 0; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (i === 0 || w === 0) {
                kS[i][w] = 0
            } else if (weights[i - 1] <= w) {
                // 物品I的重量必须小于约束capacity
                console.log(values[i - 1], kS[i - 1][w - weights[i - 1]]);
                console.log(w, weights[i - 1]);

                const a = values[i - 1] + kS[i - 1][w - weights[i - 1]]
                const b = kS[i - 1][w]
                kS[i][w] = (a > b) ? a : b
            } else {
                kS[i][w] = kS[i - 1][w]
            }
        }
    }
    //额外的算法来查找解决方案中的项目
    findValues(n, capacity, kS);
    console.log(kS);
    console.table(kS)
    return kS[n][capacity];
}

let values = [3, 4, 5],
    weights = [2, 3, 4],
    capacity = 5,
    n = values.length;
console.log(knapSack(capacity, weights, values, n));



function findValues(n: number, capacity: number, kS: number[][]) {
    let i = n,
        k = capacity;
    while (i > 0 && k > 0) {
        if (kS[i][k] !== kS[i - 1][k]) {
            console.log(
                '物品 ' + i + ',重量: ' + weights[i - 1] + ',价值' + values[i - 1]
            );
            i--;
            k = k - kS[i][k]
        } else {
            i--
        }
    }
}