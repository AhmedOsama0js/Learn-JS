//https://www.codewars.com/kata/5a023c426975981341000014/train/javascript (link)

/*
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.
*/

otherAngle = (a, b) => 180 - (a + b);

console.log(otherAngle(60, 40));
