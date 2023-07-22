//https://elzero.org/get-previous-numbers-of-number-challenge/ (link)

/*



*/

function get_previous_numbers(num) {
  let arr = [];
  if (num <= 0) return `Negative Numbers & Zero Not Allowed`;
  if (num <= 10) {
    while (num > 0) {
      arr.push(num--);
    }
  }
  if (num > 10) {
    arr.push(num);
    while (num > 0) {
      if (num % 2 == 0) {
        arr.push(num--);
      }
      num--;
    }
  }
  return arr.join("");
}

console.log(get_previous_numbers(0)); // "Negative Numbers & Zero Not Allowed"
console.log(get_previous_numbers(-20)); // "Negative Numbers & Zero Not Allowed"
console.log(get_previous_numbers(10)); // 10987654321
console.log(get_previous_numbers(17)); // 17161412108642
