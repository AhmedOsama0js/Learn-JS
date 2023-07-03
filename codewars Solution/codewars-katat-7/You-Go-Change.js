//https://www.codewars.com/kata/5966f6343c0702d1dc00004c/train/javascript (link)

/*

Create a function that will take any amount of amount and break it down to the smallest number of bills as possible. Only integer amounts will be input, NO floats. This function should output a sequence, where each element in the array represents the amount of a certain bill type. The array will be set up in this manner:

array[0] ---> represents $1 bills

array[1] ---> represents $5 bills

array[2] ---> represents $10 bills

array[3] ---> represents $20 bills

array[4] ---> represents $50 bills

array[5] ---> represents $100 bills

In the case below, we broke up $365 into 1 $5 bill, 1 $10 bill, 1 $50 bill, and 3 $100 bills:

365 =>  [0,1,1,0,1,3]
In this next case, we broke $217 into 2 $1 bills, 1 $5 bill, 1 $10 bill, and 2 $100 bills:

217 => [2,1,1,0,0,2]
*/

function giveChange(amount) {
  let bills = [0, 0, 0, 0, 0, 0];

  bills[5] = Math.floor(amount / 100);
  amount = amount % 100;

  bills[4] = Math.floor(amount / 50);
  amount = amount % 50;

  bills[3] = Math.floor(amount / 20);
  amount = amount % 20;

  bills[2] = Math.floor(amount / 10);
  amount = amount % 10;

  bills[1] = Math.floor(amount / 5);
  amount = amount % 5;

  bills[0] = amount;

  return bills;
}
console.log(giveChange(365));
