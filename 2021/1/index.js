const fs = require("fs");
const array = fs
  .readFileSync("./input.txt", "utf-8")
  .split("\n")
  .map((numStr) => parseInt(numStr));

// count the number of times a depth measurement increases from the previous measurement.
// demoInput.txt should resolve to 7
function part1() {
  let increased = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      increased++;
    }
  }
  return increased;
}

// Instead, consider sums of a three-measurement sliding window.
// demoInput.txt should resolve to 5
function part2() {
  let increased = 0;
  for (let i = 0; i < array.length; i++) {
    if (i + 3 < array.length) {
      let prev_sum = array[i] + array[i + 1] + array[i + 2];
      let current_sum = array[i + 1] + array[i + 2] + array[i + 3];
      if (prev_sum < current_sum) {
        increased++;
      }
    }
  }
  return increased;
}
console.log(part1(), part2());
