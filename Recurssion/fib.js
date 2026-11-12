function fib(n) {
   if (n === 0) return 0;
   if (n === 1) return 1;
  return fib(n - 1) + fib(n-2)
}
console.log(fib(3))

// fib(5)

//             ↓

// fib(4) + fib(3)

//             ↓

// (fib(3) + fib(2)) + fib(3)

//             ↓

// ((fib(2) + fib(1)) + fib(2)) + fib(3)

//             ↓

// (((fib(1) + fib(0)) + fib(1)) + fib(2)) + fib(3)

//             ↓

// (((1 + 0) + 1) + fib(2)) + fib(3)

//             ↓

// ((1 + 1) + (fib(1) + fib(0))) + fib(3)

//             ↓

// (2 + (1 + 0)) + fib(3)

//             ↓

// 3 + fib(3)

//             ↓

// 3 + (fib(2) + fib(1))

//             ↓

// 3 + ((fib(1) + fib(0)) + fib(1))

//             ↓

// 3 + ((1 + 0) + 1)

//             ↓

// 3 + 2

//             ↓

// 5