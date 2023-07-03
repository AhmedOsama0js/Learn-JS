//https://elzero.org/javascript-bootcamp-assignments-lesson-from-057-to-063/ (link)

//=================================================================================

//Assignment 1

function sayHello(theName, theGender = "") {
  theGender === "Male"
    ? console.log(`hello Mr ${theName}`)
    : theGender === "Female"
    ? console.log(`hello Miss ${theName}`)
    : console.log(`hello ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

//=================================================================================
console.log(`==`.repeat(20));

//=================================================================================

//Assignment 2

function calculate(firstNum, secondNum, operation = "add") {
  secondNum === undefined
    ? console.log("Second Number Not Found")
    : operation === "add"
    ? console.log(firstNum + secondNum)
    : operation === "subtract"
    ? console.log(firstNum - secondNum)
    : operation === "multiply"
    ? console.log(firstNum * secondNum)
    : console.log("Second Number Not Found");
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

//=================================================================================
console.log(`==`.repeat(20));

//=================================================================================

//Assignment 3
function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(` The Age = ${theAge * 12} Months`);
    console.log(` The Age = ${theAge * 12 * 4} weeks`);
    console.log(` The Age = ${theAge * 12 * 4 * 7} days`);
    console.log(` The Age = ${theAge * 12 * 4 * 7 * 24} hours`);
    console.log(` The Age = ${theAge * 12 * 4 * 7 * 24 * 60} minutes`);
    console.log(` The Age = ${theAge * 12 * 4 * 7 * 24 * 60 * 60} seconds`);
  } else {
    console.log("Age Out Of Range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(26); // Months Example => 456 Months

//=================================================================================
console.log(`==`.repeat(20));

//=================================================================================

//Assignment 4
function checkStatus(a, b, c) {
  let age, name, stat;
  for (i = 0; i < checkStatus.length; i++) {
    typeof a === "string"
      ? (name = a)
      : typeof a === "number"
      ? (age = a)
      : (stat = a);
    typeof b === "string"
      ? (name = b)
      : typeof b === "number"
      ? (age = b)
      : (stat = b);
    typeof c === "string"
      ? (name = c)
      : typeof c === "number"
      ? (age = c)
      : (stat = c);

    stat === true ? (stat = "Available") : (stat = "Not Available");
  }
  console.log(`Hello ${name}, Your Age Is ${age}, You Are ${stat} For Hire`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

//=================================================================================
console.log(`==`.repeat(20));

//=================================================================================

//Assignment 5

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value = "${i}">${i}</option>`);
  }
  document.write(`</select>`);
}

createSelectBox(2000, 2023);

//=================================================================================
console.log(`==`.repeat(20));

//=================================================================================

function multiply(...calc) {
  let result = 0;
  for (let i = 0; i < calc.length; i++) {
    if (typeof calc[i] === "string") {
      continue;
    } else {
      result = parseInt(calc[i - 1]) * parseInt(calc[i]);
    }
  }
  return result;
}
//Assignment 6
console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000
