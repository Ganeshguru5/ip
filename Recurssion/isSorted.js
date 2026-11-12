function isSorted(arr, index) {

    // Base case
if (index === arr.length - 1) {
    return true;
}

    // Check current element with next element
    if(arr[index + 1] < arr[index]) {
      return false
    }
    
    // Recursive call
    return isSorted(arr, index+1)
}

const arr = [1, 2, 3, 4, 0];

console.log(isSorted(arr, 0));