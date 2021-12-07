let input = require("fs").readFileSync("stdin", "utf8");

let values = input.split(" ");

const PI = 3.14159;

let value1 = parseFloat(values.shift()).toFixed(1);
let value2 = parseFloat(values.shift()).toFixed(1);
let value3 = parseFloat(values.shift()).toFixed(1);

let triangle_area = parseFloat((value1 * value3) / 2).toFixed(3) ;
let circle_area = parseFloat(PI * (value3 * value3)).toFixed(3);
let trapeze_area = parseFloat(((parseFloat(value1) + parseFloat(value2)) * value3) / 2).toFixed(3);
let square_area = parseFloat(value2 * value2).toFixed(3);
let rectangle_area = parseFloat(value1 * value2).toFixed(3);

console.log(`TRIANGULO: ${triangle_area}`);
console.log(`CIRCULO: ${circle_area}`);
console.log(`TRAPEZIO: ${trapeze_area}`);
console.log(`QUADRADO: ${square_area}`);
console.log(`RETANGULO: ${rectangle_area}`);