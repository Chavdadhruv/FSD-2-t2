var expr=require("express")
const path=require("path")
var app=expr()
const staticpath=path.join(__dirname,"../public")
app.use(expr.static(staticpath,{index:"task.html"}))
app.get("/hi",(req,res)=>{
    res.set("content-type","text/html")
    s=(req.query.com).split(".");
    for(var i in s){
        res.write(s[i]+"<br>")
    }
    res.end()
})
app.listen(5023)


