//@ts-check

/* Multiply all elements of the provided array */
function multiplyArray(arr) {
  let total = 1;
  for(let i=0; i < arr.length; i++) {
    total = total * arr[i];
  }
  return total;
}

/* Multiply all elements in the array of array */
function multiplyAll(arr) {
  return;
}

/* Multiply all elements in the given array which can have many sub-arrays*/
function multiplyAllMixed(arr) {
  return;
}

exports.multiplyArray = multiplyArray;
exports.multiplyAll = multiplyAll;
exports.multiplyAllMixed = multiplyAllMixed;
