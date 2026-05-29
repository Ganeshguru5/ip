var addTwoNumbers = function(l1, l2) {
  let result = []
  let carryon = 0
  for(let i=0; i<l1.length; i++) {
    let sum
    if(carryon >0) {
      sum = l1[i] + l2[i] + carryon
      carryon = 0
    } else {
      sum = l1[i] + l2[i]
    }
    if(sum > 9) {
      result.push(Math.floor(sum % 10))
      carryon=sum/10
        console.log(carryon, i)

    } else {
        result.push(sum || 0)
    }
  }
  return result
};

console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))