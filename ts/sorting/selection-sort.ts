import { defaultCompare, Compare } from "../util";
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