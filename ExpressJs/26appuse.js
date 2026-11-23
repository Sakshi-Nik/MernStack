const express=require('express');
const app=express();

app.use((req,res,next)=>{
res.send("app use method");
next();
})

app.get('/stud',(req,res)=>{
    res.send("app get method");
}
);

app.listen(3000,()=>{
    console.log("Server Started");
}       );