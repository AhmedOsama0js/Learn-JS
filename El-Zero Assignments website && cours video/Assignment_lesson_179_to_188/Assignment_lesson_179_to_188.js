//https://elzero.org/javascript-bootcamp-assignments-lesson-from-179-to-188/ (link)

//==========================================   1  =======================================

const myData = (link) => {
  return new Promise((resolve, reason) => {
    let request = new XMLHttpRequest();
    request.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reason(Error("NOT Found"));
      }
    };
    request.open("GET", link);
    request.send();
  });
};

myData("test.json")
  .then((result) => {
    result.length = 5;
    return result;
  })
  .then((arr) => {
    for (let i = 0; i < arr.length; i++) {
      let div = document.createElement("div");
      let title = document.createElement("h3");
      title.textContent = `${arr[i].title}`;
      let text = document.createElement("p");
      text.textContent = `${arr[i].description}`;
      div.appendChild(title);
      div.appendChild(text);
      document.body.appendChild(div);
    }

    let b = document.createElement("p");
    b.textContent = `==============================`;
    document.body.appendChild(b);
  });

//==========================================   2  =======================================

fetch("test.json")
  .then((arr) => arr.json())
  .then((arr) => {
    arr.length = 5;
    return arr;
  })
  .then((arr) => {
    for (let i = 0; i < arr.length; i++) {
      let div = document.createElement("div");
      let title = document.createElement("h3");
      title.textContent = `${arr[i].title}`;
      let text = document.createElement("p");
      text.textContent = `${arr[i].description}`;
      div.appendChild(title);
      div.appendChild(text);
      document.body.appendChild(div);
    }
  });
