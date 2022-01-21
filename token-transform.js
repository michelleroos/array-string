/*
token transform

Write a function, tokenTransform, that takes in an object of tokens and a string. In the object, the replacement values for a token may reference other tokens. The function should return a new string where tokens are replaced with their fully evaluated string values.

Tokens are enclosed in a pair of '$'.

You may assume that their are no circular token dependencies.
*/

// SLIDING WINDOW TWO POINTERS & RECURSION

const tokenTransform = (s, tokens) => {
  const transformed = [];
  let i = 0;
  let j = 1;
  while (i < s.length) {
    if (s[i] !== '$') {
      transformed.push(s[i]);
      i++;
      j = i + 1;
    } else if (s[j] !== '$') {
      j++;
    } else {
      const key = s.slice(i, j + 1);
      const value = tokens[key];
      const transform = tokenTransform(value, tokens);
      tokens[key] = transform;
      transformed.push(transform);
      i = j + 1;
      j = i + 1;
    }
  }
  return transformed.join('');
};

// test_00:
const tokens = {
  '$LOCATION$': '$ANIMAL$ park',
  '$ANIMAL$': 'dog',
};
console.log(tokenTransform('Walk the $ANIMAL$ in the $LOCATION$!', tokens));
// -> 'Walk the dog in the dog park!'

// test_01:
const tokens = {
  '$ADJECTIVE_1$': "quick",
  '$ADJECTIVE_2$': "eager",
  '$ADVERBS$': "$ADJECTIVE_1$ly and $ADJECTIVE_2$ly",
  '$VERB$': "hopped $DIRECTION$",
  '$DIRECTION$': "North",
};
console.log(tokenTransform("the $ADJECTIVE_1$ fox $ADVERBS$ $VERB$ward", tokens));
// -> 'the quick fox quickly and eagerly hopped Northward'

// test_02:
const tokens = {
  '$B$': "epicly $C$",
  '$A$': "pretty $B$ problem $D$",
  '$D$': "we have",
  '$C$': "clever",
};
console.log(tokenTransform("What a $A$ here!", tokens));
// -> 'What a pretty epicly clever problem we have here!'

// test_03:
const tokens = {
  '$1$': "a$2$",
  '$2$': "b$3$",
  '$3$': "c$4$",
  '$4$': "d$5$",
  '$5$': "e$6$",
  '$6$': "f!",
};
console.log(tokenTransform("$1$ $1$ $1$ $1$ $1$ $1$ $4$ $4$", tokens));
// -> 'abcdef! abcdef! abcdef! abcdef! abcdef! abcdef! def! def!'

// test_04:
const tokens = {
  '$0$': "$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$",
  '$1$': "$2$$2$$2$$2$$2$$2$$2$$2$$2$",
  '$2$': "$3$$3$$3$$3$$3$$3$$3$",
  '$3$': "$4$$4$$4$$4$$4$$4$",
  '$4$': "$5$$5$$5$$5$$5$",
  '$5$': "$6$$6$$6$$6$",
  '$6$': "$7$$7$$7$",
  '$7$': "$8$$8$",
  '$8$': "",
};
console.log(tokenTransform("z$0$z$0$z$0$z$0$z$0$z$0$z", tokens));
// -> 'zzzzzzz'
