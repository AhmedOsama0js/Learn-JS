// https://leetcode.com/problems/generate-fibonacci-sequence/description/  (link);

/*
Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

*/

function* fibGenerator() {
  let prev = 0;
  let curr = 1;
  yield prev;
  yield curr;

  while (true) {
    const next = prev + curr;
    yield next;
    prev = curr;
    curr = next;
  }
}


const generator = fibGenerator();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
