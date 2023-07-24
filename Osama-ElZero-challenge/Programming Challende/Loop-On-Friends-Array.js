// https://elzero.org/loop-on-friends-array-challenge/ (link)

/*

Introduction to the challenge
Print the names of your friends from inside the Array, except for names that start with a lowercase letter and numbers
Required
You must print all the names in the Array except for any name that begins with a lowercase letter or numbers
You must print the number of each person according to their order in the Array, excluding the name that begins with a lowercase letter or the numbers
You have to make sure that the code will work if we change the elements of the array
challenges
To use Foreach to make the loop if you do the solution in PHP

*/

// Input
let myfriends = ["Ahmed", 20, 10, "Sayed", "Ali", "Shaimaa", "ibrahim", "Noha"];

//================================== 1 ===================

function arr(a) {
  a.filter((e) => typeof e === "string" && e.match(/\b[A-Z]/g)).forEach(
    (e, i) => console.log(`${i} - ${e}`)
  );
}

//================================== 2 ===================

// function arr(a) {
//   a = a.filter((e) => typeof e === "string" && e.match(/\b[A-Z]/g));
//   for (let i = 0; i < a.length; i++) {
//     console.log(`${i} - ${a[i]}`);
//   }
// }

arr(myfriends);

// Output
// 1 - Ahmed;
// 2 - Sayed;
// 3 - Ali;
// 4 - Shaimaa;
// 5 - Noha;
