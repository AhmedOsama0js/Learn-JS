// https://youtu.be/yCogS7sHyxk (link)

/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

/////////// 11 +  20  +  80  - 11 = 100

console.log(++a + +b++ + +c++ - +a++); // 100
/*
  [++a] [+] [+] [b++] [+] [+] [c++] [-] [+] [a++]

  [++a]  
  - Value: 11
  - Explain: Pre Increment

  [+] 
  - Value: +
  - Explain: Addition Operator

  [+] 
  - Value: Type Coercion
  - Explain: transformation from (string) to (number)

  [b++] 
  - Value: 20
  - Explain: post Increment
  
  [+] 
  - Value: +
  - Explain: Addition Operator
  
  [+] 
  - Value: +
  - Explain: Type Coercion to (number)
  
  [c++] 
  - Value: 80
  - Explain: post Increment
  
  [-] 
  - Value: -
  - Explain: Subtraction
  
  [+] 
  - Value: +
  - Explain: Type Coercion to (number)
  
  [a++] 
  - Value: 11
  - Explain: post Increment
  
  */

//////////13  + -21 + 81 - -13  + 14 =  100

console.log(++a + -b + +c++ - -a++ + +a); // 100

/*
  [++a] [+] [-] [b] [+] [+] [c++] [-] [-] [a++] [+] [+] [a]
  
  [++a] 
  - Value: 13
  - Explain: Pre Increment

  [+]
  - Value: +
  - Explain: Addition Operator

  [-]
  - Value:  -
  - Explain: transformation  From positive to negative

  [b]
  - Value: -21
  - Explain: 

  [+]
  - Value: +
  - Explain: Addition Operator

  [+] 
  - Value: +
  - Explain: Type Coercion to (number)

  [c++] 
  - Value: 81
  - Explain: post Increment

  [-]
  - Value: -
  - Explain: Subtraction

  [-]
  - Value: +
  - Explain: transformation  From positive

  [a++]
  - Value: -13
  - Explain: post Increment

  [+]
  - Value: +
  - Explain: Addition Operator

  [+]
  - Value: +
  - Explain: Type Coercion to (number)

  [a]
  - Value: 14
  - Explain: value
*/
////////// 81 + 21 +  13  *  21  - 22 * 13 +  12  -  1 = 100
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 100
/*
[--c] [+] [+] [b] [+] [--a] [*] [+] [b++] [-] [+] [b] [*] [a] [+] [--a] [+] [true]

  [--c]
  - Value: 81
  - Explain: Pre Decrement

  [+]
  - Value: +
  - Explain: Addition Operator

  [+]
  - Value: +
  - Explain: transformation from (string) to (number)

  [b]
  - Value: 21
  - Explain: value

  [+]
  - Value: +
  - Explain: Addition Operator

  [--a]
  - Value: 13
  - Explain: Pre Decrement

  [*]
  - Value: *
  - Explain: Multiplication

  [+]
  - Value: +
  - Explain: transformation from (string) to (number)

  [b++] 
  - Value: 21
  - Explain: post Increment

  [-]
  - Value: -
  - Explain: Subtraction

  [+]
  - Value: +
  - Explain: Type Coercion to (number)

  [b]
  - Value: 22
  - Explain: value

  [*]
  - Value: *
  - Explain: Multiplication

  [a]
  - Value: 13
  - Explain: value

  [+]
  - Value: +
  - Explain: Addition Operator

  [--a]
  - Value: 12
  - Explain: Pre Decrement

  [-]
  - Value: -
  - Explain: Subtraction

  [+]
  - Value: +
  - Explain: Type Coercion to (number)

  [true]
  - Value: 1
  - Explain: true = 1 
*/

//===============================================================

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(+e * -d); // 2000
console.log(-d + ++e * ++g + ++f); // 173
