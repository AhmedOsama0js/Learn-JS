//https://elzero.org/programming-find-index-position/

/*

*/

find_position_for = (e) => {
  let newE = e.toLocaleLowerCase();
  let key = "abcdefghijklmnopqrstuvwxyz";
  return key.split("").map((x) => {
    newE == x ? console.log(key.indexOf(x) + 1) : "not found";
  });
};

//Testing Ouput
find_position_for("c"); //3
find_position_for("P"); // 16
