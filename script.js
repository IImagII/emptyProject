let input = [
   [1, 3],
   [2, 6],
   [8, 10],
   [15, 18],
];
let input2 = [
   [1, 4],
   [4, 5],
];

function merge(intervals) {
   if (intervals.length < 2) return intervals;
   intervals.sort((a, b) => a[0] - b[0]);
   let res = [intervals[0]];
   for (let interval of intervals) {
      let recent = res[res.length - 1];
      if (recent[1] >= interval[0]) {
         recent[1] = Math.max(recent[1], interval[1]);
      } else {
         res.push(interval);
      }
   }
   return res;
}

console.log(merge(input));
console.log(merge(input2));
