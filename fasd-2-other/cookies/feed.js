
var express=require('express')
var app=express()
var cp=require('cookie-parser')
app.use(cp())
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/feed.html")})

    app.get('/feedback',(req,res)=>{
    res.set("content-type","text/html")
    const response={u:req.query.name,e:req.query.email,m:req.query.message,r:req.query.r}
    res.cookie("Username",response.u)
    res.cookie("Email",response.e)
    res.cookie("Message",response.m)
    res.cookie("rating",response.r)
    //res.send("Thankyou for feedback")
    res.send("<a href='/feeddetails'>show Feedback</a>")

})

app.get('/feeddetails',(req,res)=>{
    res.set("content-type","text/html")
    const response=req.cookies
    if(response){
    res.send(`<h1>Feed Details</h1><p><h2>Name:${response.Username}</h2></p><p><h2>Email:${response.Email}</h2></p><p><h2>Massage:${response.Message}</h2></p><p><h2>Rating:${response.rating}</h2></p><a href="/">Logout</a>`)

}
else{
    res.send("No feedback")
}
})
app.listen(55)