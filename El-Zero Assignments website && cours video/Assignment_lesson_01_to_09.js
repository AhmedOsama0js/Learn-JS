// JavaScript assignments from lesson 1 to 9
// https://elzero.org/javascript-bootcamp-assignments-lesson-from-001-to-009/ (link)

//////////////////////////////////////////

//assignment 2

document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";

//////////////////////////////////////////

//assignment 3

console.log(
  "%cELzero %cWeb %cSchool",
  "color:red; font-size:40px ",
  "color:green; font-size:40px; font-weight: bold",
  "color:white; font-size:40px; background: blue"
);

//////////////////////////////////////////

//assignment 4

console.group("group1");
console.log("Massage 1");
console.log("Massage 2");
console.group("group child");
console.log("Massage 1");
console.log("Massage 2");
console.group("grand group child");
console.log("Massage 1");
console.log("Massage 2");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("group1");
console.log("Massage 1");
console.log("Massage 2");
console.groupEnd();

//////////////////////////////////////////

//assignment 5

console.table(["Ahmed", "Osama", "Awad", "elseed", "Awad"]);

//////////////////////////////////////////

//assignment 6

// console.log("Iam In Console");
// document.write("Iam In Page");

/* console.log("Iam In Console");
document.write("Iam In Page"); */