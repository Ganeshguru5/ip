function binarySearch(arr, target, left, right) {

    // Base case
    if(left > right) {
      return false
    } 

    // Find middle

    let middle = Math.floor((left + right) / 2);
    // Target found
    if(target === arr[middle]) {
      return true
    }

    // Search left half
    if(arr[middle] > target) {
      return binarySearch(arr, target, left, middle - 1)
    }

    // Search right half
    if(arr[middle] < target) {
      return binarySearch(arr, target, middle+1, right)
    }
}

const arr = [1, 3, 5, 7, 9, 11, 13];

console.log(binarySearch(arr, 9, 0, arr.length - 1));