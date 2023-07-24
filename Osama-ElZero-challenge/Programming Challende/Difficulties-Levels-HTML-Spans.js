//https://elzero.org/difficulties-levels-html-spans-challenge/ (link)


/*

Required
You have 5 levels of difficulty
We will create a Loop that prints 5 elements of type Span
If a person chooses difficulty level 1, a Class named check is placed on the first Span
If one selects difficulty level 2, a Class named check is placed on the first and second Span
If a person chooses difficulty level 5, then a Class named check is placed on all Spans, and so on
Our difficulty levels are [Very Easy, Easy, Medium, Hard, Very Hard]
Each of the levels must be printed on the Spans in order within the Title Attribute
challenges
It is forbidden to use the switch
It is forbidden to repeat the code, and the code must work if the difficulties are changed from 5 to any other number

*/


const spans = document.querySelectorAll("span");

for (let i = 0; i < spans.length; i++) {
  spans[i].addEventListener("click", () => {
    for (let j = 0; j < spans.length; j++) {
      if (j <= i) {
        spans[j].classList.add("chick");
      } else {
        spans[j].classList.remove("chick");
      }
    }
  });
}