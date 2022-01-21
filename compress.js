/*
compress

Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'

You can assume that the input only contains alphabetic characters.
*/

// TWO POINTER
// T: O(n) S: O(n)

const compress = (s) => {
  const compressed = []; // strings are immutable in JS
  let i = 0;
  let j = 0;
  while (j <= s.length) {
    if (s[i] === s[j]) {
      j++;
    } else {
      const num = j - i;
      if (num === 1) {
        compressed.push(s[i]);
      } else {
        compressed.push(num, s[i]);
      };
      i = j;
    };
  };
  return compressed.join('');
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