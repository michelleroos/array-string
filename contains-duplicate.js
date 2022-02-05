/*
217. Contains Duplicate Easy
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

var containsDuplicate = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

const nums1 = [1, 2, 3, 1];
// Output: true


const nums2 = [1, 2, 3, 4];
// Output: false

const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// Output: true

var containsDuplicate = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

/*
Runtime: 272 ms, faster than 18.44% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 50.9 MB, less than 14.83% of JavaScript online submissions for Contains Duplicate.
*/