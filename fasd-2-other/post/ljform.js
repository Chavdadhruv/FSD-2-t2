var expr=require("express")
const path=require("path")
const bodyparser=require("body-parser")
var app=expr()
app.use(bodyparser.urlencoded({extended:false}))
const staticpath=path.join(__dirname,"../post")
app.use(expr.static(staticpath,{index:"ljform.html"}))
app.post("/",(req,res)=>{
    if(req.body.username=='admin'){
        res.write('<h1 style="color:green">welcome admin</h1>')
    }
    else{
        res.write('<h1 style="color:red">please login with admin</h1>')
    }})
app.listen(2500)

