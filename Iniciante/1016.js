let input = require("fs").readFileSync("stdin", "utf8");

let minutes = parseInt(input) * 2;

console.log(`${minutes} minutos`);