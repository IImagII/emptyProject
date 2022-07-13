const arr = [[1, 2], [3, 2], [4, 6], [[3, 4]]];

let res = arr.flat(Infinity).reduce((acc, elem) => acc + elem);
console.log(res);

function flat(array) {
   let res = [];
   array.forEach((elem) => {
      if (Array.isArray(elem)) {
         res = res.concat(flat(elem));
      } else {
         res.push(elem);
      }
   });
   return res;
}
console.log(flat(arr));
