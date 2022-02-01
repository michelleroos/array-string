/*
2028. Find Missing Observations - Medium
You have observations of n + m 6-sided dice rolls with each face numbered from 1 to 6. n of the observations went missing, and you only have the observations of m rolls. Fortunately, you have also calculated the average value of the n + m rolls.

You are given an integer array rolls of length m where rolls[i] is the value of the ith observation. You are also given the two integers mean and n.

Return an array of length n containing the missing observations such that the average value of the n + m rolls is exactly mean. If there are multiple valid answers, return any of them. If no such array exists, return an empty array.

The average value of a set of k numbers is the sum of the numbers divided by k.

Note that mean is an integer, so the sum of the n + m rolls should be divisible by n + m.
*/

var missingRolls = function (rolls, mean, n) {
  const output = [];
  const totalVal = (rolls.length + n) * mean;
  let missingVal = totalVal - sumValues(rolls);
  if (missingVal > n * 6) return output;
  if (missingVal < n * 1) return output;
  while (missingVal > 0) {
    const dice = Math.min(missingVal - n + 1, 6); // greedy/largest dice value
    output.push(dice);
    missingVal -= dice;
    n -= 1;
  }
  return output;
};

const sumValues = (arr) => {
  return arr.reduce((acc, ele) => acc + ele);
}

/*
Runtime: 417 ms, faster than 65.22% of JavaScript online submissions for Find Missing Observations.
Memory Usage: 69.4 MB, less than 13.04% of JavaScript online submissions for Find Missing Observations.

*/

const rolls1 = [3,2,4,3], mean1 = 4, n1 = 2;
console.log(fun(rolls1, mean1, n1));
// Output: [6,6]
// Explanation: The mean of all n + m rolls is (3 + 2 + 4 + 3 + 6 + 6) / 6 = 4.

const rolls2 = [1,5,6], mean2 = 3, n2 = 4;
console.log(fun(rolls2, mean2, n2));
// Output: [2,3,2,2]
// Explanation: The mean of all n + m rolls is (1 + 5 + 6 + 2 + 3 + 2 + 2) / 7 = 3.

const rolls3 = [1,2,3,4], mean3 = 6, n3 = 4;
console.log(fun(rolls3, mean3, n3));
// Output: []
// Explanation: It is impossible for the mean to be 6 no matter what the 4 missing rolls are.
