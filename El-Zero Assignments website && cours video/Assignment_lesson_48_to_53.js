//https://elzero.org/javascript-bootcamp-assignments-lesson-from-048-to-053/ (link)

//=======================================================================

//Assignment 1
{
  let start = 10;
  let end = 100;
  let exclude = 40;

  for (let i = start; i <= end; i += start) {
    if (i == exclude) {
      continue;
    } else {
      console.log(`${i}`);
    }
  }

  // Output
  // 10;
  // 20;
  // 30;
  // 50;
  // 60;
  // 70;
  // 80;
  // 90;
  // 100;
  console.log(`${"==".repeat(15)}`);
}

//=======================================================================

//Assignment 2
{
  let start = 10;
  let end = 0;
  let stop = 3;

  for (let i = start; i > end; i--) {
    if (i >= start) {
      console.log(`${i}`);
    } else {
      console.log(`0${i}`);
    }
    if (i == stop) {
      break;
    }
  }
  // Output
  // 10;
  // 09;
  // 08;
  // 07;
  // 06;
  // 05;
  // 04;
  // 03;
  console.log(`${"==".repeat(15)}`);
}
//=======================================================================

//Assignment 3

{
  let start = 1;
  let end = 6;
  let breaker = 2;

  for (let i = start; i <= end; i++) {
    console.log(`${i}`);
    for (let k = start; k < end; k++) {
      if (k % breaker == +false) {
        console.log(`--${k}`);
      }
    }
  }
  // Output
  // 1
  // -- 2
  // -- 4
  // 2
  // -- 2
  // -- 4
  // 3
  // -- 2
  // -- 4
  // 4
  // -- 2
  // -- 4
  // 5
  // -- 2
  // -- 4
  // 6
  // -- 2
  // -- 4
  console.log(`${"==".repeat(15)}`);
}
//=======================================================================

//Assignment 4

{
  let index = 10;
  let jump = 2;

  for (;;) {
    console.log(`${index}`);
    index -= jump;
    if (index === jump) break;
  }
}

// Output
// 10
// 8
// 6
// 4
console.log(`${"==".repeat(15)}`);

//=======================================================================

//Assignment 5
{
  let friends = [
    "Ahmed",
    "Sayed",
    "Eman",
    "Mahmoud",
    "Ameer",
    "Osama",
    "Sameh",
  ];
  let letter = "a";

  for (let i = +false; i < friends.length; i++) {
    if (friends[i][+false] === letter.toLocaleUpperCase()) {
      continue;
    }
    console.log(`"${i} => ${friends[i]}"`);
  }
  // Output
  // "1 => Sayed"
  // "2 => Eman"
  // "3 => Mahmoud"
  // "4 => Osama"
  // "5 => Sameh"
  console.log(`${"==".repeat(15)}`);
}

//=======================================================================

//Assignment 6

{
  let start = 0;
  let swappedName = "elZerO";
  let newValue = "";
  for (let i = start; i < swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toUpperCase()) {
      newValue += swappedName[i].toLowerCase();
    } else if (swappedName[i] === swappedName[i].toLowerCase()) {
      newValue += swappedName[i].toUpperCase();
    }
  }
  console.log(newValue);

  // Output
  // ("ELzERo");
  console.log(`${"==".repeat(15)}`);
}

//=======================================================================

//Assignment 7

{
  let start = 0;
  let mix = [1, 2, 3, "A", "B", "C", 4];

  for (let i = 0; i < mix.length; i++) {
    if (typeof mix[i] == "string") {
      continue;
    } else if (mix[i] === +true) {
      continue;
    }
    console.log(`${mix[i]}`);
  }
  // Output
  // 2;
  // 3;
  // 4;
}
