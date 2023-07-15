//https://elzero.org/javascript-bootcamp-assignments-lesson-from-134-to-146/ (link)

//================ 1 ==============

console.log("#".repeat(30));

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

console.log(ip.match(/\d+:\w+:\d+:\d+:\d+:\d+:\d+:\d+/g));

//================ 2 ==============

console.log("#".repeat(30));

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

console.log(specialNames.match(/\bos\w+o\b/gi));
// Output
// ['Os10O', 'OsO', 'Os100O']

//================ 3 ==============

console.log("#".repeat(30));

let phone = "+(995)-123 (4567)";

console.log(phone.match(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g));

//================ 4 ==============

console.log("#".repeat(30));

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

/*





*/

//================ 5 ==============

console.log("#".repeat(30));

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let rE = /\d+(\/|\s)-?\s?\d+(\/|\s)-?\s?\d+/g;

console.log(date1.match(rE)); // "25/10/1982"
console.log(date2.match(rE)); // "25 - 10 - 1982"
console.log(date3.match(rE)); // "25 10 1982"
console.log(date4.match(rE)); // "25 10 82"

//================ 6 ==============

console.log("#".repeat(30));

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let Re =
  /((https?):\/\/)?(www+.)?\w+.\w+(:\d+\/\w+.\w{3}\?id=100&cat=topics)?/gi;

console.log(url1.match(Re));
console.log(url2.match(Re));
console.log(url3.match(Re));
console.log(url4.match(Re));
console.log(url5.match(Re));
