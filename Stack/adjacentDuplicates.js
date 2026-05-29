var adjacentDuplicates = (arr) => {
   let data = arr.split("");
   console.log(data)
   let result = [data[0]]
   console.log(result)
   for(let i=1; i<data.length; i++) {
     if(data[i] !== result[result.length - 1]) {
        console.log("count", i)
        console.log(data[i], "!==", result[result.length - 1])
        result.push(data[i])
        console.log(result, "result")
     } else {
        console.log("count", i)
        console.log("popped")
        result.pop()
        console.log(result, "result")
     }
   }
   return result.join("")
}

console.log(adjacentDuplicates("abbaca"))