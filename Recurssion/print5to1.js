function print5to1(n) {
    // 1. Base Case
  if(n===0) {
    return
  }
// 2. Do some work
  console.log(n)
   // 3. Recursive Call
  print5to1(n-1)
}

print5to1(5);