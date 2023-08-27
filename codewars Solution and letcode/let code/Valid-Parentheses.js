//https://leetcode.com/problems/valid-parentheses/ (link)

/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/




const isValid = function (s) {
  const stack = [];
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char in pairs) {
      stack.push(char);
    } else {
      const top = stack.pop();

      if (char !== pairs[top]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};


console.log(isValid("()(){}[]"));

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// const isValid = function (s) {
  //   const regex = /(\(\)|\{\}|\[\])+/;
  //   return regex.test(s);
  // };

// console.log(isValid("()()}[]"));
  
  //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx



// var isValid = function (s) {
//   let arr1 = [];
//   let arr2 = [];
//   let arr3 = [];

//   s.split("").filter((e) => {
//     if (e == "(") {
//       arr1.push(e);
//     }
//     if (e == ")") {
//       arr1.push(e);
//     }
//   });

//   s.split("").filter((e) => {
//     if (e == "{") {
//       arr2.push(e);
//     }
//     if (e == "}") {
//       arr2.push(e);
//     }
//   });

//   s.split("").filter((e) => {
//     if (e == "[") {
//       arr3.push(e);
//     }
//     if (e == "]") {
//       arr3.push(e);
//     }
//   });

//   let one =
//     arr1.filter((e) => e == "(").length == arr1.filter((e) => e == "(").length; 
//   let two =
//     arr2.filter((e) => e == "{").length == arr2.filter((e) => e == "}").length; 
  
//   let three =
//     arr3.filter((e) => e == "[").length == arr3.filter((e) => e == "]").length; 
  
//   if (one && two && three) {
//     return true
//   } else {
//     return false
//   }
// };

// console.log(isValid("()(){}[]"));
