let input = require("fs").readFileSync("stdin", "utf8");

let values = input.split("\n");

let parts1 = values.shift().split(" ");
let parts2 = values.shift().split(" ");

let code_parts1 = parseInt(parts1.shift());
let quantity_parts1 = parseInt(parts1.shift());
let price_parts1 = parseFloat(parts1.shift()).toFixed(2);

let code_parts2 = parseInt(parts2.shift());
let quantity_parts2 = parseInt(parts2.shift());
let price_parts2 = parseFloat(parts2.shift()).toFixed(2);

let pay_value = parseFloat(( quantity_parts1 * price_parts1 ) + ( quantity_parts2 * price_parts2 )).toFixed(2);

console.log(`VALOR A PAGAR: R$ ${pay_value}`);