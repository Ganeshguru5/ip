var generate = function(numRows) {
  let result = []
  for(let i=0; i<=numRows-1; i++) {
    console.log(i)
    let temp = []
    let lastreuslt = result[result.length-1]
    for(let j=0; j<i+1; j++) {
      if(j===0) {
        temp[0] = 1
      } else if(j===i) {
        temp[j] = 1
      } else {
        temp[j] = lastreuslt[j] + lastreuslt[j-1]
      }
    }
    result.push(temp)
    temp=[]
  }
  return result
};

var getRow = function(rowIndex) {
  let result = []
  let returnone = []
  for(let i=0; i<=rowIndex; i++) {
    console.log(i)
    let temp = []
    let lastreuslt = result[result.length-1]
    for(let j=0; j<i+1; j++) {
      if(j===0) {
        temp[0] = 1
      } else if(j===i) {
        temp[j] = 1
      } else {
        temp[j] = lastreuslt[j] + lastreuslt[j-1]
      }
    }
    result.push(temp)
    if(rowIndex === i) {
      returnone = temp
    }
    temp=[]

  }
  return returnone
};


console.log(getRow(0))