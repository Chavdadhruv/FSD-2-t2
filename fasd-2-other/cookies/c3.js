var cp=require('cookie-parser')
var express=require('express')
var app=express()
app.use(cp())
app.get('/',(req,res)=>{
    res.cookie("xyz",'pqr')
    res.cookie('s_cookies','sara',{expires:new Date(Date.now()+5000)}) //syntax-1
  //  res.cookie('s_cookies','sara',{maxAge:3000}) //syntax-2
     res.clearCookie("xyz")
    console.log(req.cookies) //terminal
    res.send('cookie set') //browser
})
app.listen(52)