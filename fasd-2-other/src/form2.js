var expr=require("express")
const path=require("path")
var app=expr()
const staticpath=path.join(__dirname,"../public")
app.use(expr.static(staticpath,{index:"form2.html"}))
app.get("/page",(req,res)=>{
    const response={e:req.query.email,p:req.query.password,s:req.query.select}
    console.log(response)
res.send(response)})
app.listen(2502)


