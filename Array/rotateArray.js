function rotateArray(arr=[], k) {
  const last = arr.slice(k+1)
  const first = arr.slice(0, arr.length - k);
  console.log([...last, ...first])
}

// rotateArray([1,2,3,4,5], 1)

function rotateArrayNew(arr = [], k) {
  // k = k % arr.length;

  reverse(arr, 0, arr.length - 1); // reverse whole array
  console.log(arr, 'revrese 1')
  reverse(arr, 0, k - 1);          // reverse first k elements
  console.log(arr, 'reverse 2')
  reverse(arr, k, arr.length - 1); // reverse remaining elements
  console.log(arr, 'reverse 3')

  return arr;
}

function reverse(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

console.log(rotateArrayNew([1,2,3,4,5], 2)); // [4,5,1,2,3]