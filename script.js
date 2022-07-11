let array = ['apple', 'banana', 'peach', 'orange'];
let total = array.reduce((acc, elem) => {
   if (acc[elem]) {
      acc[elem] += 1;
   } else {
      acc[elem] = 1;
   }

   return acc;
}, {});

console.log(total);
