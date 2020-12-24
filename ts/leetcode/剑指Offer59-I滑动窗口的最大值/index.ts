function maxSlidingWindow1(nums: number[], k: number): number[] {
    const length = nums.length
    if (length === 0 || k <= 0) return []
    if (k === 1) return nums;

    let res = [],
        queue = [];
    for (let index = 0; index < length; index++) {
        if (index >= k) {
            let outElem = nums[index - k]
            if (outElem === queue[0]) queue.shift()
        }
        let inElem = nums[index]
        while (queue.length > 0 && queue[queue.length] < inElem) {
            queue.pop()
        }
        queue.push(inElem)
        if (index >= k - 1) {
            res.push(queue[0])
        }

    }
    return res
};
function maxSlidingWindow(nums: number[], k: number): number[] {
    if (k === 1) return nums
    const length = nums.length
    if (length === 0 || k === 0) return []

    const deque = [];
    for (let index = 0; index < k; index++) {
        cleanDeque(deque, nums, index, k)
        deque.push(index)
    }
    const res = []
    console.log(deque);

    res.push(nums[deque[0]]);
    for (let index = k; index < length; index++) {
        cleanDeque(deque, nums, index, k)
        deque.push(index)
        res.push(nums[deque[0]])

    }
    return res
};
/**
 * 刷新双端队列
 * @param queue 双端队列
 * @param numbers 数组
 * @param index 当前元素下标
 * @param k 滑动窗口大小
 */
function cleanDeque(queue: number[], numbers: number[], index: number, k: number) {
    // 如果双向队列中，包含不是滑动窗口内的数，直接出队
    if (queue.length > 0 && index >= queue[0] + k) {
        queue.shift()
    }
    while (queue.length > 0 && numbers[index] > numbers[queue[queue.length - 1]]) {
        queue.pop()
    }
}


console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
