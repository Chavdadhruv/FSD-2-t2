// var expr=require("express")
// var app=expr()
// app.set("view engine","pug")
// var p=require("path")
// const sp=p.join(__dirname,"../public")
// app.get("/",(req,res)=>{
//     res.render(sp+"/one")
// })
// app.listen(5556)
// var expr=require("express")
// var app=expr()
// app.set("view engine","pug")
// var p=require("path")
// const sp=p.join(__dirname,"../public")
// app.get("/",(req,res)=>{
// res.render(sp+"/one")
// })
// app.get("/data",(req,res)=>{
// res.set("content-type","text/html")
// res.write("<h1> Your name is "+req.query.name+" and yor email id is "+req.query.email+"</h1>")
// res.send()
// })
// app.listen(1234)


// write express js script to pass data like message name id from express application 
// to pug template and h1,h2,h3 tag 
// res and display data in browser both the file in the same folder
// write express js script to pass data like message name id from express application to pug tempelate h1 h2 h3 respectively
// and display data in browser both file in same folder
var expr=require("express")
var app=expr()
app.set("view engine","pug")
app.get("/",(req,res)=>{
res.render(__dirname+"/pug",
    {message:"Hello from express",
        name:"lju",
        id:1
    })
})
app.listen(1234)

// write express js script to load which contains like name email and radio buttons for the  ons the form submited data must be displayedd on page /data using pug file

