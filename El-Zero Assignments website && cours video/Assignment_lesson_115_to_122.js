//https://elzero.org/javascript-bootcamp-assignments-lesson-from-115-to-122/

//=========== 1 =============

// let myNumbers = [1, 2, 3, 4, 5];

// let [a, , , , e] = myNumbers;

// console.log(a * e); // 5

//=========== 2 =============

// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// let [a,b,c,[d,e,[f,g]]] = mySkills

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

//=========== 3 =============

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// let arr = arr3.concat(arr1)
// let [, a, b, c] = arr

// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed

//=========== 4 =============

/*
const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

({age:a , working:w , country:c ,hobbies:[h1,,h3]} = member)

console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming
*/

//=========== 5 =============

/*
const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};



const {title: t, developer: d, releases: {"Oath In Felghana" :[o, u, j], "Ark Of Napishtim": {US: u_price, JAP: j_price}, Origin: or}} = game


console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love Ark Of Napishtim`);
// Although I Love Ark Of Napishtim

console.log(`Ark Of Napishtim Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`Ark Of Napishtim Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

*/

//=========== 6 =============

// let chosen = 1;

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];
// let [one, two, three] = myFriends;
// let n = chosen === 1 ? one : chosen === 2 ? two : three;

// console.log(n.title);
// console.log(n.age);
// console.log(n.available ? "Available" : "Not Available");
// console.log(n.skills[1]);

//=========== 6 ============= ++

let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];
let [one, two, three] = myFriends;
let n = chosen === 1 ? one : chosen === 2 ? two : three;

let FriendDetails = (n) => {
  let {
    title: t,
    age: a,
    available: av,
    skills: [, s],
  } = n;

  console.log(t);
  console.log(a);
  console.log(av ? "Available" : "Not Available");
  console.log(s);
};
FriendDetails(n);

/*
("Osama");
39;
("Available");
("CSS");

// If chosen === 2

("Ahmed");
25;
("Not Available");
("Django");

// If chosen === 3

("Sayed");
33;
("Available");
("Laravel");
*/
