// https://leetcode.com/problems/to-be-or-not-to-be/description/ (link)

/*
Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
*/

// solution 1
var expect = (val) => {
  const toBe = (a) => {
    if (val === a) {
      return true;
    } else {
      throw new Error("Not Equal");
    }
  };

  const notToBe = (b) => {
    if (val !== b) {
      return true;
    } else {
      throw new Error("Equal");
    }
  };

  return { toBe, notToBe };
};
// Runtime 51 ms




// solution 2
var expect = (val) => {
  const toBe = (a) => {
    if (val === a) return true;
    else throw new Error("Not Equal");
  };

  const notToBe = (b) => {
    if (val !== b) return true;
    else throw new Error("Equal");
  };

  return { toBe, notToBe };
};

// Runtime 49 ms
