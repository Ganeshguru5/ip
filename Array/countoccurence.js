const arr = "apple";

const map = new Map();

arr.split("").forEach(item => {
  let isinmap = map.get(item)
  if(map.has(item)) {
    map.set(item, map.get(item) + 1)
  } else {
    map.set(item, 1)
  }
})

console.log(map)