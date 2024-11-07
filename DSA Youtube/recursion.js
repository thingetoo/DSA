function factorial(num) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result*=i;
    }

    return result;
}

console.log(factorial(10))

function factorialRec(num) {
    if (num === 1) return 1;
    return num * factorialRec(num - 1);
}

console.log(factorialRec(10))