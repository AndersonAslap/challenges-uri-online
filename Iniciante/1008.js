let input = require("fs").readFileSync("stdin", "utf8");

let valores = input.split("\n");

let numero_funcionario = parseInt(valores.shift());
let horas_trabalhadas = parseInt(valores.shift());
let valor_hora = parseFloat(valores.shift()).toFixed(2);

let salary = (horas_trabalhadas * valor_hora);

console.log(`NUMBER = ${numero_funcionario}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);