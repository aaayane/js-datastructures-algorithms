function diff(arr1, arr2) {
    for (let index = 0; index < arr1.length; index++) {
        const value1 = arr1[index];
        const value2 = arr2[index];
        if (value1 !== value2) {
            console.log(index, value1, value2);
        }
    }
}
