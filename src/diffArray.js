//@ts-check

/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.

Note:
You can return the array with its elements in any order.



*/
function diffAB(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    if (!b.includes(element)) {
      result.push(element);
    }
  }
  return result;
}


function diffArray(arr1, arr2) {
  // loop arr1 and find elements not in arr2
  const ab = diffAB(arr1, arr2);
  // loop arr2 and find elements not in arr1
  const ba = diffAB(arr2, arr1);
  return ab.concat(ba);
}

exports.diffArray = diffArray;
