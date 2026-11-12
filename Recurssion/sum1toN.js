function sumArray(arr, index) {

    // Base case
    if(arr.length - 1 === index) {
        return arr[index]
    }

    // Recursive call


    // Add current value with recursive result
    return arr[index] + sumArray(arr, index+1)
}

const arr = [1, 2, 3, 4, 5];

console.log(sumArray(arr, 0));