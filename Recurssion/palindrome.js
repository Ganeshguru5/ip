function isPalindrome(arr, left, right) {

    // Base case
    if(left >= right) {
      return true
    } 

    // Compare
    if(arr[left] !== arr[right]) {
      return false
    }

    // Recursive call
return isPalindrome(arr, left +1, right-1)
}

const arr = ['r', 'a', 'c', 'e', 'c', 'a', 'r'];

console.log(isPalindrome(arr, 0, arr.length - 1));