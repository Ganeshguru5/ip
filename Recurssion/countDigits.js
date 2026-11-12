function countDigits(n) {

    // Base case
    if(n===0) {
        return 0
    }

    // Recursive call
    return 1 + countDigits(Math.floor(n / 10))
}

console.log(countDigits(123495));