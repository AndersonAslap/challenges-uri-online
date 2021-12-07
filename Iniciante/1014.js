let input = require("fs").readFileSync("stdin", "utf8");

let values = input.split("\n");

let km = parseInt(values.shift());
let l = parseFloat(values.shift()).toFixed(1);

let km_l  = parseFloat(km/l).toFixed(3);

console.log(`${km_l} km/l`);