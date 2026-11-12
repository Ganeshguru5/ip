function countOccurrences(arr, target, index) {

    // Base case
    if(index === arr.length) {
      return 0
    }

    // Check current element
    if(target === arr[index]) {
      return 1 + countOccurrences(arr, target, index + 1)
    }


    // Recursive call
    return countOccurrences(arr, target, index + 1)
}

const arr = [1, 2, 2, 3, 2, 4];

console.log(countOccurrences(arr, 2, 0));
// countOccurrences(arr, 2, 0)

//              ↓

// 0 + countOccurrences(arr, 2, 1)

//              ↓

// 0 + (1 + countOccurrences(arr, 2, 2))

//              ↓

// 0 + (1 + (1 + countOccurrences(arr, 2, 3)))

//              ↓

// 0 + (1 + (1 + (0 + countOccurrences(arr, 2, 4))))

//              ↓

// 0 + (1 + (1 + (0 + (1 + countOccurrences(arr, 2, 5)))))

//              ↓

// 0 + (1 + (1 + (0 + (1 + (0 + countOccurrences(arr, 2, 6))))))

//              ↓

// 0 + (1 + (1 + (0 + (1 + (0 + 0)))))

//              ↓

// 3