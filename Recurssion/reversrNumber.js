function reverseNumber(n, result) {

    // Base case
    if(n===0) {
        return result
    }

    // Get last digit
    let lastdigit = (n%10)


    // Recursive call
    return reverseNumber(
        Math.floor(n / 10),
        result * 10 + lastdigit
    );
}

console.log(reverseNumber(12345, 0));

const floored = Math.floor(2202/10)
console.log(floored)