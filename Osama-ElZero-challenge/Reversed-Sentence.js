//https://elzero.org/reversed-sentence-challenge/ (link)

/*
 */

reverse = (e) => {
  let x = e.split(" ").reverse().join(" ");
  return x;
};

// Testing Ouput
console.log(reverse("Elzero Web School")); // "School Web Elzero"
