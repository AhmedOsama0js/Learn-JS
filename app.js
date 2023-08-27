
var maxProfit = function (prices) {
  let realArr = prices.slice(0, prices.length);
  let arrSort = prices.sort();
  realArr = realArr.slice(realArr.indexOf(arrSort[0]));
  realArr = realArr.sort()
    if (realArr.length < 2) {
      return 0 ;
    } else {
      return realArr[realArr.length  - 1] - arrSort[0];
    }
};


// var maxProfit = function (prices) {
//   let realArr = prices.slice(0,prices.length)
//   let newArr = prices.sort()
//   console.log(realArr.length - 1);
//   realArr = realArr.slice(newArr[0], realArr.length - 1);
//   newArr = realArr.sort()
//   if (newArr.length < 2) {
//     return 0 ;
//   } else {
//     return newArr[newArr.length - 1] - newArr[0]
//   }
// };

console.log(maxProfit([7, 6, 4, 3, 1]));