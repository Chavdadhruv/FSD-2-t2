var expr=require('express')
var app=expr()
app.set("view engine", "pug")
const staticp=__dirname
app.get("/",(req,res)=>
{
    res.render(staticp+"/one")
})

app.listen(500)