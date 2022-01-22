/**

Leetcode #3

Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 */

// TWO POINTER SLIDING WINDOW
// T: O(n) 126 ms 
// S: O(n) 43MB

const lengthOfLongestSubstring = (s) => {
  const visited = new Set();
  let res = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    while (visited.has(s[right])) {
      visited.delete(s[left]);
      left++;
    };
    visited.add(s[right]);
    res = Math.max(res, (right - left) + 1);
  };
  return res;
};




console.log(lengthOfLongestSubstring("pwwkew")) // 3
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("abcabcbb")) // 3