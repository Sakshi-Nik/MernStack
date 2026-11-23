// 9.	program to read the contents from the directory and display on console using Node.j
const fs=require('fs')

fs.readdir('.', (err,files)=>{
    if (err){
        console.log("error")
    }
    else{
        console.log(files)
    }
})