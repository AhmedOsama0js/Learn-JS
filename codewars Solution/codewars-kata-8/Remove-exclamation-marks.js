//https://www.codewars.com/kata/57a0885cbb9944e24c00008e (link)

/*

Write function RemoveExclamationMarks which removes all
exclamation marks from a given string.

*/

//Solution1

// const removeExclamationMarks = (s) => s.split("").filter((e) => e !== "!").join("")

//Solution2

const removeExclamationMarks = (s) => s.replaceAll("!", "");

console.log(removeExclamationMarks("Hello W!!!!ld!"));
