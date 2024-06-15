var expr=require("express")
const path=require("path")
var app=expr()
const staticpath=path.join(__dirname,"../public")
app.use(expr.static(staticpath,{index:"form.html"}))
app.get("/process",(req,res)=>{
    const response={u:req.query.name,p:req.query.password}
    console.log(response)
res.send(response)})
app.listen(2501)


