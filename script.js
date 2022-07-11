function biuld(str) {
   const res = {};
   str = str.toLowerCase();
   for (let char of str) {
      res[char] = res[char] + 1 || 1;
   }
   return res;
}

function anagram(resA, resB) {
   const aBuild = biuld(resA);
   const bBuild = biuld(resB);
   if (Object.keys(aBuild).length !== Object.keys(bBuild).length) {
      return false;
   }
   for (let char in aBuild) {
      if (aBuild[char] !== bBuild[char]) {
         return false;
      }
   }
   return true;
}

console.log(anagram('friend', 'Finder'));
console.log(anagram('hello', 'bye'));
