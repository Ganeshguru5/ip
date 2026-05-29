function merge(arr, arr2) {
  let mergeArray = [...arr, ...arr2];

  for (let i = 0; i < mergeArray.length; i++) {
    for (let j = i + 1; j < mergeArray.length; j++) {

      if (mergeArray[i] > mergeArray[j]) {
        let temp = mergeArray[i];
        mergeArray[i] = mergeArray[j];
        mergeArray[j] = temp;
      }

    }
  }

  return mergeArray;
}

console.log(merge([1,3,5], [2,4,6]));
