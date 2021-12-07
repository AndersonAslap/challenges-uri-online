let input = require("fs").readFileSync("stdin", "utf8");

let values = input.split("\n");

let name = values.shift();
let salary = parseFloat(values.shift()).toFixed(2);
let sales = parseFloat(values.shift()).toFixed(2);

let commission_sales = parseFloat(sales * 0.15);

let salary_final = parseFloat(salary) + parseFloat(commission_sales);

console.log(`TOTAL = R$ ${salary_final.toFixed(2)}`);