//https://elzero.org/condition-met-challenge/ (link)



/*
1- You must use the variable with what you have learned to make the condition fulfilled, knowing that the letter W inside the String can change its location, so the solution must work regardless of the location of the letter and whether it is an uppercase or lowercase letter
2- You must use the variable with what you learned to make the condition true
*/


//===============  1 ================= 



let st = "Elzero Web School";

if (st.match(/w/gi).join("").toLowerCase() === "w") {
  console.log("Good");
}

if (typeof st.length !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.split(" ")[0].repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
