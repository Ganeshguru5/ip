function reverseString(str) {
   let data = str.split("")
   let ans = ""
   for(ch of str) {
      ans = ans + data.pop()
}
 return ans
}

const data = [1,2,3]
console.log(reverseString("cat"))