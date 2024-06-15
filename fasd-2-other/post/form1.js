var expr=require("express")
const path=require("path")
const bodyparser=require("body-parser")
var app=expr()
app.use(bodyparser.urlencoded({extended:false}))
const staticpath=path.join(__dirname,"../post")
app.use(expr.static(staticpath,{index:"form1.html"}))
app.post("/",(req,res)=>{
    const response={f:req.body.fname,l:req.body.lname,m:req.body.mobile,g:req.body.gender}
res.send(response)})
app.listen(2500)


