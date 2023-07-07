//https://elzero.org/sort-name-by-length-and-letter-case-challenge/(link)


/*

Arrange the names from smallest to largest in terms of the number of letters, and names with lowercase letters first and we only need names that start with the letter A
Notes
Choose the language you want to do the challenge
The solution must be done in at least two ways in whatever programming language you choose
Requests
Create a Function that accepts one Parameter from you, which is the Array that contains the names
Any name that does not start with the letter A must be cancelled
Names must be arranged in order of smallest to largest in terms of the number of letters
Names must be in lowercase letters first
If there are two names with the same number of letters, we arrange them alphabetically
It must return names after sorting into an Array
*/


do_sort = (names) => {
  let arra = []
  let arrA = []
  names = names.filter((e) => e[0] == "a" || e[0] == "A");
  for (let i = 0; i < names.length; i++) {
    names[i][0] == "a"? arra.push(names[i] ): arrA.push(names[i])
    }
    return arra.sort((a, b) => a.length - b.length).concat(arrA.sort((a, b) => a.length - b.length));
  }




console.log(do_sort(["Ameer", "alsayed", "Mahmoud", "Ahmed", "ayman", "Israa", "Anas", "amal", "amr", "aml"]))
// # ['amr', 'aml', 'amal', 'ayman', 'alsayed', 'Anas', 'Ameer', 'Ahmed']