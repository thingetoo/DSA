function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        console.log(i)
        for (let j = 0; j <= i - 1; j++) {
            console.log(j)
            console.log(arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// optimized with no swaps
function bubbleSortOptim(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j <= i - 1; j++) {
            console.log(j)
            console.log(arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([3, 2, 1]))