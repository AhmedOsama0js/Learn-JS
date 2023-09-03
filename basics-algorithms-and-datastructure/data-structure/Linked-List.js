class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  addLast(data) {
    let node = new Node(data);
    let ele = this.head;
    if (!ele) {
      ele = node;
    } else {
      while (ele.next) {
        ele = ele.next;
      }
      ele.next = node;
    }
    this.size++;
  }

  getData() {
    let arrAllData = [];
    let ele = this.head;
    while (ele) {
      arrAllData.push(ele.data);
      ele = ele.next;
    }
    return arrAllData;
  }

  deleteLastNode() {
    if (this.head === null) {
      return;
    }

    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let secondLast = null;
    let last = this.head;

    while (last.next !== null) {
      secondLast = last;
      last = last.next;
    }

    secondLast.next = null;
    this.size--;
  }
  deleteFirstNode() {
    if (this.head === null) {
      return;
    }

    this.head = this.head.next;
    this.size--;
  }

}

const linked = new linkedList();

linked.addFirst(10);
linked.addFirst(20);
linked.addFirst(30);
linked.addFirst(100);
linked.addFirst(200);
linked.addLast(40);
linked.addLast(50);
linked.addLast(60);
linked.addLast(70);
linked.deleteLastNode();
linked.deleteLastNode();
linked.deleteLastNode();
linked.deleteFirstNode();

console.log(linked.getData());
console.log(linked);
