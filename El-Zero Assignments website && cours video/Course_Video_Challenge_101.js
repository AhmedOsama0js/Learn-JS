let header = document.createElement("header");
let content = document.createElement("section");
let footer = document.createElement("footer");

//append element at page

document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);

//============== header =================

// style  the header
header.className = "header";
header.style.cssText = `
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: white;
`;

// create a child to header

let logo = document.createElement("div");
let nav = document.createElement("ul");

// create element logo
logo.textContent = "Logo";
logo.className = "logo";
logo.style.cssText = `
  color:#23a96e;
  text-transform: capitalize;
  font-size: 30px;
  font-weight: bold;
  padding-left: 20px
`;
header.appendChild(logo);

// create element nav
for (let i = 1; i <= 4; i++) {
  let mainList = document.createElement("li");
  mainList.className = `list-${i}`;
  nav.appendChild(mainList);
  mainList.style.cssText = `
  list-style: none; 
  margin-left: 10px;
  font-size: 17px;
  border: 1px #23a96e  solid;
  padding: 5px;
  border-radius: 3px;
  `;
}
header.appendChild(nav);
document.querySelector(".list-1").textContent = "Home";
document.querySelector(".list-2").textContent = "service";
document.querySelector(".list-3").textContent = "about";
document.querySelector(".list-4").textContent = "contact";

nav.style.cssText = `
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
  width: 30%;
  margin-right: 30px;
`;

//===============  content ============

// style  content
content.style.cssText = `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  justify-content: center;
  background-color: #ececec;
  gap: 20px;
    border : 20px solid #ececec
`;

for (let i = 1; i <= 15; i++) {
  let box = document.createElement("div");
  box.className = `project-${i}`;

  let h3 = document.createElement("h3");
  h3.className = `box-${i}`;
  h3.textContent = `${i}`;
  h3.style.fontSize = "35px";
  h3.style.color = "#23a96e";
  box.appendChild(h3);

  let p = document.createElement("p");
  p.className = `p-${i}`;
  p.textContent = `Product -${i}`;
  p.style.fontSize = "20px";
  box.appendChild(p);

  box.style.cssText = `
  background-color: white;
  height: 200px;
  text-align: center;
  display: block;
  `;
  content.appendChild(box);
}

//===============  footer ============

footer.textContent = `Copyright 2023`;
footer.className = "footer";
footer.style.cssText = `
  width: 100%;
  text-align: center;
  background-color:#23a96e ;
  color: white;
  font-size: 30px;
  padding: 10px 0;
`;
