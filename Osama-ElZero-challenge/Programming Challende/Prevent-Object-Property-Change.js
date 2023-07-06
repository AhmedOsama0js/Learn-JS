//https://elzero.org/prevent-property-change-in-object-challenge/

/*

Prevent the value of the property inside the object from changing until it eventually shows the same value inside the object
Required
Must work in javascript language
In the line shown in the example, write a line of code that prevents changing the value of the c property
Don't just edit the code!

*/

// The Main Object
const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

Object.freeze(myObject);

myObject.c = 100;
console.log(myObject.c); // 3
