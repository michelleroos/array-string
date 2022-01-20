/*
anagrams

Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

*/

const anagrams = (s1, s2) => {
  const anagram = {};
  for (let char of s1) {
    if (!(char in anagram)) anagram[char] = 0;
    anagram[char]++
  };
  for (let char of s2) {
    if (char in anagram) {
      anagram[char]--
    } else {
      return false;
    };
  };
  return Object.values(anagram).every(num => num === 0);
};

// test_00:
console.log(anagrams('restful', 'fluster')); 
// -> true

// test_01:
console.log(anagrams('cats', 'tocs')); 
// -> false

// test_02:
console.log(anagrams('monkeyswrite', 'newyorktimes')); 
// -> true

// test_03:
console.log(anagrams('paper', 'reapa')); 
// -> false

// test_04:
console.log(anagrams('elbow', 'below')); 
// -> true

// test_05:
console.log(anagrams('tax', 'taxi')); 
// -> false

// test_06:
console.log(anagrams('taxi', 'tax')); 
// -> false

// test_07:
console.log(anagrams('night', 'thing')); 
// -> true

// test_08:
console.log(anagrams('abbc', 'aabc')); 
// -> false

