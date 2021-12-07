let input = require("fs").readFileSync("stdin", "utf8");

let valores = input.split("\n");

let valor1 = parseInt(valores.shift());
let valor2 = parseInt(valores.shift());
let valor3 = parseInt(valores.shift());
let valor4 = parseInt(valores.shift());

let diferenca = (valor1 * valor2 - valor3 * valor4);

console.log(`DIFERENCA = ${diferenca}`);