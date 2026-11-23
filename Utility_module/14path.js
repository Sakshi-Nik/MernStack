// 14.	program for demonstrating any 5 functions of Path utility module

const path=require('path')

file='C:\Users\samar\OneDrive\Desktop\MERN\FileSytem\9readDir.js'
console.log("Directory name:",path.dirname(file))
console.log("Extention :", path.extname(file))
console.log("Parse",path.parse(file))
console.log("File name",path.basename(file))
console.log("Join",path.join('folder','js'))