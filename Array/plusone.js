var plusOne = function(digits) {
  let carry = 1
  for(let i=digits.length-1; i>=0; i--) {
    console.log(digits[i])
    let sum = digits[i] + carry
    digits[i] = sum % 10
    carry=Math.floor(sum/10)
  }
  if(carry !== 0) {
    digits.unshift(carry)
  }
  return digits
};

console.log(plusOne([1,2,4]))