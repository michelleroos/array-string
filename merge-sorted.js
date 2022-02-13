/*
88. Merge Sorted Array
Easy

3329

333

Add to List

Share
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/
 
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m); // O(m)
  let p1 = 0;
  let p2 = 0;
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b)
};

const nums1 = [1,2,3,0,0,0], m1 = 3, nums2 = [2,5,6], n2 = 3;
console.log(merge(nums1, m1, nums2, n2));
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.


const nums3 = [1], m3 = 1, nums4 = [], n4 = 0;
console.log(merge(nums3, m3, nums4, n4));
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].


const nums5 = [0], m5 = 0, nums6 = [1], n6 = 1;
console.log(merge(nums5, m5, nums6, n6));
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.