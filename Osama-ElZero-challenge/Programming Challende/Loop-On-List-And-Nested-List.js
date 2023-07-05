//https://elzero.org/loop-on-list-and-nested-list-challenge/

/*
Print the menu and its submenu as in the example
It is required to make a loop on the main menu and put - before the name of the skill
Checking the item if it is a List we loop on it and put — before the skill name
Any number in the list do not print
*/

let my_skills = ["HTML", 20, "JS", "Python", ["Flask", "Django"], "MySQL", 10];

function printSkills(skills) {
  return skills.filter((e) =>
    typeof e == "string"
      ? console.log(`- ${e}`)
      : typeof e == "object"
      ? e.filter((n) => console.log(`--- ${n}`))
      : ""
  );
}

printSkills(my_skills);

// => Output
// - HTML
// - JS
// - Python
// --- Flask
// --- Django
// - MySQL
