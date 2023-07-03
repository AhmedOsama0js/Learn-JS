//https://elzero.org/javascript-2021-loop-challenge/ (link)

/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];
let newAdmins;
let con = 0;
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  newAdmins = i + 1;
}
document.write(`<h3>Ww Have ${newAdmins} Admins</h3>`);
for (let i = 0; i < newAdmins; i++) {
  document.write(`<hr>`);
  document.write(`<div>`);
  document.write(`<p>The Admin For Team ${i + 1} Is ${myAdmins[i]}</p>`);
  document.write(`<h3>Team Members :</h3>`);
  for (let k = 0; k < myEmployees.length; k++) {
    if (myAdmins[i][0] === myEmployees[k][0]) {
      document.write(`<p>- ${++con}-  ${myEmployees[k]}</p>`);
    }
  }
  document.write(`</div>`);
  con = 0;
}
