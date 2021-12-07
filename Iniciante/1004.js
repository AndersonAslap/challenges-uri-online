let input = require("fs").readFileSync("stdin", "utf8");

let valores = input.split("\n");

let valor1 = parseInt(valores.shift());
let valor2 = parseInt(valores.shift());

let PROD = (valor1 * valor2);

console.log(`PROD = ${PROD}`);