const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [T, ...left] = input.map((str) => str.replace(/\r/g, ""));
let intK = [];
let strW = [];
for (let i = 0; i < left.length; i++) {
  i % 2 === 0 ? strW.push(left[i]) : intK.push(Number(left[i]));
}

for (let i = 0; i < T; i++) {
  let obj = {};
  let filteredArr = {};
  let temp = [];
  for (let j = 0; j < strW[i].length; j++) {
    let char = strW[i][j];
    obj[char] ? obj[char][0]++ : (obj[char] = [1]);
    obj[char].push(j);
  }
  filteredArr = Object.values(obj).filter((arr) => {
    return arr[0] >= intK[i] && arr.splice(0, 1);
  });
  let MIN = intK[i];
  filteredArr?.forEach((arr) => {
    for (let i = 0; i < arr.length - MIN + 1; i++) {
      temp.push(arr[i + MIN - 1] - arr[i] + 1);
    }
  });
  filteredArr.length !== 0
    ? console.log(`${Math.min(...temp)} ${Math.max(...temp)}`)
    : console.log(-1);
}
