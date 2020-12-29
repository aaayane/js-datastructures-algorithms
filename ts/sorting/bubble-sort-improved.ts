import { defaultCompare, Compare } from "../util";
// 基本思想：持续比较相邻的元素。如果第一个比第二个大，
// 就交换他们两个。直到没有任何一对数字需要比较。
// 冒泡排序最好的时间复杂度为O(n)。冒泡排序的最坏时间复杂度为O(n^2)。
// 因此冒泡排序总的平均时间复杂度为O(n^2)。
// 算法适用于少量数据的排序，是稳定的排序方法。

/**
 * 修改后的冒泡排序
 * @param array 
 * @param compareFn 
 */
export default function bubbleSort<T>(array: T[], compareFn = defaultCompare) {
    for (let index = 0, length = array.length; index < array.length; index++) {
        for (let j = 0; j < length - 1 - index; j++) {
            if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    return array;
}
let arr = [3, 6, 3, 8, 1, 6, 9, 23, 65, 1, -1]

console.log(bubbleSort(arr));

