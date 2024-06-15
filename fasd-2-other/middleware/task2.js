var expr=require("express")
const path=require("path")
const bodyparser=require("body-parser")
var app=expr()
app.use(bodyparser.urlencoded({extended:false}))
const staticpath=path.join(__dirname,"../middleware")
app.use(expr.static(staticpath,{index:"task2.html"}))
app.post("/",(req,res,next)=>{
    if(req.body.username=='admin'){
        next()
    }
    else{
        res.write('<h1 style="color:red">Wrong UserName</h1>')
    }})
app.post('/',(req,res)=>{
    res.write("<h1>Welcome Admin</h1>")
    res.send()
})
app.listen(2500)

