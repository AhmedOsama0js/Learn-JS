//https://www.codewars.com/kata/523f5d21c841566fde000009 (link)


/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

*/



const arrayDiff = (a, b) => b.includes(a) ? 0 : a.filter((e) => !b.includes(e));