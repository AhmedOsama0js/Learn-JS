// binary search

//  1- the list most be sorted




let num = 256; ;
let arr = []
let ii = 0;


for (let i = 0; i < num; i++) {
  arr.push(i)
}


binarySearch = (item, list) => {
  let low = 0; 
  let high = list.length - 1;

  while (low <= high) {
    let mid = low + high >> 1
    let guess = list[mid] 
    if (guess === item) {
      return mid
    } else if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
    console.log(`${ii++} => ${mid}`)
  }

  return -1
}

// function search(item , list) {
//   for (let v = 0; v < num; v++) {
//     if (list[v] === item) {
//       return list[v]
//     }
//   }
// }


// const start1 = performance.now();
// search(100000, arr);
// const end1 = performance.now();

// const start2 = performance.now();
// binarySearch(127, arr);
// const end2 = performance.now();

// console.log(search(1000, arr));
// console.log(end1 - start1);
console.log(binarySearch(254, arr));
// console.log(end2 - start2);