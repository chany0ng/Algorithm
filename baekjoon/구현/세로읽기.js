const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
readline
  .on("line", function (line) {
    const lineArray = line.split("");
    input.push(lineArray);
  })
  .on("close", function () {
    let string = "";
    // 각 배열중 가장 length가 긴 배열을 찾는다
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < input.length; j++) {
        if (input[j][i] !== " " && input[j][i]) {
          string += input[j][i];
        }
      }
    }
    console.log(string);
  });
