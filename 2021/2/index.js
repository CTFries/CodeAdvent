const fs = require("fs");
const array = fs.readFileSync("./input.txt", "utf-8").split("\n");

// find the height(x) and lateral distance(y), then multiply them
// demoInput.txt should resolve to 150
function part1() {
  let x = 0; //depth
  let y = 0; // lateral position
  array.map((i) => {
    const instruction = i.split(" ");
    instruction[0] === "forward" ? (x = x + parseInt(instruction[1])) : (x = x);
    instruction[0] === "up" ? (y = y - parseInt(instruction[1])) : (y = y);
    instruction[0] === "down" ? (y = y + parseInt(instruction[1])) : (y = y);
  });
  return x * y;
}

// Instead, track a third value, aim, and use the rules find the values to multiple aim and depth
// demoInput.txt should resolve to 900
function part2() {
  let x = 0; // depth
  let y = 0; // horizontial position
  let z = 0; // aim
  array.map((i) => {
    const instruction = i.split(" ");
    instruction[0] === "forward" ? (x = x + parseInt(instruction[1])) : null;
    instruction[0] === "forward"
      ? (z = z + y * parseInt(instruction[1]))
      : null;
    instruction[0] === "up" ? (y = y - parseInt(instruction[1])) : null;
    instruction[0] === "down" ? (y = y + parseInt(instruction[1])) : null;
    console.log(instruction, x, y, z);
  });
  return x * z;
}
//console.log(part1())
console.log(part1(), part2());
