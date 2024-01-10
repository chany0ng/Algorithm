const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let obj = {};
readline.on("line", (line) => {
  input = line.trim().toUpperCase().split("");
  // input.push(line);
  input.forEach((it) => {
    obj[it] ? (obj[it] += 1) : (obj[it] = 1);
  });
  const max = Math.max(...Object.values(obj));
  if (Object.values(obj).filter((value) => value === max).length > 1) {
    console.log("?");
  } else {
    for (const key in obj) {
      if (obj[key] === max) {
        console.log(key);
      }
    }
  }
  readline.close();
});
