const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
readline
  .on("line", function (line) {
    input = line.split(" ");
  })
  .on("close", function () {
    if (input[0] === "") {
      input.shift();
    }
    if (input[input.length - 1] === "") {
      input.pop();
    }
    console.log(input.length);
    process.exit();
  });
