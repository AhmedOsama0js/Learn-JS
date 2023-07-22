// ======================= 1 ========================
let json = new XMLHttpRequest();
json.open("GET", "test.json");
json.send();

// ======================= 2 ========================
json.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    setTimeout(() => {
      console.log("Data Loaded");
    }, 0);
    //========================= 3 =========================
    let mainData = JSON.parse(this.responseText);
    // for (let i = 0; i < mainData.length; i++) {
    //   mainData[i].category = "All";
    // }
    console.log(mainData);
    // let updatedData = JSON.stringify(mainData);
    // console.log(updatedData);

    //========================= 4 =========================
    let container = document.createElement("div");
    container.id = "data";
    let div = document.createElement("div");
    for (let i = 0; i < mainData.length; i++) {
      let title = document.createElement("h3");
      title.textContent = `============ ${mainData[i].title} ==============`;

      let id = document.createElement("p");
      id.textContent = `Article Number ${mainData[i].id} Body`;

      let Author = document.createElement("p");
      Author.textContent = `Author: ${mainData[i].author}`;

      let Category = document.createElement("p");
      Category.textContent = `Category: ${mainData[i].category}`;

      let content = document.createElement("p");
      content.textContent = `Category: ${mainData[i].content}`;

      div.appendChild(title);
      div.appendChild(id);
      div.appendChild(Author);
      div.appendChild(Category);
      div.appendChild(content);
      container.appendChild(div);
    }
    document.body.appendChild(container);
  }
};
