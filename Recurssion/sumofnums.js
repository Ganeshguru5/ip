function sum1toN(n) {
  if(n===0) {
    return 0
  }
  
  return n + sum1toN(n-1)
}

console.log(sum1toN(5))

// sum1toN(3)
//         ↓
// 3 + sum1toN(2)
//         ↓
// 3 + (2 + sum1toN(1))
//         ↓
// 3 + (2 + (1 + sum1toN(0)))
//         ↓
// 3 + (2 + (1 + 0))
//         ↓
// 6