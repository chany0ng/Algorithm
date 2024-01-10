const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
const obj = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
readline.on("line", (line) => {
  input = line.trim();
  for (let alphabet of obj) {
    input = input.split(alphabet).join("*");
  }
  console.log(input.length);
  readline.close();
});
