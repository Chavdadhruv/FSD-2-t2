const expr=require("express")
const path=require("path")
const app=expr()
const staticpath=path.join(__dirname,"../public")
app.use(expr.static(staticpath,{index:"other.html"}))
app.listen(2501,()=>{
    console.log("Server is running on port 2501")
})