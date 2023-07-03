   //https://www.codewars.com/kata/52597aa56021e91c93000cb0 (link)


   /*

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
   */


function moveZeros(par) {
  return par.sort((a, b) => (a === 0 ? 1 : b === 0 ? -1 : 0));
}