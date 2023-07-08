// https://elzero.org/javascript-bootcamp-assignments-lesson-from-123-to-133/ (link)

//===============  1 =======================

let setOfNumber = new Set([10]);
setOfNumber.add(20).add(setOfNumber.size);

let myArr = Array.from(setOfNumber);

console.log(myArr[2]);

//=============== 2 =======================

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

myFriends = [...new Set(myFriends.sort())];
console.log(myFriends);

// Needed Output
//(4)[("Ahmed", "Mahmoud", "Osama", "Sayed")];

//=============== 3 =======================

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let myInfoEntries = Object.entries(myInfo);

let newMap = new Map(myInfoEntries);

console.log(newMap);

console.log(newMap.size);

console.log(newMap.has("role"));

/*

// Needed Output
Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
3
true
*/

//=============== 4 =======================

let theNumber = 100020003000;

let arr = +Array.from(new Set(`${theNumber}`.split("")))
  .sort()
  .join("");

console.log(arr);
// 123;

//=============== 5 =======================

let theName = "Elzero";
let a = [];

let one = Array.from(theName);
let two = new Set(theName);
let three = theName.split("");
let four = [...theName];
let five = theName.split("").map((e) => a.push(e));
let six = Object.assign([], theName);

console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(a);
console.log(six);
// Needed Output
// ["E", "l", "z", "e", "r", "o"];

//=============== 6 =======================
let chars = ["Z", "Y", "A", "D", "E", 10, 1];

chars.sort().copyWithin(0, chars.filter((e) => typeof e == "number").length);

console.log(chars);

//=============== 7 =======================

let numOne = [1, 2, 3];
let numTwo = [4, 5, 6];

let con1 = numOne.concat(numTwo);

let con2 = [...numOne, ...numTwo];

let con3 = [].concat(numOne, numTwo);

let con4 = new Set([...numOne, ...numTwo]);

console.log(con1);
console.log(con2);
console.log(con3);
console.log(con4);

// Needed Output
// [1, 2, 3, 4, 5, 6]

//=============== 8 =======================

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// let st = +[...new Set(`${[...n1, ...n2]}`)].filter(e => e <= 2).sort((a, b) => b - a).join("")

console.log(Math.max(...n1) * [...n1, ...n2].length); // 210

// console.log(st)

// Needed Output
// 210;
