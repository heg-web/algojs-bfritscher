//@ts-check

/*
Find the magic door letter.

You receive an magic object
in the start attribute of this object you can find an object with two attributes name and params.
name is the name of a function you should call on the received object
and params are the parameters to use.
But you have to reverse the order of parameters from params
to provide them to the function.
If called correctly the function will return the index
of the right answers in the
names array from the main object.

*/
function findSecret(magicObj) {
  const fnName = magicObj.start.name;
  const fn = magicObj[fnName];
  const paramsR = magicObj.start.params.reverse();
  const index = fn(...paramsR);
  return magicObj.names[index];
}

exports.findSecret = findSecret;
