let input = require("fs").readFileSync("stdin", "utf8");

const PI = 3.14159;

let raio = parseFloat(input).toFixed(2);

let area_circulo = (PI * (raio * raio));

let valor_area_circulo_formatado = area_circulo.toFixed(4);

console.log(`A=${valor_area_circulo_formatado}`);