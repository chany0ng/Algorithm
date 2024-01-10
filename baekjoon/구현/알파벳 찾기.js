const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let answer = [];
readline
  .on("line", function (line) {
    input = line.split("");
  })
  .on("close", function () {
    alphabet.forEach((alphabet) => {
      input.includes(alphabet)
        ? answer.push(input.indexOf(alphabet))
        : answer.push(-1);
    });
    console.log(answer.join(" "));
    process.exit();
  });
