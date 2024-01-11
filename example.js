const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let [T, ...left] = input.map((str) => str.replace(/\r/g, ""));

// 함수형 솔루션
// function solution(n, arr){
//   let ans = 0;
//   console.log(n, arr);
//   return ans;
// }

// solution(n, arr);
