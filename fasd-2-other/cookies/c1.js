var cp=require('cookie-parser')
var express=require('express')
var app=express()
app.use(cp())
app.get('/',(req,res)=>{
    res.cookie('mycookie','sachin') //inspect
    console.log(req.cookies) //terminal
    res.send('cookie set') //browser
})
app.listen(50)