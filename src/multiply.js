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
  let total = 1;
  for (let sousListe of arr) {
    total = total * multiplyArray(sousListe)
  }
  /*
  for(let i=0; i < arr.length; i++) {
    const sousListe = arr[i];
    for(let j=0; j < sousListe.length; j++) {
      total = total * sousListe[j]; // arr[i][j]
    }
  }
  */
  return total;
}

/* Multiply all elements in the given array which can have many sub-arrays*/
function multiplyAllMixed(arr) {
  const flatArray = arr.flat(Infinity);
  return multiplyArray(flatArray);
}

exports.multiplyArray = multiplyArray;
exports.multiplyAll = multiplyAll;
exports.multiplyAllMixed = multiplyAllMixed;
