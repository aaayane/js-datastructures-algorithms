import { Compare } from './../util';
import { defaultCompare, ICompareFunction } from "../util";
/**
 * 快速排序
 * @param array 
 * @param compareFn 
 */
export function quickSort<T>(array: T[], compareFn = defaultCompare) {
    return quick(array, 0, array.length - 1, compareFn);
};
function quick<T>(array: T[], left: number, right: number, compareFn: ICompareFunction<T>) {
    let index;
    if (array.length > 1) {
        index = partition(array, left, right, compareFn);
        if (left < index - 1) {
            quick(array, left, index - 1, compareFn)
        }
        if (right > index) {
            quick(array, index, right, compareFn)
        }
    }
    return array
}
function partition<T>(array: T[], left: number, right: number, compareFn: ICompareFunction<T>) {
    const pivot = array[Math.floor((left + right) / 2)]
    while (left <= right) {
        while (compareFn(array[left], pivot) === Compare.LESS_THAN) {
            left++
        }
        while (compareFn(array[right], pivot) === Compare.BIGGER_THAN) {
            right--
        }
        if (left <= right) {
            [array[left], array[right]] = [array[right], array[left]]
            left++
            right--
        }
    }
}

let arr = [3, 6, 3, 8, 1, 6, 9, 23, 65, 1, -1]

console.log(quickSort(arr));