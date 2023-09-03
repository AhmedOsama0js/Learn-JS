//https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript

/*

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
*/

//the solution

function basicOp(operation, value1, value2) {
  if (operation == "+") return value1 + value2;
  if (operation == "/") return value1 / value2;
  if (operation == "*") return value1 * value2;
  if (operation == "-") return value1 - value2;
  return value1 + operation + value2;
}

//another solution

// function basicOp(o, a, b) {
//   return eval(a + o + b);
// }
