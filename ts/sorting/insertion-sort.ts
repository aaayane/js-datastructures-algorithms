import { defaultCompare, Compare } from "../util";
// * 基本思想：每步将一个待排序的纪录，按其关键码值的大小插入前面已经排序的文件中适当位置上，直到全部插入完为止。
// 算法适用于少量数据的排序，时间复杂度为O(n^2)。是稳定的排序方法。
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
