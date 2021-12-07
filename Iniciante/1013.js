let input = require("fs").readFileSync("stdin", "utf8");

let values = input.split(" ");

let value1 = parseInt(values.shift());
let value2 = parseInt(values.shift());
let value3 = parseInt(values.shift());

let maior  = ((value1 + value2 + Math.abs(value1 - value2)) / 2);

if (maior < value3) {
    maior = value3;
} 

console.log(`${maior} eh o maior`);