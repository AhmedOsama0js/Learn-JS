// https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript (link)

/*

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust)

*/

// bonusTime = (salary, bonus) =>
//   bonus == true ? `£${salary * 10}` : `£${salary}`;

bonusTime = (salary, bonus) => "£" + (bonus ? salary * 10 : salary);

console.log(bonusTime(100, true));
