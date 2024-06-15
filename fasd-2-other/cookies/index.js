var express=require('express')
var app=express()
var cp=require('cookie-parser')
app.use(cp())
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")})

    app.get('/next',(req,res,)=>{
        const response={u:req.query.username,p:req.query.password}
    res.cookie("Username",response.u)
    res.cookie("Password",response.p)
})

app.get('/next',(req,res)=>{
    console.log(req.cookies)
    res.send('cookie send')
})
app.listen(55)