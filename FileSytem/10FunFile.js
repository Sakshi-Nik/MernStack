// 10.	program for demonstrating any 5 functions of file systems
const fs = require('fs')

fs.writeFile('demo.txt', "Helloo", (err)=>{
    if (err){
        console.log("error")
    }
    else{
        console.log("data writed")
    }
});

fs.readFile('demo.txt', 'utf-8', (err,data)=>{
    if (err){
        console.log("error")
    }
    else{
        console.log(data)
    }
});

fs.appendFile('demo.txt', '\nsakshi', (err)=>{
    if (err){
        console.log("error")
    }
    else{
        console.log("data appended")
    }
})

fs.rename('demo.txt','new.txt',(err)=>{
    if (err){
        console.log("error")
    }
    else{
        console.log("file renamed")
    }
})

fs.unlink('new.txt',(err)=>{
    if (err){
        console.log("error")
    }
    else{
        console.log("file deleted")
    }
})