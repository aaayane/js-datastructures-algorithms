/**
 * 最小找零问题
 * @param coins  硬币的种类
 * @param amount  金额
 */
// export function minCoinChange(coins: number[], amount: number) {
//     const cache: Array<Array<number>> = []

//     function mekeChange(amount: number) {
//         if (!amount) {
//             return []
//         }
//         if (cache[amount]) {
//             return cache[amount]
//         }
//         let min: number[] = [],
//             newMin,
//             newAmount;
//         for (let index = 0; index < cache.length; index++) {
//             const coin = coins[index];
//             newAmount = amount - coin;
//             if (newMin >= 0) {
//                 newMin = mekeChange(newAmount)
//             }
//             if (newAmount >= 0 && (newMin.length < min.length || !min.length) && (newMin.length || !newAmount)) {
//                 min = [coin].concat(newMin)
//             }

//         }
//         return (cache[amount] = min)

//     }

//     return mekeChange(amount)
// }
export default class MinCoinChange {
    coins: number[]
    cache: object
    constructor(coins) {
        this.coins = coins
        this.cache = {}
    }
    /**
     * 
     * @param amount 计算的金额
     */
    mageChange(amount: number) {
        if (amount === 0) {
            //若amount不为正，直接返回空数组
            return []
        }
        if (this.cache[amount]) {
            //检查缓存，若答案已经被计算过，就直接返回结果
            return this.cache[amount]
        }

        let min = [],
            newMin: number[],
            newAmount;
        for (let index = 0; index < this.coins.length; index++) {
            const coin = this.coins[index];
            newAmount = amount - coin;
            if (newAmount >= 0) {
                newMin = this.mageChange(newAmount)
            }
            //每一个差值的可行的答案都会找到，但要寻找最优解的答案，即使用面值数量最少的方式

            if (
                newAmount >= 0 &&//差值大于等于零
                (newMin.length < min.length - 1 || min.length === 0) && //当前获取到的组合长度小于以前组合或者以前组合为空
                (newMin.length >= 0 || newAmount === 0)//当前获取到的组合有值或者差值为零
            ) {
                //若以上判断都成立，意味着有一个比之前更优的答案
                min = [coin].concat(newMin)
                console.log('new Min ' + min + ' for ' + amount);
            }
        }
        return (this.cache[amount] = min)
    }
}

let minCoinChange = new MinCoinChange([1, 2, 4, 5])
console.log(minCoinChange.mageChange(8));
