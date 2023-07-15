//https://elzero.org/javascript-2021-regular-expression-challenge/ (link)

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";
let url6 = "https://ahmedosama0js.github.io/My-Project/Dashbord-1/index.html";
let url7 =
  "https://ahmedosama0.jlosdf-526sd-sdf;s843552sdfj54987mdfg441*560ifdsgw37dsfdfslserw6532kj98tymfsyw43nv76ghwe416dsfkbbvewk 3hfsi439gb";

console.log(url1.match(/\w+.\w+/gi));
console.log(url2.match(/http:\/\/\w+.\w+/gi));
console.log(url3.match(/https?:\/\/\w+.\w+/gi));
console.log(url4.match(/https?:\/\/\w+.\w+.\w+/gi));
console.log(
  url5.match(/https?:\/\/\w+.\w+.\w+:\d+\/\w+.\w+\?\w+=\d+&\w+=\w+/gi)
);
console.log(
  url5.match(/https?:\/\/\w+.\w+.\w+:\w{4}\/\w+.\w{3}\?\w{2}=\d{3}&\w{3}=\w+/gi)
);
console.log(url6.match(/https?:\/\/\w+.\w+.io\/\w{2}-\w+\/\w+-\d\/\w+.\w+/gi));
console.log(
  url7.match(/\w+:\/\/\w+.\w+-\d+\w{2}-\w+;\w\d+\w+\*\d+\w+\s\d\w+/gi)
);
