// https://leetcode.com/problems/interval-cancellation/description/ (link)

/*
Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

setTimeout(cancelFn, cancelTimeMs)
The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.

*/

let fn1 = (x) => x * 2,
  args1 = [4],
  t1 = 35;

let fn2 = (x1, x2) => x1 * x2,
  args2 = [2, 5],
  t2 = 30;

let fn3 = (x1, x2, x3) => x1 + x2 + x3,
  args3 = [5, 1, 3],
  t3 = 50;

// solution 1

var cancellable = function (fn, args, t) {
  fn(...args);
  let x = setInterval(() => fn(...args), t);
  return () => clearInterval(x);
};

//  Runtime 77 ms

console.log(cancellable(fn1, args1, t1));
// console.log(cancellable(fn2, args2, t2));
// console.log(cancellable(fn3, args3, t3));
