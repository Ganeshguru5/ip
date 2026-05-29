const arr = [1,1,2,2,2,3,3,3,3,3,3,3,3]
const map = new Map()

arr.forEach(element => {
  if(map.has(element)) {
    map.set(element, map.get(element) + 1) 
  } else {
    map.set(element, 1)
  }
});

const unique = new Set(arr)

let maxOccurenc = 0

unique.forEach(item => {
  if(map.get(item) > maxOccurenc) {
    maxOccurenc = item
  }
})

console.log(maxOccurenc)
