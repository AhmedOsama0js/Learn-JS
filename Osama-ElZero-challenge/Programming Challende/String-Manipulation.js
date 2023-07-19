//https://elzero.org/string-manipulation-challenge/ (link)


/*
1- Include This Method In Your Solution [slice, charAt]
2- 8 H
3- Use Only "substr" Method + Template Literals In Your Solution
4- Solution Must Be Dynamic Because String May Changes
*/

let a = "Elzero Web School";


// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + [...a].slice(3,6).join("")); // Zero

// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ")[0]); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 6)} ${[...a].slice(11).join("")}`); // Elzero School


// Solution Must Be Dynamic Because String May Changes
console.log(a.split(" ").map((e) => e[0].toLowerCase()+e.slice(1,e.length-1).toUpperCase()+e[e.length-1].toLowerCase()).join(" ")); // eLZERO WEB SCHOOl