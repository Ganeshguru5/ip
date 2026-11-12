// const arr = [2,7,11,15]
// let target = 9
// let map = n9ew Map()

// for(let i=0; i<arr.length - 1; i++) {
//   if(arr.includes(target - arr[i])) {
//     console.log(arr.indexOf(arr[i]), arr.indexOf(target - arr[i]))
//     break
//   }
// }


const arr = [5,3,4,3,5];
let target = 9;

const map = new Map();

for(let i = 0; i < arr.length; i++){
   let need = target - arr[i];

   if(map.has(need)){
      console.log([map.get(need), i]);
      break;
   }

   map.set(arr[i], i);
}