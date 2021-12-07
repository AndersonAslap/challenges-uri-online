let input = require("fs").readFileSync("stdin", "utf8");

let notas = input.split("\n");

let nota1 = parseFloat(notas.shift()).toFixed(1);
let nota2 = parseFloat(notas.shift()).toFixed(1);

let media = (((nota1 * 3.5) + (nota2 * 7.5))/11);

console.log(`MEDIA = ${media.toFixed(5)}`);