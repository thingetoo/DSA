function mergeArr(arr1, arr2) {
    let newArr = [];
    let p1 = 0;
    let p2 = 0;
    console.log(arr1, arr2)
    while (p1 < arr1.length && p2 < arr2.length) {
        const val1 = arr1[p1];
        const val2 = arr2[p2];

        if (val1 < val2) {
            newArr.push(val1);
            p1++
        } else {
            newArr.push(val2);
            p2++
        }
        console.log(newArr)
    }

    while (p1 < arr1.length) {
        newArr.push(arr1[p1]);
        p1++;
    }
    while (p2 < arr2.length) {
        newArr.push(arr2[p2]);
        p2++;
    }

    return newArr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    return mergeArr(left, right)
}

console.log(mergeSort([4, 9, 1, 2]))