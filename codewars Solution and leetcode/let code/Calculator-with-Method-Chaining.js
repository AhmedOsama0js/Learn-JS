// https://leetcode.com/problems/calculator-with-method-chaining/description/ (link)
/*
Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.

Your Calculator class should have the following methods:

add - This method adds the given number value to the result and returns the updated Calculator.
subtract - This method subtracts the given number value from the result and returns the updated Calculator.
multiply - This method multiplies the result  by the given number value and returns the updated Calculator.
divide - This method divides the result by the given number value and returns the updated Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.
power - This method raises the result to the power of the given number value and returns the updated Calculator.
getResult - This method returns the result.
Solutions within 10-5 of the actual result are considered correct.

*/

let actions = ["Calculator", "add", "subtract", "getResult"],
  values = [10, 5, 7];


  // solution 1
class Calculator {
  constructor(value) {
    this.value = value;
  }
  
  add = (value) => {
    this.value += value;
    return this;
  }
  
  subtract = (value) => {
    this.value -= value;
    return this;
  }
  
  multiply = (value) => {
    this.value *= value;
    return this;
  }
  
  divide = (value) => {
    value == 0 ? this.value = "Division by zero is not allowed" : this.value /= value;
    return this;
  }
  
  power = (value) => {
    this.value = Math.pow(this.value, value);
    return this;
  }
  
  getResult = () => this.value;
}
// Runtime: 50 ms



// solution 2
class Calculator {
  constructor(value) {
    this.value = value;
  }
  calculate(operator, value) {
    const operations = {
      "+": (x, y) => x + y,
      "-": (x, y) => x - y,
      "*": (x, y) => x * y,
      "/": (x, y) => (y === 0 ? "Division by zero is not allowed" : x / y),
      "**": (x, y) => Math.pow(x, y),
    };
    this.value = operations[operator](this.value, value);
    return this;
  }

  add = (value) => this.calculate("+", value);
  
  subtract = (value) => this.calculate("-", value);
  
  multiply = (value) => this.calculate("*", value);
  
  divide = (value) => this.calculate("/", value);
  
  power = (value) => this.calculate("**", value);
  
  getResult=()=>  this.value;
}
// Runtime: 52 ms
console.log(new Calculator(10).subtract(5).add(7).getResult());