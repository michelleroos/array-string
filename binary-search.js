/*
704. Binary Search Easy
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

const binarySearch = (arr, target) => {
  // BC
  if (!arr.length) return -1;
  // SETUP
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid + 1) // need to exclude the mid point
  // RECURSION
  if (target === arr[mid]) {
    return mid;
  } else if (target < arr[mid]) { // target is smaller, search left
    return binarySearch(left, target);
  } else { // target is bigger, search right
    const res = binarySearch(right, target);
    return res === -1 ? -1 : mid + res + 1;
  }
}

const nums1 = [-1,0,3,5,9,12], target1 = 9;
console.log(binarySearch(nums1, target1));
// Output: 4
// Explanation: 9 exists in nums and its index is 4

const nums2 = [-1,0,3,5,9,12], target2 = 2;
console.log(binarySearch(nums2, target2));
// Output: -1
// Explanation: 2 does not exist in nums so return -1

/*
Runtime: 82 ms, faster than 66.37% of JavaScript online submissions for Binary Search.
Memory Usage: 47.3 MB, less than 5.62% of JavaScript online submissions for Binary Search.
*/

console.log(binarySearch([5, 6, 78, 89], 89));
console.log(binarySearch([5, 6, 78, 89], 1));