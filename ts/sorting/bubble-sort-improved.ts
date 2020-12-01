import { defaultCompare, Compare } from "../util";
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

