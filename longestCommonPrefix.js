var longestCommonPrefix = function(strs) {
  let prefix = strs[0]
  for(let i=1; i<strs.length; i++) {
    const currenti = strs[i]
    let temp = ""
    for(let j=0; j<currenti.length; j++) {
      if(currenti[j] === prefix[j]) {
        temp = temp + currenti[j]
      } else {
        break
      }
    }
    prefix = temp
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))