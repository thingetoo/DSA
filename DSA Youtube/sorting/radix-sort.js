function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        const count = digitCount(nums[i]);
        max = Math.max(count, max)
    }
    return max;
}

function radixSort(nums) {
    const end = mostDigits(nums);

    for (let i = 0; i < end; i++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let j = 0; j < nums.length; j++) {
            const digit = getDigit(nums[j], i);
            digitBuckets[digit].push(nums[j])
        }
        nums = [].concat(...digitBuckets)
    }
    return nums;
}

console.log(radixSort([3, 43, 5]))