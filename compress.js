/*
compress

Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'

You can assume that the input only contains alphabetic characters.
*/

// TWO POINTER & STACK
const compress = (s) => {
  const compressed = [];
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[j]) {
      j++; // progress j
    } else {
      const sub = s.slice(i, j);
      const num = sub.length;
      compressed.push(num, sub);
      i = j;
    };
  };
  return compressed.join('')
};

// test_00:
console.log(compress('ccaaatsss')); 
// -> '2c3at3s'

// test_01:
console.log(compress('ssssbbz')); 
// -> '4s2bz'

// test_02:
console.log(compress('ppoppppp')); 
// -> '2po5p'

test_03:
console.log(compress('nnneeeeeeeeeeeezz')); 
// -> '3n12e2z'

// test_04:
console.log(compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')); 
// -> '127y'