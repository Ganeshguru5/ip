function findMin(arr, index) {

    // Base case
    if (index === arr.length - 1) {
        return arr[index];
    }

    // Recursive call
    let min = findMin(arr, index + 1);

    // Compare current value with recursive result
    if (arr[index] < min) {
        return arr[index];
    }

    return min;
}