
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

module.exports = { add, sub, mul, div };


// Remember these two important lines:
// - module.exports – Exports functions from a file.
// - require('./arithmetic') – Imports the arithmetic module.