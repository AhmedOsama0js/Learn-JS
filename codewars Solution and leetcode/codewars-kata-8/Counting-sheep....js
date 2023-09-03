//https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript (link)

/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
For example
*/

function countSheeps(arrayOfSheep) {
  let cons = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] == true) cons++;
  }
  return cons;
}

//=======================================================================
//another solution
// function countSheeps(arr) {
// return arr.filter(Boolean).length;
// }
