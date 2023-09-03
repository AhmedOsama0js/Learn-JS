class Stack {
  constructor() {
    this.item = [];
    this.index = 0;
  }

  push(e) {
    this.item.push(e);
    this.index++;
  }

  pop() {
    if (this.item.length <= 0) return;
    this.index--;
    this.item.pop();
  }

  isEmpty() {
    return this.item.length <= 0 ? "is Empty" : "is Not Empty";
  }

  size() {
    return `the size => ${this.index}`;
  }

  getELe() {
    return this.item;
  }

  clearAll() {
    this.item = [];
    this.index = 0;
  }
}

s = new Stack();

s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.pop();
s.pop();
s.pop();
s.push(2);
s.push(3);
s.push(4);
s.clearAll();
s.push(1);
s.push(2);
s.push(3);
console.log(s.getELe());
console.log(s.size());
console.log(s.isEmpty());
