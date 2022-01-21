/*
most frequent char

Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.
*/

// USING HASH TO TRACK + ARRAY INSTEAD OF STRING 
// T: O(n) S: O(n)

const mostFrequentChar = (s) => {
  let mostFreq = [];
  let count = 0;
  const chars = {};
  for (let c of s) {
    if (!(c in chars)) chars[c] = 0;
    chars[c]++
  };
  for (let char in chars) {
    if (chars[char] > count) {
      mostFreq.push(char);
      count = chars[char];
    };
  };
  return mostFreq[mostFreq.length - 1];
};

test_00:
console.log(mostFrequentChar('bookeeper')); 
// -> 'e'

// test_01:
console.log(mostFrequentChar('david')); 
// -> 'd'

// test_02:
console.log(mostFrequentChar('abby')); 
// -> 'b'

// test_03:
console.log(mostFrequentChar('mississippi')); 
// -> 'i'

// test_04:
console.log(mostFrequentChar('potato')); 
// -> 'o'

// test_05:
console.log(mostFrequentChar('eleventennine')); 
// -> 'e'

// test_06:
console.log(mostFrequentChar("riverbed")); 
// -> 'r'