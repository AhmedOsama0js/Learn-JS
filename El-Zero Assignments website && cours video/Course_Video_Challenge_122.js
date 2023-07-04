//https://elzero.org/javascript-2021-destructuring-challenge/ (link)

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
