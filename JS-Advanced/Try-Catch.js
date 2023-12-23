// throw - try - catch

/*

try: Used to specify a block of code that may cause errors.

throw: Used to throw (raise) an exception when a specific error occurs.

catch: Used to specify a block of code that is executed if an error occurs within the try block. It is used to handle and manage errors.

*/

// Example

const handleError = (x, y) => {
  if (y === 0) {
    throw "you can't David to 0";
  }
  return x / y;
};

try {
  handleError(10, 0);
} catch (e) {
  alert(`error is: ${e}`);
}

try {
  handleError(10, 0);
} catch (e) {
  confirm(e);
}

/*
In brief, the `throw` statement is employed to raise an error within a function when an unexpected issue arises,

while the `try` block is utilized when attempting to invoke or call that function. Subsequently,

the caught error is modified or handled in the calling function through the `catch` block.
*/
