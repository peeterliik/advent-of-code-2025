import { readFileContent } from "../filereader.js";

const input = readFileContent("3input.txt").trim().split(/\r?\n/);

function parseToNumberArray(str) {
  return str.split("").map(Number);
}

let sumOfJolts = 0;

for (let i = 0; i < input.length; i++) {
  const row = parseToNumberArray(input[i]);

  console.log(row);
  let max = Math.max(...row);
  let maxPosition = row.indexOf(max);

  let popped = [];

  if (maxPosition === row.length - 1) {
    console.log("it was at the end");
    popped.push(row.pop());
    console.log(row);
    max = Math.max(...row);
    console.log("new max:", max);
    maxPosition = row.indexOf(max);
  }

  row.splice(maxPosition, 1);

  let leftOvers = row.slice(maxPosition).concat(popped);

  console.log("leftOvers:", leftOvers);

  let maxSecond = Math.max(...leftOvers);

  const maxJolt = max.toString() + maxSecond.toString();

  console.log(maxJolt);

  sumOfJolts += Number(maxJolt);
}

console.log("Sum of jolts:", sumOfJolts);
