// 13.	program for demonstrating any 5 functions of OS utility module
const os= require('os')
console.log("Architecture :",os.arch())
console.log("Platform :",os.platform())
console.log("Hostname :", os.hostname())
console.log("Free memory :", os.freemem()) 
console.log("Total memory :", os.totalmem())
console.log("System type: ",os.type())