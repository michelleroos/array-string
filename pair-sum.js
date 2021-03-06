/*
pair sum

Write a function, pairSum, that takes in an array and a target sum as arguments.The function should return an array containing a pair of indices whose elements sum to the given target.The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target.
*/

// NESTED LOOP WITH DISTINCT PAIRS
// T: O(n2) S: O(n)

// const pairSum = (numbers, targetSum) => {
//   const pairs = [];
//   for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === targetSum) {
//         pairs.push(i, j);
//       };
//     };
//   };
//   return pairs;
// };

// USING A HASH TO DECREASE RUNTIME
// T: O(n) S: O(n)

const pairSum = (numbers, targetSum) => {
  const numsTracker = {};
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const diff = targetSum - num;
    if (diff in numsTracker) return [i, numsTracker[diff]];
    numsTracker[num] = i;
  };
};

// test_00:
console.log(pairSum([3, 2, 5, 4, 1], 8)); 
// -> [0, 2]

// test_01:
console.log(pairSum([4, 7, 9, 2, 5, 1], 5)); 
// -> [0, 5]

// test_02:
console.log(pairSum([4, 7, 9, 2, 5, 1], 3)); 
// -> [3, 5]

// test_03:
console.log(pairSum([1, 6, 7, 2], 13)); 
// -> [1, 2]

// test_04:
console.log(pairSum([9, 9], 18)); 
// -> [0, 1]

// test_05:
console.log(pairSum([6, 4, 2, 8], 12)); 
// -> [1, 3]

