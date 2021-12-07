let input = require("fs").readFileSync("stdin", "utf8");

let sphere_radius = parseFloat(input).toFixed(2);

const PI = 3.14159;

let sphere_volume = parseFloat((4/3.0) * PI * (sphere_radius * sphere_radius * sphere_radius)).toFixed(3);

console.log(`VOLUME = ${sphere_volume}`);