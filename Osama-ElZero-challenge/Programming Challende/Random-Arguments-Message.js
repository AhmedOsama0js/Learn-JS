//https://elzero.org/random-arguments-message-challenge/ (link)

/*
Introduction to the challenge
Print a Boolean message from the unordered Arguments values
Required
Create a function called show_message
The job accepts three parameters from you: name, age, and work status. Their names are a, b, and c
The name is of type String, the enumeration is of type Integer, and the state is of type Boolean
When using the Function
A message appears on the back side of the Arabic language
Note that the message varies if the person is available or not

*/

function show_message(a, b, c) {
  let arr = [...[a, b, c]];

  for (let i = 0; i < arr.length; i++) {
    typeof arr[i] == "string"
      ? (a = arr[i])
      : typeof arr[i] == "number"
      ? (b = arr[i])
      : typeof arr[i] == "boolean"
      ? (c = arr[i])
      : "";
  }
  return `Hi ${a}, Age Is ${b}, ${c ? "Available" : "Not Available"}`;
}

// Test Cases
console.log(show_message("Osama", 38, true)); // "Hi Osama, Age Is 38, Available"
console.log(show_message(38, "Osama", true)); // "Hi Osama, Age Is 38, Available"
console.log(show_message(true, 38, "Osama")); // "Hi Osama, Age Is 38, Available"
console.log(show_message(false, "Osama", 38)); // "Hi Osama, Age Is 38, Not Available"
