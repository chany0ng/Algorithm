const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(line);
    // input = line.split(" ");
  })
  .on("close", function () {
    const number = parseInt(input[1], 10);
    console.log(input[0][number - 1]);
    process.exit();
  });
