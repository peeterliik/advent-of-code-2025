import { readFileContent } from "../filereader.js";

const input = readFileContent("2input.txt").trim().split(",");

const makeRange = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step
  );

let sumOfInvalids = 0;

function isInvalid(id) {
  const firstHalf = id.slice(0, id.length / 2);
  const secondHalf = id.slice(id.length / 2);
  if (firstHalf === secondHalf) {
    return true;
  }
  return false;
}

for (let i = 0; i < input.length; i++) {
  const inputArray = input[i].split("-");
  const start = Number(inputArray[0]);
  const finish = Number(inputArray[1]);

  const range = makeRange(start, finish + 1, 1);

  range.forEach((id) => {
    if (isInvalid(id.toString())) {
      sumOfInvalids += id;
    }
  });
}

console.log(sumOfInvalids);
