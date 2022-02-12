const binarySearch = (arr, target) => {
  // BC
  if (!arr.length) return -1;
  // SETUP
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid + 1) // need to exclude the mid point
  // RECURSION
  if (target === arr[mid]) {
    return mid;
  } else if (target < arr[mid]) { // target is smaller, search left
    return binarySearch(left, target);
  } else { // target is bigger, search right
    const res = binarySearch(right, target);
    return res === -1 ? -1 : mid + res + 1;
  }
}

console.log(binarySearch([5, 6, 78, 89], 89));
console.log(binarySearch([5, 6, 78, 89], 1));