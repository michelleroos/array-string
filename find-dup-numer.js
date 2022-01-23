/*
287. Find the Duplicate Number - Medium

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.
 
Constraints:

1 <= n <= 105
nums.length == n + 1
1 <= nums[i] <= n

All the integers in nums appear only once except for precisely one integer which appears two or more times.
 
Follow up:

How can we prove that at least one duplicate number must exist in nums?
Can you solve the problem in linear runtime complexity?
*/

var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;
  while (true) {
    fast = nums[nums[fast]];
    slow = nums[slow];
    if (fast === slow) {
      let pointer = 0;
      while (pointer !== slow) {
        pointer = nums[pointer];
        slow = nums[slow];
      };
      return pointer;
    };
  };
};

console.log(findDuplicate([1, 3, 4, 2, 2]))
// 2
console.log(findDuplicate([3, 1, 3, 4, 2]))
// 3