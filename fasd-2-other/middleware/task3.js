var expr=require("express")
var path=require("path")
var app=expr()
const staticpath=path.join(__dirname,"../middleware")
app.use(expr.static(staticpath,{index:"task3.html"}))

app.get('/login',(req,res,next)=>{
    res.set("content-type","text/html")
    res.write("<h1 style='color:red'>Wlcome LJU</h1>")
    res.write("your Email id:"+req.query.email+"<br>")
    res.write("You can subscribe to daily updates")
    next()
}) 
app.get('/login',(req,res,next)=>{
    if(req.query.check=="on"){
      //  res.set("content-type","text/html")
        res.write("<h3>Thankyou subscription</h3> <a href='/'>Logout</a>")
        
    }
    else{
        res.write("<h3>You can subscribe to daily updates</h3> <a href='/sub'>Subscribe</a>")
        next()
    }
})

app.get("/sub",(req,res)=>{
    res.set("content-type","text/html")
    res.write("<h3>Thankyou subscription</h3><a href='/'>Logout</a>")
    res.send()
})
app.listen(106)