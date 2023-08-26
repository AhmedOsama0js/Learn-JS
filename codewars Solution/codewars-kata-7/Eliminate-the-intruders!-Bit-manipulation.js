//https://www.codewars.com/kata/5a0d38c9697598b67a000041/ (link)

/*
Task
You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

In practice, you should implement this function:
*/

function eliminateUnsetBits(number) {
  num = number.split("").filter((e) => e == "1");
  let n = 0;
  for (let i = 0; i < num.length; i++) {
    n += 2 ** i;
  }
  return n;
}
console.log(eliminateUnsetBits("1000000"));
