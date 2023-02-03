const num = 266219;
const numStr = new String(num).split("");
let score = 1;
for (let i = 0; i < numStr.length; i++) {
  console.log((score = score * Number(numStr[i])));
}
const degree = score ** 3;
console.log(degree);
console.log(Number(degree.toString().slice(0,2)))