//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ (link)




/*

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

*/



function maxProfit(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    const currentProfit = prices[i] - minPrice;
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    }
  }
  return maxProfit;
}

console.log(maxProfit([2, 4, 1]));

//xxxxxxxxxxxxx/xxx/xx/xxxxxx/xxxxxxxxxxxxxxxxx

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

// console.log(maxProfit([2, 4, 1]));

//xxxxxxxxxxxxx/xxx/xx/xxxxxx/xxxxxxxxxxxxxxxxx
