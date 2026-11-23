const fs=require('fs')

data="write data in file"
fs.writeFile('sample.txt', data, (err)=>{
    if (err){
        console.log('error')
    }
    else{
        console.log("File writen ")
    }
})