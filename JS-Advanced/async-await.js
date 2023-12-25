//-----------------------------------------Async - await ------------------------------
/*

`async`:

The keyword "async" is used to define functions that perform operations asynchronously.
Async allows the execution of operations without pausing the main program execution.


`await`:

Used within functions declared with `async`.
It is used to wait for the completion of asynchronous operations, such as calling functions that rely on promises.
Ensures that the program pauses and waits until the operation is completed before proceeding with the next set of code.

*/

// --- EX-1 ----
async function example() {
  console.log("start");

  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log(" end");
}

// example();

// --- EX-2 ----

async function fetchData() {
  console.log("Start");

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();

    console.log("data is", data);
  } catch (error) {
    console.error("error", error);
  }

  console.log("end");
}

fetchData();
