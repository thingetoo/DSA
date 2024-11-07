function swap(arr, i, j) {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp
}

function partition(arr, start = 0, end=arr.length-1) {
    const pivot = arr[0];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            swapIdx++;
            swap(arr, i, swapIdx)
        }
    }

    swap(arr, start, swapIdx)
    console.log(arr)
    return swapIdx
}


function quickSort(arr, left=0, right=arr.length-1) {
    if (left < right) {
        let pivotIdx = partition(arr, left, right);
        quickSort(arr, left, pivotIdx-1)
        quickSort(arr, right, pivotIdx+1)
        
    }
    return arr;
}
console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3]))