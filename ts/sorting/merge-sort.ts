import { defaultCompare, ICompareFunction, Compare } from "../util";
// 将待排序的数组分成前后两个部分，再递归的将前半部分数据和后半部分的数据各自归并排序
// ，得到的两部分数据，然后使用merge合并算法（算法见代码）将两部分算法合并到一起。
//例如：如果N=1；那么只有一个数据要排序，N=2，只需要调用merge函数将前后合并，N=4，........... 
//也就是将一个很多数据的数组分成前后两部分，然后不断递归归并排序，再合并，最后返回有序的数组。 
//归并排序的时间复杂度  归并排序的最好、最坏和平均时间复杂度都是O(nlogn)，而空间复杂度是O(n)，
//比较次数介于(nlogn)/2和(nlogn)-n+1，赋值操作的次数是(2nlogn)。
//因此可以看出，归并排序算法比较占用内存，但却是效率高且稳定的排序算法。

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