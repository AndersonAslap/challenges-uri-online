let input = require("fs").readFileSync("stdin", "utf8");

let notas = input.split("\n");

let nota1 = parseFloat(notas.shift()).toFixed(1);
let nota2 = parseFloat(notas.shift()).toFixed(1);
let nota3 = parseFloat(notas.shift()).toFixed(1);

let media = (((nota1 * 2) + (nota2 * 3) + (nota3 * 5))/10);

console.log(`MEDIA = ${media.toFixed(1)}`);