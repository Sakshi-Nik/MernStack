const fs =require('fs')

const read=fs.createReadStream('demo.txt')
read.on('data',(chunks)=>{
    console.log(chunks.toString())
})