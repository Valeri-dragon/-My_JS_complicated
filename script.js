let num = 266219;
let numStr = new String(num).split("");
let score = 1;
for (let i = 0; i < numStr.length; i++) {
  console.log((score = score * Number(numStr[i])));
}
let degree = score ** 3;
console.log(degree);
let strDegree = degree.toString();
console.log(Number(strDegree.slice(0,2)))