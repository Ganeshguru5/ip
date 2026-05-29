var calPoints = function(operations) {
  const result = []
  for(let i=0; i<operations.length; i++) {
    switch(operations[i]) {
      case "C":
        result.pop()
        break;
      case "D":
        result.push(result[result.length-1]*2)
        break;
      case "+":
        result.push(result[result.length-1] + result[result.length-2])
        break;
      default:
        result.push(Number(operations[i]))
        break;
    }
  }
  return result.reduce((a,b) => a+b, 0)
};

console.log(calPoints(["5","2","C","D","+"]))