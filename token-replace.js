/*
token replace

Write a function, tokenReplace, that takes in an object of tokens and a string. The function should return a new string where tokens are replaced.

Tokens are enclosed in a pair of '$'. You can assume that the input string is properly formatted. Tokens should be replaced from left to right in the string (see test_05).
*/

// USING TWO POINTERS
// T: O(n) S: O(n)

const tokenReplace = (s, tokens) => {
  const replaced = [];
  let i = 0;
  let j = 1;
  while (i < s.length) {
    if (s[i] !== '$') {
      replaced.push(s[i]);
      i++;
      j = i + 1;
    } else if (s[j] !== '$') {  
      j++;
    } else { // s[i] & s[j] both point to '$'
      const token = s.slice(i, j + 1);
      replaced.push(tokens[token]);
      i = j + 1; // Finding a consistent state
      j = i + 1;
    };
  };
  return replaced.join('');
};

// test_00:
const tokens = {
  '$LOCATION$': 'park',
  '$ANIMAL$': 'dog',
};
console.log(tokenReplace('Walk the $ANIMAL$ in the $LOCATION$!', tokens)); 
// -> 'Walk the dog in the park!'

// test_01:
const tokens = {
  '$ADJECTIVE$': 'quick',
  '$VERB$': 'hopped',
  '$DIRECTION$': 'North'
};
console.log(tokenReplace('the $ADJECTIVE$ fox $VERB$ $ADJECTIVE$ly $DIRECTION$ward', tokens)); 
// -> 'the quick fox hopped quickly Northward'

// test_02:
const tokens = {
  '$greeting$': 'hey programmer',
};
console.log(tokenReplace('his greeting is always $greeting$.', tokens)); 
// -> 'his greeting is always hey programmer.'

// test_03:
const tokens = {
  '$A$': 'lions',
  '$B$': 'tigers',
  '$C$': 'bears',
};
console.log(tokenReplace('$A$$B$$C$, oh my.', tokens)); 
// -> 'lionstigersbears, oh my.'

// test_04:
const tokens = {
  '$A$': 'lions',
  '$B$': 'tigers',
  '$C$': 'bears',
};
console.log(tokenReplace('$B$', tokens)); 
// -> 'tigers'

// test_05:
const tokens = {
  '$second$': 'beta',
  '$first$': 'alpha',
  '$third$': 'gamma',
};
console.log(tokenReplace('$first$second$third$', tokens)); 
// -> 'alphasecondgamma'

