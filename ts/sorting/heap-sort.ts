import { ICompareFunction, defaultCompare, Compare } from './../util';
// 堆排序基本思想：在排序过程中，将R[l..n]看成是一棵完全二叉树的顺序存储结构，
// 利用完全二叉树中双亲结点和孩子结点之间的内在关系【参见二叉树的顺序存储结构】，
// 在当前无序区中选择关键字最大(或最小)的记录。
// 堆排序利用了大根堆(或小根堆)堆顶记录的关键字最大(或最小)这一特征，
// 使得在当前无序区中选取最大(或最小)关键字的记录变得简单。  
// 堆排序是一种选择排序,其时间复杂度为O(nlogn)。堆排序是不稳定的


//堆排序
export default function heapSort(array: any[], compareFn = defaultCompare) {
    let heapSize = array.length;
    buildMaxHeap(array, compareFn)
    while (heapSize > 1) {
        heapSize--
        [array[0], array[heapSize]] = [array[heapSize], array[0]]
        heapify(array, 0, heapSize, compareFn);
        console.log(array);

    }
    return array;
}

/**
 * 构建最大堆
 * @param array 
 * @param compareFn 
 */
function buildMaxHeap(array: any[], compareFn: ICompareFunction<any>) {
    for (let index = Math.floor(array.length / 2); index >= 0; index--) {
        heapify(array, index, array.length, compareFn)

    }
    return array
}
/**
 * 堆排序
 * @param array 
 * @param index 
 * @param heapSize 
 * @param compareFn 
 */
function heapify(array: any[], index: number, heapSize: number, compareFn: ICompareFunction<any>) {
    let largest = index;
    const left = (2 * index) + 1;
    const right = (2 * index) + 2;

    if (left < heapSize && compareFn(array[left], array[index]) > 0) {
        largest = left;
    }

    if (right < heapSize && compareFn(array[right], array[largest]) > 0) {
        largest = right;
    }
    if (largest !== index) {
        [array[index], array[largest]] = [array[largest], array[index]]
        heapify(array, largest, heapSize, compareFn)
    }

}

let arr = [3, 6, 3, 8, 1, 6, 9, 23, 65, 1, -1]

console.log(heapSort(arr));