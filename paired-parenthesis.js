/*
paired parentheses
Write a function, pairedParentheses, that takes in a string as an argument. The function should return a boolean indicating whether or not the string has well-formed parentheses.

You may assume the string contains only alphabetic characters, '(', or ')'.
*/

// ( d a v i d ) ( ( a b b y ) )
//                             *
const pairedParentheses = (str) => {
  let count = 0; // 0
  for (let cha of str) {
    if (cha === '(') {
      count++;
    } else if (cha === ')') {
      if (count === 0) return false;
      count--;
    }
  }
  return count === 0;
};

console.log(pairedParentheses("(david)((abby))")); 
// -> true

console.log(pairedParentheses("()rose(jeff")); 
// -> false

console.log(pairedParentheses(")(")); 
// -> false

console.log(pairedParentheses("()")); 
// -> true

console.log(pairedParentheses("(((potato())))")); 
// -> true

console.log(pairedParentheses("(())(water)()")); 
// -> true

console.log(pairedParentheses("(())(water()()")); 
// -> false

console.log(pairedParentheses("")); 
// -> true

console.log(pairedParentheses("))()")); 
// -> false