// https://elzero.org/smallest-number-in-mixed-list-challenge/ (link)

/*

Find the smallest number in the list items
Required
Find the smallest number in the list items
From the center of the English letters, special letters and numbers with only the smallest number printed
*/

function found(num) {
  num = num.filter((e) => typeof e == "number").sort();
  return num[0];
}

console.log(found([115, 20, 10, "A", "!", "@", 13, 1, 5, 2, "X", "C"]));
