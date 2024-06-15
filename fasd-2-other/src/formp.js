var expr=require("express")
const path=require("path")
const bodyparser=require("body-parser")
var app=expr()
app.use(bodyparser.urlencoded({extended:false}))
const staticpath=path.join(__dirname,"../public")
app.use(expr.static(staticpath,{index:"formp.html"}))
app.post("/process",(req,res)=>{
    const response={u:req.body.name,p:req.body.password}
res.send(response)})
app.listen(2500)


