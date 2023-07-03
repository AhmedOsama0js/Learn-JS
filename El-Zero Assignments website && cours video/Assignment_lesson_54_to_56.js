//https://elzero.org/javascript-bootcamp-assignments-lesson-from-054-to-056/ (link)

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let i = 0;
let counter = 0;

while (i < friends.length) {
  if (typeof friends[i] === "number" || friends[i].startsWith("A")) {
    i++;
    continue;
  }
  console.log(`" ${++counter} => ${friends[i]}"`);
  i++;
}
// Output
//("1 => Sayed");
//("2 => Mahmoud");
