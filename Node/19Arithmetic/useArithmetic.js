
const ar = require('./arithmetic');

console.log("Addition:", ar.add(10, 5));
console.log("Subtraction:", ar.sub(10, 5));
console.log("Multiplication:", ar.mul(10, 5));
console.log("Division:", ar.div(10, 5));


// Remember these two important lines:
// - module.exports – Exports functions from a file.
// - require('./arithmetic') – Imports the arithmetic module.