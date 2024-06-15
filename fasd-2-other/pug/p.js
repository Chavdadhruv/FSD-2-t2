var expr=require('express')
var app=expr()
app.set("view engine", "pug")
var p=require("path")
app.set("views",__dirname)
app.get("/",(req,res)=>
{
    res.render('example',{message:'Hello',name:'LJU'})
})

app.listen(502)