var expr=require("express")
const path=require("path")
const bodyparser=require("body-parser")
var app=expr()
app.use(bodyparser.urlencoded({extended:false}))
const staticpath=path.join(__dirname,"../public")
app.get("/",(req,res)=>{
    res.sendFile(staticpath+"/formp.html")
})
app.post("/process",(req,res)=>{
res.send(req.body)})
app.listen(2507)


