// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript (link)

function sumArray(array) {
  if (array == null) return 0;
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, current) => acc + current, 0);
}
console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));