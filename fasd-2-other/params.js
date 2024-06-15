var express=require("express")
var app=express()

app.get('/user/:userId/test/:test',(req,res)=>{
    req.params;
    res.send(req.params)
})
app.listen(5001)

//in running:
//localhost:3002/user/342/test/123

