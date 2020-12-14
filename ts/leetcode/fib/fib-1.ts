// 剑指 Offer 10- I. 斐波那契数列
function fib(n: number): number {
    let arr = [0, 1]
    for (let i = 2; i <= n; i++) {
        arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007
    }
    return arr[n]
}

// 尾递归
// 不创建新的栈帧，现有栈帧被重复利用，不会爆栈，性能比未经优化的递归明显提高
function fib1(n: number, a = 1, b = 1): number {
    if (n <= 1) return n;
    if (n === 2) return b;
    return fib1(n - 1, b, (a + b) % 1000000007)
}

// 循环+动态规划解法
let dp = [0, 1, 1]
function fib2(n: number, ) {
    if (dp[n] != undefined) return dp[n];
    for (let index = dp.length; index <= n; index++) {
        dp[index] = (dp[index - 1] + dp[index - 2]) % 1000000007
    }
    return dp[n]

}

// console.log(fib2(0));
// console.log(fib2(1));
// console.log(fib2(2));
// console.log(fib2(3));
// console.log(fib2(4));
// console.log(fib2(5));
// console.log(fib2(6));

