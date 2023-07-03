//https://elzero.org/javascript-bootcamp-assignments-lesson-from-079-to-085/ (link)

//==========================================================================

//Assignment 1

let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: () =>
    `My Name ${this.name} My Age Is ${this.age} I Live In ${this.country}`,
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

console.log("##".repeat(15));

//==========================================================================

//Assignment 2

// Method One
let objMethodOne = {
  property: "Method One",
};

console.log(objMethodOne.property); // "Method One"

// Method Two
let objMethodTwo = new Object();
objMethodTwo.property = "Method Two";

console.log(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree = Object.create({});
objMethodThree.property = "Method Three";

console.log(objMethodThree.property); // "Method Three"

// Method Four
let objMethodFour = Object.assign({}, { property: "Method Four" });
console.log(objMethodFour.property); // "Method Four"



console.log("##".repeat(15));

//==========================================================================

//Assignment 3

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({}, { a }, threeNums, twoNums);
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

console.log("##".repeat(15));

//==========================================================================

//Assignment 4

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;
let gameName = Object.keys(myFavGames);

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${gameName[i]}`);
  console.log(`The Publisher Is ${myFavGames[gameName[i]]["publisher"]}`);
  console.log(`The Price Is ${myFavGames[gameName[i]]["price"]}`);

  // Check If Nested Object Has Property (bestThree)
  if (Object.hasOwn(myFavGames[gameName[i]], "bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[gameName[i]]["bestThree"]["one"]}`);
    console.log(`Second => ${myFavGames[gameName[i]]["bestThree"]["two"]}`);
    console.log(`Third => ${myFavGames[gameName[i]]["bestThree"]["three"]}`);
  }
  console.log("++".repeat(20));
}

// Ouput

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"


console.log("##".repeat(15));

