function power(x, n) {
  if(n===0) {
    return x
  }
  return n * power(x, n-1)
}

console.log(power(2, 4));