function findContinuousSequence(target: number): number[][] {
    if (target === 1 || target === 2) return []
    let numberArr = [];
    let left = 1;
    let right = 1;
    let sum = 0;
    while (left < target / 2) {
        // console.log(sum)
        if (sum < target) {
            sum += right
            right++

        } else {
            console.log(sum, target)
            if (sum === target) {
                let arr = [];
                for (let i = left; i < right; i++) {
                    arr.push(i);
                }
                numberArr.push(arr)
            }
            sum -= left
            left++

        }
    }
    return numberArr
};
console.log(findContinuousSequence(9));

