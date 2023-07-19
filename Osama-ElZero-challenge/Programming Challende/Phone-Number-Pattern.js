//https://elzero.org/programming-phone-pattern/ (link)


/*
Introduction to the challenge
Print the numbers in the list as phone numbers, as in the following example
(123) 456-7890
Notes
Choose the language you want to do the challenge
The solution must be done in at least two ways in whatever programming language you choose
Requests
Run the function with name format_phone accepts parameter as one
That the number in the list be 10 that that parameter prints it
*/

function format_phone(n) {
  if (n.length !== 10) return `Invalid Phone Number`;
  n = n.join("");
  return `(${n.slice(0, 4)}) ${n.slice(4, 7)}-${n.slice(7)}`;
}


// function format_phone(n) {
//   n = n.join("")
//   const regex = /^(\d{3})(\d{3})(\d{4})$/;
//   if (regex.test(n)) {
//     return n.replace(regex, "($1) $2-$3");
//   }
//   return "Invalid phone number";
// }


console.log(format_phone([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
console.log(format_phone([6, 2, 4, 7, 2, 1, 0, 2, 1, 1])); // (624) 721-0211
console.log(format_phone([1, 5, 5, 4, 9, 8, 6, 7, 1, 2, 1])); // Invalid Phone Number
