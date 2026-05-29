function findMax(data) {
  let maxNum = data[0]
  for(num of data) {
    if(num > maxNum) {
      maxNum = num
    }
  }
  return maxNum
}

function sumArray(data) {
  let sumofarray = 0
  for(num of data) {
    sumofarray+=num
  }
  return sumofarray
}


function reverseArray(data) {
  let result = []
  for(let i=data.length - 1; i>=0; i--) {
    result.push(data[i])
  }
  return result
}

function findIndex(data, tosearch) {
   let result=-1
   data.forEach((item, index) => {
    if(item === tosearch) {
      result = index
    }
   })
   return result
}

// console.log(findIndex([2,3,4], 3))


let data = [2,3,4,5,6,667,6]
data.splice(2,1) // [ 2, 3, 5, 6, 667, 6 ]
// data.splice(2, 2, 1) // 2,3,1,6,667,6
console.log(data);

