function findMinDistinct(arr, m) {
  // maximize uniqueness of m element
  // by counting the numbers => sort algo

  const count = new Map();

  for (let num of arr) {
    if (count.has(num)) {
      count.set(num, count.get(num) + 1);
    } else {
      count.set(num, 1);
    }
  }

  console.log(count);

  const uniqueCounts = [...count.values()];

  uniqueCounts.sort((a, b) => a - b);

  let removedCount = 0;
  let removedUniqueCount = 0;
  for (let count of uniqueCounts) {
    removedCount += count;

    if (removedCount <= m) {
      removedUniqueCount += 1;
    } else {
      break;
    }
  }

  console.log(uniqueCounts);

  return uniqueCounts.length - removedUniqueCount;
}

var arr = [2, 3, 1, 2, 3, 3];
var m = 3;

console.log(findMinDistinct(arr, m));
