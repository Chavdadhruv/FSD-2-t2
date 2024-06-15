var cp=require('cookie-parser')
var express=require('express')
var app=express()
app.use(cp())
app.get('/',(req,res,next)=>{
    res.cookie("c1",'k')
    res.cookie("c2",'s')
    next()
})
app.get('/',(req,res,next)=>{
    console.log(req.cookies) //terminal
    next()
})
app.get('/',(req,res)=>{
    res.clearCookie("c1")
    res.send('1 cookie is deleted')
})
app.listen(770)