/*
intersection
Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

You may assume that each input array does not contain duplicate elements.
*/

// BRUTE FORCE
// T: O(n*m) S: O(min(m, n))

const intersection = (a, b) => {
  const intersects = [];
  for (let e of a) {
    if (b.includes(e)) intersects.push(e);
  };
  return intersects;
};

// OPTIMIZED USING SET
// T: O(m+n) S: O(min(m, n))

const intersection = (a, b) => {
  const intersects = [];
  const setA = new Set(a);
  for (let e of b) {
    if (setA.has(e)) intersects.push(e);
  };
  return intersects;
};

// test_00:
console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]))
// -> [2,6]

// test_01:
console.log(intersection([2, 4, 6], [4, 2]))
// -> [2,4]

// test_02:
console.log(intersection([4, 2, 1], [1, 2, 4, 6]))
// -> [1,2,4]

// test_03:
console.log(intersection([0, 1, 2], [10, 11]))
// -> []

// test_04:
const a = [];
const b = [];
for (let i = 0; i < 50000; i += 1) {
  a.push(i);
  b.push(i);
}
console.log(intersection(a, b))
// -> [0,1,2,3,..., 49999]