//https://elzero.org/javascript-bootcamp-assignments-lesson-from-147-to-158/ (link)

//======================= 1 =====================

class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run = function () {
    return ` Car Is Running Now`;
  };
  stop = function () {
    return `  Car Is Stopped`;
  };
}

let car1 = new Car("MG", 2022, 40000);
let car2 = new Car("BMW", 2023, 50000);
let car3 = new Car("Lanser", 2024, 60000);

console.log(
  `Car One Name Is ${car1.n} Model Is ${car1.m} And Price Is ${car1.p}`
);
console.log(car1.run());
// Needed Output

// ("Car One Name Is MG And Model Is 2022 And Price Is 420000");
// ("Car Is Running Now");

//======================= 2 =====================

console.log("##".repeat(20));

class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

class Tablet extends Phone {
  constructor(name, serial, price, size = "Unknown") {
    super(name, serial, price);
    this.size = size;
  }
  fullDetails = () => {
    return `${this.name} Serial Is ${this.serial} And Size Is ${this.size}`;
  };
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

//======================= 3 =====================

console.log("##".repeat(20));

// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
    User.showData;
  }
  getCard = function () {
    let ER = /\d{4}-\d{4}-\d{4}-\d{4}/g;
    if (`${this.#c}`.match(ER)) {
      return `${this.#c}`.match(ER).join("");
    } else {
      let C = `${this.#c}`;
      return `${C.slice(0, 4)}-${C.slice(4, 8)}-${C.slice(8, 12)}-${C.slice(
        12,
        16
      )}`;
    }
  };
  get showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.getCard()}`;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined

//======================= 4 =====================

console.log("##".repeat(20));

// Object.prototype.addLove = function () {
//   return `I Love ${this} Web School`;
// };

// // Do Not Edit Below
// let myStr = "Elzero";
// console.log(myStr.addLove()); // I Love Elzero Web School

//======================= 5 =====================

console.log("##".repeat(20));

const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

Object.defineProperties(myObj, {
  score: {
    writable: false,
    value: 100,
  },
  id: {
    enumerable: false,
    value: 100,
  },
});

delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}
