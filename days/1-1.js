import { readFileContent } from "../filereader.js";

const input = readFileContent("1input.txt").trim().split("\n");

let position = 50;

const wrap = (n) => (n + 100) % 100;

let zeroCount = 0;

for (let i = 0; i < input.length; i++) {
  const command = input[i];

  console.log(command);
  const side = command.charAt(0);
  const clicks = Number(command.substring(1));

  if (side === "L") {
    position = wrap(position - clicks);
  } else if (side === "R") {
    position = wrap(position + clicks);
  }

  console.log(position);

  if (position === 0) {
    zeroCount++;
  }
}

console.log(zeroCount);
