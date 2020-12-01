import { defaultCompare, ICompareFunction, Compare } from "../util";

/**
 * 归并排序
 * @param array 
 * @param compareFn 
 */
export function mergeSort<T>(array: T[], compareFn = defaultCompare): T[] {
    let length = array.length
    if (length > 1) {
        const middle = Math.floor(length / 2),
            left = mergeSort(array.slice(0, middle), compareFn),
            right = mergeSort(array.slice(middle), compareFn);
        array = merge(left, right, compareFn)

    }
    return array
}
function merge<T>(left: T[], right: T[], compareFn: ICompareFunction<T>) {
    let i = 0,
        j = 0,
        result = [];
    while (i < left.length && j < right.length) {
        let num = compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]
        result.push(num)
    }
    //剩余的一侧数组
    let remainingArr = i < left.length ? left.slice(i) : right.slice(j);

    return result.concat(remainingArr)
}
let arr = [3, 6, 3, 8, 1, 6, 9, 23, 65, 1, -1]

console.log(mergeSort(arr));