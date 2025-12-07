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

  const fullTurns = Math.floor(clicks / 100);
  const remainingClicks = clicks % 100;

  zeroCount += fullTurns;

  console.log(`Full turns: ${fullTurns}, Remaining clicks: ${remainingClicks}`);

  let newPosition;

  console.log(`Current position: ${position}`);

  if (side === "L") {
    newPosition = position - remainingClicks;
    console.log(`New position before wrap: ${newPosition}`);

    if (newPosition <= 0 && position !== 0) {
      zeroCount++;
    }
  } else if (side === "R") {
    newPosition = position + remainingClicks;
    console.log(`New position before wrap: ${newPosition}`);

    if (newPosition >= 100) {
      zeroCount++;
    }
  }

  position = wrap(newPosition);

  console.log(`Wrapped position: ${position}`);
  console.log(`Zero count so far: ${zeroCount}`);
}

console.log(zeroCount);
