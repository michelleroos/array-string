/**
 
 * uncompress

Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

<number><char>
for example, '2c' or '3a'.

The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

*/

const uncompress = (s) => { // 2c3a1t
  const nums = '23456789';
  const stack = []; // cc
  for (let char of s) { // '3'
    if (nums.includes(char)) { // T
      stack.push(Number(char));
    } else {
      const num = stack.pop(); // 2
      stack.push(char.repeat(num));
    };
  };
  return stack.join('');
};

// test_00:
console.log(uncompress("2c3a1t")); 
// -> 'ccaaat'

// test_01:
console.log(uncompress("4s2b")); 
// -> 'ssssbb'

// test_02:
console.log(uncompress("2p1o5p")); 
// -> 'ppoppppp'

// test_03:
console.log(uncompress("3n12e2z")); 
// -> 'nnneeeeeeeeeeeezz'

// test_04:
console.log(uncompress("127y")); 
// ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'