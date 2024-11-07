function naiveSearch(long, short) {
    let count = 0;

    for (let i = 0; i < long.length; i++) {
        const longLet = long[i];
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break; // key step => need to review
            if (j === short.length - 1) count++
        }
    }

    return count;
}

console.log(naiveSearch('omgomg', 'o'))