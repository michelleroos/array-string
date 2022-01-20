/**
 
 * uncompress

Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

<number><char>
for example, '2c' or '3a'.

The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

*/

// USING A STACK
// T: O(n*m) S: O(n*m)

// const uncompress = (s) => {
//   const nums = '123456789';
//   const stack = [];
//   for (let char of s) {
//     if (nums.includes(char)) {
//       stack.push(char);
//     } else {
//       const num = [];
//       while (nums.includes(stack[stack.length - 1])) {
//         num.unshift(stack.pop());
//       }
//       stack.push(char.repeat(Number(num.join(''))));
//     };
//   };
//   return stack.join('');
// };

// USING TWO POINTERS
// T: O(n*m) S: O(n*m)

const uncompress = (s) => {
  const nums = '123456789';
  const uncompressed = [];
  let i = 0;
  let j = 0;
  for (let char of s) {
    if (nums.includes(s[j])) {
      j++; // progress j
    } else {
      const num = s.slice(i, j);
      uncompressed.push(s[j].repeat(Number(num)));
      j++; // progress both i & j
      i = j;
    };
  };
  return uncompressed.join('');
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