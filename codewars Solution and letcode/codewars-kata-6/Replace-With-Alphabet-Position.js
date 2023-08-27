//https://www.codewars.com/kata/546f922b54af40e1e90001da (link)



/*

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.


*/



//================== 1 =============


function alphabetPosition(n) {
  let s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let r = [];
  n.toUpperCase()
    .split("")
    .map((e) => r.push(s.indexOf(e) + 1));

  return r.filter((x) => (x = 0 ? "" : x)).join(" ");
}


// =======================    2   =============

function alphabetPosition(n) {
  let s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let r = [];
  n.toUpperCase()
    .split("")
    .map((e) => r.push(s.indexOf(e) + 1));
  return r.filter((x) => (x = 0 ? "" : x)).join(" ");
}