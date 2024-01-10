const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [num, dna, condition] = input.map((str) => str.replace(/\r/g, ""));
let num2 = num.split(" ").map(Number);
const [A, C, G, T] = condition.split(" ").map(Number);
let answer = 0;
let pw = { A: 0, C: 0, G: 0, T: 0 };

for (let i = 0; i < num2[1]; i++) {
  pw[dna[i]] += 1;
}
if (pw["A"] >= A && pw["C"] >= C && pw["G"] >= G && pw["T"] >= T) {
  answer++;
}
for (let i = num2[1]; i < dna.length; i++) {
  let deleteChar = dna[i - num2[1]];
  pw[deleteChar] -= 1;
  pw[dna[i]] += 1;

  if (pw["A"] >= A && pw["C"] >= C && pw["G"] >= G && pw["T"] >= T) {
    answer++;
  }
}
console.log(answer);
