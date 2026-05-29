const arr = [5,3,4,3,5]
const map = new Map()
for(let i=0; i<arr.length-1; i++) {
    if(map.has(arr[i])) {
        console.log(arr[i])
        break;
    } else {
        map.set(arr[i], 1)
    }
}