import { defaultCompare, Compare } from "../util";
// 基本思想：每一次从待排序的数据元素中选出最小（或最大）的一个元素，
// 存放在序列的起始位置，直到全部待排序的数据元素排完。
// 选择排序是不稳定的排序方法。时间复杂度 O(n^2)。
/**
 * 选择排序
 * @param array 
 * @param compareFn 
 */
export default function selectionSort(array: any[], compareFn = defaultCompare) {
    let minIndex;
    for (let index = 0, length = array.length; index < length - 1; index++) {
        minIndex = index;
        for (let j = index; j < length; j++) {
            if (compareFn(array[minIndex], array[j]) === Compare.BIGGER_THAN) {
                minIndex = j
            }
        }
        if (index !== minIndex) {
            [array[index], array[minIndex]] = [array[minIndex], array[index]]
        }

    }
    return array
}

let arr = [3, 6, 3, 8, 1, 6, 9, 23, 65, 1, -1]

console.log(selectionSort(arr));