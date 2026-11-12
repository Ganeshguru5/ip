function reverseArray(arr, left, right) {

    // Base case
   if (left >= right) {
    return arr;
} else {
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    
   }
    // Swap

    // Recursive call
return reverseArray(arr, left+1, right-1)
}

const arr = [1, 2, 3, 4, 5, 6];

reverseArray(arr, 0, arr.length - 1);

console.log(arr);