// 12.	program for demonstrating any 5 functions of process global object
const process=require('process')


console.log("version:",process.version)
console.log("Architecture :",process.arch)
console.log("Cuurent directory:",process.cwd())
console.log("Process id",process.pid)
console.log("Platform:",process.platform)
console.log("Memory usage:",process.memoryUsage())