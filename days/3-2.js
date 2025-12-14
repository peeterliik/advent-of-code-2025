import { readFileContent } from "../filereader.js";

const input = readFileContent("3input.txt").trim().split(/\r?\n/);

function parseToNumberArray(str) {
  return str.split("").map(Number);
}

let sumOfJolts = 0;

for (let i = 0; i < input.length; i++) {
  const row = parseToNumberArray(input[i]);

  let firstMax = Math.max(...row);
  let firstMaxPosition = row.indexOf(firstMax);

  let popped = [];

  if (firstMaxPosition > row.length - 12) {
    popped = row.splice(firstMaxPosition, 1);
  }

  let firstMaxNumbers = [];
  let firstMaxPositions = [];
  let numberString = firstMax.toString();

  function findMax(num) {
  

    if () {
    } else {
      findMax();
    }
  }

  row.forEach((num, index) => {
    if (num === firstMax) {
        while ()

    }
  });
}

console.log("Sum of jolts:", sumOfJolts);
