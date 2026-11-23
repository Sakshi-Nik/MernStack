const express=require('express');
const app=express();
const router=express.Router();

router.get('/stud',(req,res)=>{
    res.send("router get method");
});
app.use('/',router);

app.listen(3000,()=>{
    console.log("Server Started");
});