//https://academy.hsoub.com/files/27-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D8%A8%D9%84%D8%BA%D8%A9-%D8%AC%D8%A7%D9%81%D8%A7%D8%B3%D9%83%D8%B1%D8%A8%D8%AA/ (link)

//=========================================================================

//=== ex number 1
{

for (let x = "#"; x <= "#######"; x += "#") {
    console.log(x)
  }
}
  
console.log(`${"=====".repeat(10)}`)

  //===========================================================================
  //=== ex number 2

//   {
    
// let x = 0;

// while (x <= 100) {
//   x = x + 1;
//   if( x % 3 == 0){
//   console.log("Fizz");
//   } else if( x % 5 == 0){
//     console.log("Buzz");
//   } else {
//     console.log(x)
//   }
// }
// }


{
  
  //=== ex number 2

let x = 0;

  while (x < 100) {
    x = x + 1;
    if (x % 3 == 0) {
      console.log("FizzBuzz");
    } else if (x % 5 == 0) {
      console.log("FizzBuzz");
    } else {
      console.log(x);
  }
  }
}

console.log(`${"=====".repeat(10)}`)
//==============================================================================

//=== ex number 3

{
let z = ["#", " "];

for (let i = 0; i < 4; i++) {
  if (z[0] === "#") {
    console.log("#".repeat(8));
  }
  if (z[1] === " ") {
    console.log(` ${"#".repeat(8)}`);
  }
  }
}