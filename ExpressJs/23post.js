// 23.	program for post HTTP method using Express.js
const express=require('express')
const app=express() 
app.use(express.json()) 

app.post('/stud',(req,res)=>{
    
    res.send("Received data:"+req.body.name);
})

app.listen(3000,()=>{
    console.log("Server Started")
})