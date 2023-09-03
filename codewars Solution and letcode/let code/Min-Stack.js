//https://leetcode.com/problems/min-stack/description/ (link)

/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.
*/

class MinStack {
  constructor() {
    this.arrOfStack = [];
    this.arrOfMainStack = [];
  }

  push(e) {
    if (this.arrOfStack.length == 0) {
      this.arrOfMainStack.push(e);
    } else {
      let min = Math.min(
        e,
        this.arrOfMainStack[this.arrOfMainStack.length - 1]
      );
      this.arrOfMainStack.push(min);
    }
    this.arrOfStack.push(e);
  }

  pop() {
    this.arrOfStack.pop();
    this.arrOfMainStack.pop();
  }

  top() {
    return this.arrOfStack[this.arrOfStack.length - 1];
  }

  getMin() {
    return this.arrOfMainStack[this.arrOfMainStack.length - 1];
  }
}

const s = new Stack();

s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(-1);
s.pop();
s.pop();
console.log(s.arrOfStack);
console.log(s.arrOfMainStack);
