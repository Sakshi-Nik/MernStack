const fs=require('fs')

const write=fs.createWriteStream('demo.txt')

write.write("Hello world")
write.end()

write.on('finish',()=>{
    console.log("writing completed")
})