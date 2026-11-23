const express=require('express')
const app=express()
app.use(express.json())
app.put('/stud', (req,res)=>{
    res.send('put name'+req.body.name)
})

app.listen(3000,()=>{
    console.log("Server Started")
});