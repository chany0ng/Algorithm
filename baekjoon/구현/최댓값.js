const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
readline
  .on("line", function (line) {
    const lineArray = line.split(" ").map((a) => parseInt(a,10));
    input.push(lineArray);
  })
  .on("close", function () {
    let max = 0;
    let row = 0;
    let col = 0;

    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] >= max) {
          max = input[i][j];
          row = i + 1;
          col = j + 1;
        }
      }
    }

    console.log(max);
    console.log(`${row} ${col}`);
  });
