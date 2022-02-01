/*
1694. Reformat Phone Number - Easy
You are given a phone number as a string number. number consists of digits, spaces ' ', and/or dashes '-'.

You would like to reformat the phone number in a certain manner. Firstly, remove all spaces and dashes. Then, group the digits from left to right into blocks of length 3 until there are 4 or fewer digits. The final digits are then grouped as follows:

2 digits: A single block of length 2.
3 digits: A single block of length 3.
4 digits: Two blocks of length 2 each.
The blocks are then joined by dashes. Notice that the reformatting process should never produce any blocks of length 1 and produce at most two blocks of length 2.

Return the phone number after formatting.
*/

// // RECURSIVE
// var reformatNumber = function (number) {
//   const nums = '0123456789';
//   // remove all spaces and dashes
//   let num = number.split('').filter(s => nums.includes(s)).join(''); // Does .includes make it O(n^2)?
//   // recursively build up the string
//   return _reformatNumber(num);
// };

// const _reformatNumber = (num) => {
//   // return strings with a length < 4
//   if (num.length < 4) return num;
//   // split strings with a length of 4 and add a dash in between
//   if (num.length === 4) return num.substring(0, 2) + '-' + num.substring(2, 4);
//   // take the first 3 digits and a dash and send the rest back into the recursion
//   if (num.length > 4) return num.substring(0, 3) + '-' + _reformatNumber(num.substring(3, num.length));
// };

/*
Runtime: 145 ms, faster than 6.35% of JavaScript online submissions for Reformat Phone Number.
Memory Usage: 42.9 MB, less than 12.70% of JavaScript online submissions for Reformat Phone Number.
*/

// // RECURSIVE OPTIMIZED
// var reformatNumber = function (number) {
//   const nums = '0123456789';
//   // remove all spaces and dashes
//   let num = number.split('').filter(s => nums.includes(s)).join(''); // Does .includes make it O(n^2)?
//   // recursively build up the string
//   return _reformatNumber(num, 0);
// };

// const _reformatNumber = (num, i) => {
//   // return strings with a length < 4
//   if (num.length < 4) return num;
//   // split strings with a length of 4 and add a dash in between
//   if (num.length === 4) return num.substring(0, 2) + '-' + num.substring(2, 4);
//   // take the first 3 digits and a dash and send the rest back into the recursion
//   if (num.length > 4) return num.substring(0, 3) + '-' + _reformatNumber(num.substring(3, num.length));
// };

var reformatNumber = function (number) {
  let num = number.split('').filter(s => nums.includes(s)).join(''); // Does .includes make it O(n^2)?
  let res = [];
  while (num.length >= 4) {
    if (num.length === 4) {
      res.push(num[0], num[1], '-', num[3], num[4]);
      // res += num.splice(0, 2).join('') + '-' + num.splice(0, 2).join('');
    } else {
      res.push(num[0], num[1], num[2]);
      // res += num.splice(0, 3).join('') + '-';
    }
  }
  res.push(num);
  // res += num.join('')
  return res.join('');
};

const number1 = "1-23-45 6";
console.log(func(number1));
// Output: "123-456"
// Explanation: The digits are "123456".
// Step 1: There are more than 4 digits, so group the next 3 digits. The 1st block is "123".
// Step 2: There are 3 digits remaining, so put them in a single block of length 3. The 2nd block is "456".
// Joining the blocks gives "123-456".

const number2 = "123 4-567";
console.log(func(number2));
// Output: "123-45-67"
// Explanation: The digits are "1234567".
// Step 1: There are more than 4 digits, so group the next 3 digits. The 1st block is "123".
// Step 2: There are 4 digits left, so split them into two blocks of length 2. The blocks are "45" and "67".
// Joining the blocks gives "123-45-67".

const number3 = "123 4-5678";
console.log(func(number3));
// Output: "123-456-78"
// Explanation: The digits are "12345678".
// Step 1: The 1st block is "123".
// Step 2: The 2nd block is "456".
// Step 3: There are 2 digits left, so put them in a single block of length 2. The 3rd block is "78".
// Joining the blocks gives "123-456-78".

