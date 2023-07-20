//https://elzero.org/javascript-bootcamp-assignments-lesson-from-159-to-168/ (link)

//============== 1 =========================

let dateNow = new Date().getTime();
let myDate = new Date("Apr 1, 97").getTime();
let theDate = dateNow - myDate;

console.log(`${Math.floor(theDate / 1000)} seconds`);
console.log(`${Math.floor(theDate / (1000 * 60))} Minutes`);
console.log(`${Math.floor(theDate / (1000 * 60 * 60))} Hours`);
console.log(`${Math.floor(theDate / (1000 * 60 * 60 * 24))} Days`);
console.log(`${Math.floor(theDate / (1000 * 60 * 60 * 24 * 12))} Months`);
console.log(`${Math.floor(theDate / (1000 * 60 * 60 * 24 * 365))} Years`);

// Output =
// Needed Output

// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"

console.log("#".repeat(20));

//============== 2 =========================

let d = new Date();
d.setTime(1000);
d.setFullYear(1980);
d.setHours(0);
console.log(d);

// Needed Output

// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

console.log("#".repeat(20));

//============== 3 =========================

let c = new Date();
c.setDate(0);

console.log(c);
console.log(
  `Previous Month Is ${
    c.toDateString().split(" ")[1]
  } And Last Day Is  ${c.getDate()}`
);
// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"

console.log("#".repeat(20));

//============== 4 =========================

myDate1 = new Date(1997, 3);
console.log(myDate1);
myDate2 = new Date(859845600000);
console.log(myDate2);
myDate3 = new Date("97-04");
console.log(myDate3);

// Needed Outputconst

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"

console.log("#".repeat(20));

//============== 5 =========================

// const t0 = performance.now();
// function name() {
//   for (let i = 0; i < 99; i++) {
//     document.write(`<div>${i}</div>`)
//   }
// }
// name()
// const t1 = performance.now();
// console.log(`Loop Took ${Math.floor((t1 - t0 ))} Milliseconds.`);

// Needed Output
// Loop Took 1994 Milliseconds.

console.log("#".repeat(20));

//============== 6 =========================

function* gen() {
  let index = 14;
  let num = 140;
  let sum = index + num;
  while (true) {
    yield (sum += num += 200);
  }
}

let generator = gen();
console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

console.log("#".repeat(20));

//============== 7 =========================

function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

function* genAll() {
  yield* [...new Set(genNumbers())];
  yield* [...new Set(genLetters())];
}

generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}

console.log("#".repeat(20));
