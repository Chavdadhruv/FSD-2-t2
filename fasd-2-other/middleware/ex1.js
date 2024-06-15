var express=require("express")
var app=express()
app.get("/",(req,res,next)=>{
    res.set("conten-type","text/html")

    res.write("Request Recived<br>")
    next()
})

app.get("/",(req,res,next)=>{
    res.write("hello")
    next()
})

app.get("/",(req,res)=>{
    res.send()
})
app.listen(3003)