function diff(arr1, arr2) {
    for (let index = 0; index < arr1.length; index++) {
        const value1 = arr1[index];
        const value2 = arr2[index];
        if (arr1[index] === arr2[index]) {
            break;
        }
        else {
            console.log(index, value1, value2);
        }
    }
}
