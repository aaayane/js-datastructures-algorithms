import { ICompareFunction, defaultCompare, Compare } from './../util';

//堆排序
export default function heapSort(array: any[], compareFn = defaultCompare) {
    let heapSize = array.length;
    buildMaxHeap(array, compareFn)
    console.log(array);

    while (heapSize > 1) {
        heapSize--
        [array[0], array[heapSize]] = [array[heapSize], array[0]]
        heapify(array, 0, heapSize, compareFn);
        console.log(array);

    }
    return array;
}


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
    // if (left < heapSize && compareFn(array[left], array[right]) === Compare.BIGGER_THAN) {
    //     largest = left
    // }
    // if (right < heapSize && compareFn(array[right], array[largest]) === Compare.BIGGER_THAN) {
    //     largest = right
    // }
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

// let arr = [3, 6, 3, 8, 1, 6, 9, 23, 65, 1, -1]

// console.log(heapSort(arr));