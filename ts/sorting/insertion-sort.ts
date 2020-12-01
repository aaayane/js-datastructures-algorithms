import { defaultCompare, Compare } from "../util";

/**
 * 插入排序
 * @param array 
 * @param compareFn 
 */
export const insertionSort = (array: any[], compareFn = defaultCompare) => {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let j = index;
        while (j > 0 && compareFn(array[j - 1], element) === Compare.BIGGER_THAN) {
            array[j] = array[j - 1]
            j--
        }
        array[j] = element
    }
    return array;

}
let arr = [3, 6, 3, 8, 1, 6, 9, 23, 65, 1, -1]

console.log(insertionSort(arr));
