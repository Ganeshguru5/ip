function findSingleElement(data) {
  const map = new Map()
  let result = ""
  for(let i=0; i<data.length; i++) {
    if(map.has(data[i])) {
      const count = map.get(data[i])
      map.set(data[i], count + 1)
    } else {
      map.set(data[i], 1)
    }
  }
  for(let i=0; i<data.length; i++) {
    if(map.get(data[i]) === 1) {
      result = data[i]
      break
    }
  }
  return result
}

console.log(findSingleElement("aabbcddeff"))