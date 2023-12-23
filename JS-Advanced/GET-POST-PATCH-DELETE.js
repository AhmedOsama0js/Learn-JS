/*
1- GET Request (Retrieval):

Objective: Retrieve data from a specific source.
Effect: Does not impact server data; used for inquiry only.

2- POST Request (Sending):

Objective: Send data to a server to create a new resource.
Effect: Can impact server data by creating a new resource.

3- PUT Request (Full Update):

Objective: Update an entire resource on the server.
Effect: Impacts data by updating the entire resource to the provided values.

4- PATCH Request (Partial Update):

Objective: Update a part of a resource on the server.
Effect: Affects data by updating a specific part of the resource.



5- DELETE Request (Deletion):

Objective: Delete a specific resource on the server.
Effect: Affects data by deleting the specified resource.

*/

// -----------------------------------------   AJAX Way --------------------------------------------

const getAJAXData = () => {
  var request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/posts");
  request.responseType = "json";
  request.send();
  request.onload = function () {
    if (request.readyState == 4 && request.status == 200) {
      const res = request.response;
      console.log(res);
    } else {
      console.error("Failed to retrieve data");
    }
  };
};

// getAJAXData()

const postAJAXData = () => {
  var request = new XMLHttpRequest();
  request.open("POST", "https://jsonplaceholder.typicode.com/posts");
  request.responseType = "json";
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  let bodyParams = {
    title: "hello",
    body: "hello world",
    userId: 20,
  };
  request.send(JSON.stringify(bodyParams));
  request.onload = function () {
    if (request.readyState == 4 && request.status == 201) {
      const res = request.response;
      console.log(res);
      console.log(request.readyState);
    } else {
      console.error("Failed to retrieve data");
    }
  };
};

// postAJAXData();

const putAJAXData = (id) => {
  var request = new XMLHttpRequest();
  request.open("PUT", `https://jsonplaceholder.typicode.com/posts/${id}`);
  request.responseType = "json";
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  let bodyParams = {
    title: "hello",
    body: "hello world",
    userId: 20,
  };
  request.send(JSON.stringify(bodyParams));
  request.onload = function () {
    if (request.readyState == 4 && request.status == 200) {
      const res = request.response;
      console.log(res);
      console.log(request.status);
    } else {
      console.error("Failed to retrieve data");
    }
  };
};

// putAJAXData(1)

const patchAJAXData = (id) => {
  var request = new XMLHttpRequest();
  request.open("PATCH", `https://jsonplaceholder.typicode.com/posts/${id}`);
  request.responseType = "json";
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  let bodyParams = {
    title: "hi",
  };

  request.send(JSON.stringify(bodyParams));
  request.onload = function () {
    if (request.readyState == 4 && request.status == 200) {
      const res = request.response;
      console.log(res);
      console.log(request.status);
    } else {
      console.error("Failed to retrieve data");
    }
  };
};

// patchAJAXData(1);

const deleteAJAXData = (id) => {
  var request = new XMLHttpRequest();
  request.open("DELETE", `https://jsonplaceholder.typicode.com/posts/${id}`);
  request.responseType = "json";
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  request.send();
  request.onload = function () {
    if (request.readyState == 4 && request.status == 200) {
      console.log(request.readyState);
      console.log(request.status);
    } else {
      console.error("Failed to retrieve data");
    }
  };
};

// deleteAJAXData(1);

// -----------------------------------------   fetch Way --------------------------------------------

const getFetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((json) => console.log(json))
    .catch((error) => console.error("Error during GET request:", error));
};

// getFetchData();

const postFetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "hello",
      body: "Hello world",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((json) => console.log(json))
    .catch((error) => console.error("Error during POST request:", error));
};

// postFetchData();

const putFetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "Hello",
      body: "HEllo World",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((json) => console.log(json))
    .catch((error) => console.error("Error during POST request:", error));
};

// putFetchData()

const patchFetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "hi",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((json) => console.log(json))
    .catch((error) => console.error("Error during POST request:", error));
};
// patchFetchData()

const deleteFetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return console.log(response.ok);
  });
};

// deleteFetchData()

// -----------------------------------------   axios Way --------------------------------------------

const getAxiosData = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error during GET request:", error);
    });
};

// getAxiosData();

const postAxiosData = () => {
  axios
    .post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "hello",
        body: "Hello world",
        userId: 1,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error during POST request:", error);
    });
};

// postAxiosData();

const putAxiosData = () => {
  axios
    .put(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        id: 1,
        title: "Hello",
        body: "Hello World",
        userId: 1,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error during PUT request:", error);
    });
};

// putAxiosData();

const patchAxiosData = () => {
  axios
    .patch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        title: "hi",
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error during PUT request:", error);
    });
};

// patchAxiosData();

const deleteAxiosData = () => {
  axios
    .delete("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      console.log(response.status);
    })
    .catch((error) => {
      console.error("Error during DELETE request:", error);
    });
};

// deleteAxiosData();
