/*
There is a queue of n cars waiting at the gas station. There are 3 fuel dispensers, x, y, z. When a car arrives at front of the queue, the driver can choose to go to any dispenser that is not occupied. It takes 1 second per litre. If all unoccupied dispensers have less has than required by the driver then they have to wait. If more than one dispenser has the required liter, the driver chooses the one labeled with the smallest letter.

Calculate max amount of waiting time. Assume taking one liter of fuel takes exactly one second? 

This problem I dequeued from the queue whenever there was an available spot and pushed to a list of times whenever there was not an available time. Return the max of the list of times that's were pushed to list. In the while loop im updating min time to subtract from the occupied dispensers when there is not one available. This problem was much more involved and took me to the end of the allotted time. I came up with two answers for this problem, the first did not suffice the tile constraint and but the second did. dont think I fully solved the problem with my second solution even though I did pass the two test cases they gave me. There may be some dynamic programming or sorting that I had to doEither way good experience and I enjoyed the challenge

*/

const waitingTimes = (cars, x, y, z) => {
  const waiting = [];
  let seconds = 0;
  
  return waiting;
}

const q = [2, 8, 4, 3, 2], x = 7, y = 11, z = 3;
// x = 0, y = 1, z = 1;
// return [0, 0, 2, 2, 8]
// then cars will be waiting 0, 0, 2, 2, 8 seconds.