function findMax(arr, index) {

    // Base case
    if (index === arr.length - 1) {
        return arr[index];
    }

    // Compare current value with recursive result
    if (arr[index] > findMax(arr, index + 1)) {
        return arr[index];
    }

       // Recursive call
    return findMax(arr, index + 1);
}

const arr = [3, 7, 2, 9, 4];

console.log(findMax(arr, 0));

// findMax([3, 7, 2, 9, 4], 0)

//                         ↓

// compare 3 with findMax(index 1)

//                         ↓

// compare 3 with (compare 7 with findMax(index 2))

//                         ↓

// compare 3 with (compare 7 with (compare 2 with findMax(index 3)))

//                         ↓

// compare 3 with (compare 7 with (compare 2 with (compare 9 with findMax(index 4))))

//                         ↓

// findMax(index 4)
// → return 4

//                         ↓

// compare 9 with 4
// → return 9

//                         ↓

// compare 2 with 9
// → return 9

//                         ↓

// compare 7 with 9
// → return 9

//                         ↓

// compare 3 with 9
// → return 9

//                         ↓

// 9