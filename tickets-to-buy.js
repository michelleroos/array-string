/*
2073. Time Needed to Buy Tickets - Easy
There are n people in a line queuing to buy tickets, where the 0th person is at the front of the line and the (n - 1)th person is at the back of the line.

You are given a 0-indexed integer array tickets of length n where the number of tickets that the ith person would like to buy is tickets[i].

Each person takes exactly 1 second to buy a ticket. A person can only buy 1 ticket at a time and has to go back to the end of the line (which happens instantaneously) in order to buy more tickets. If a person does not have any tickets left to buy, the person will leave the line.

Return the time taken for the person at position k (0-indexed) to finish buying tickets.
*/

var timeRequiredToBuy = function (tickets, k) {
  let seconds = 0;
  while (tickets[k] !== 0) {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[k] === 0) {
        return seconds;
      } else if (tickets[i] > 0) {
        tickets[i]--;
        seconds++;
      }
    }
  }
  return seconds;
};

const tickets1 = [2,3,2], k1 = 2;
console.log(timeRequiredToBuy(tickets1, k1));
// Output: 6
// Explanation: 
// - In the first pass, everyone in the line buys a ticket and the line becomes [1, 2, 1].
// - In the second pass, everyone in the line buys a ticket and the line becomes [0, 1, 0].
// The person at position 2 has successfully bought 2 tickets and it took 3 + 3 = 6 seconds.

const tickets2 = [5,1,1,1], k2 = 0;
console.log(timeRequiredToBuy(tickets2, k2));
// Output: 8
// Explanation:
// - In the first pass, everyone in the line buys a ticket and the line becomes [4, 0, 0, 0].
// - In the next 4 passes, only the person in position 0 is buying tickets.
// The person at position 0 has successfully bought 5 tickets and it took 4 + 1 + 1 + 1 + 1 = 8 seconds.

/*
Runtime: 60 ms, faster than 99.45% of JavaScript online submissions for Time Needed to Buy Tickets.
Memory Usage: 42.4 MB, less than 8.84% of JavaScript online submissions for Time Needed to Buy Tickets.
*/