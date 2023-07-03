
//https://elzero.org/javascript-2021-if-condition-challenge/ (link)

//===================================================================
/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

//The Answer
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");

// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

// W Position May Change

if (st.charAt(st.indexOf("W")).toLocaleLowerCase() === "w") {
  console.log("Good");
}

if (typeof st.length !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

if (st.repeat(2).length.toString() === "34") {
  console.log("Good");
}
