// https://elzero.org/typescript-assignments-lessons-from-22-to-31/ (link)

//----------------------------- 1 ---------------------

// Edit The Interface To Fix The Problems

// interface Member {
//   id: number |string;
//   username: string;
//   country?: string;
//   state: boolean;
//   getName : () => string
// }

// // Do Not Edit The Code Below
// let users: Member = {
//   id: 100,
//   username: "Elzero",
//   state: true,
//   getName() {
//     return this.username;
//   }
// }

// users.id = 200;
// users.id = "200";
// users.state = false;

// console.log(user);



//----------------------------- 2 ---------------------


// Create Interface Here
interface Client {
  id: number,
  username: string,
  active: boolean,
  discount: number,
  getPrice : (price:number) => number
}

// Do Not Edit The Code Below
let client: Client = {
  id: 100,
  username: "Elzero",
  active: true,
  discount: 10,
  getPrice(price) {
    return price - this.discount;
  }
}

console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Discount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);


//----------------------------- 3 ---------------------

// Do Not Edit The Code Below
interface Man {
  title: string;
  weight: number;
  age: number;
}

interface Bird {
  canFly: boolean;
}

interface Superman extends Man, Bird{
  bodyType: string
  origin :string
}

let creature: Superman = {
  title: "Superman",
  weight: 100,
  age: 500,
  canFly: true,
  bodyType: "Iron",
  origin: "Krypton"
}

console.log(creature);

  //----------------------------- 4 ---------------------
  
//   class Player {
//     U: string
//     T: string
//   L: number | string
//   S?: boolean
//   constructor(UserName: string, Type: string, Level: number | string, State?: boolean) {
//     this.U = UserName,
//       this.T = Type,
//       this.L = Level, 
//       this.S = State
//   }

//   details  = (): string => {
//     return `${this.S ? "VIP" : ""} ${this.U}, Type Is ${this.T} Level Is ${this.L}`
//   }
// }

// // Do Not Edit The Code Below
// let player1 = new Player("Osama", "Mage", 90, true);
// let player2 = new Player("Shady", "Archer", "85", false);
// let player3 = new Player("Amr", "Fighter", 50, true);
// let player4 = new Player("Mahmoud", "Assassin", 77);

// console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
// console.log(player2.details()); // Shady, Type Is Archer Level Is 85
// console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
// console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77

  //----------------------------- 5 ---------------------
  
  class Shorten {
    constructor(public id: number, public username: string, protected title: string) {}
}

// let tester = new Shorten(100, "Elzero", "Developer");

// console.log(tester.id);
// console.log(tester.username);

    //----------------------------- 6 ---------------------
    
    class Show {
      constructor(private _title: string) { }
  
   get title(): string {
    return this._title;
  }

   set title(value :string) {
    this._title = value;
  }
}

let tester = new Show("Elzero");

console.log(tester.title); 
tester.title = "Osama"; 
console.log(tester.title); 

    //----------------------------- 7 ---------------------
  interface Play {
  id: number;
  title: string;
  level: number | string;
  logIn(): void;
  logOut(msg: string): void;
}

class Player implements Play {
  id: number
  title: string
  level: string | number;

  constructor(id: number, title: string, level: number | string) {
    this.id = id
    this.title = title
    this.level = level
  }
  logIn () {
  return "Logged In"
}
  logOut (s:string) : string {
   return `Logged Out, ${s}`
  }
}

let player1 = new Player(100, "Elzero", 95);

console.log(player1.id); // 100
console.log(player1.title); // "Elzero"
console.log(player1.level); // 95
player1.logIn(); // Logged In
player1.logOut("Good Bye"); // Logged Out, Good Bye