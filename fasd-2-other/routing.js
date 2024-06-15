// var express=require("express")
// var app=express()
// //these two line is complasary in all progrrame

// app.get("/",(req,res)=>
//     {
//     res.set("content-type","text/html")
//     res.send("<h1 style='color:red'>Welcome Home</h1>")
// })

// app.get("/about",(req,res)=>
//     {
//     res.send("<h1 style='color:green'>Welcome about</h1>")
// })

// app.get("/contect",(req,res)=>
//     {
//     res.send("Welcome contect")
// })
// app.listen(3000,()=>{
//     console.log("server running")
// }) //listen callback is optinal


//task-1:create a webpage using expressjs on which the home page display welcome home with big blue tag student page show
//welcome student and about page shows aboutUs in blue italic font respone and routing.

var express=require("express")
var app=express()

app.get("/",(req,res)=>
{
    res.set("conten-type","text/html")
    res.send("<h1 style='color:blue'>welcome home</h1>")
})

app.get("/student",(req,res)=>{
    res.send("welcome student")
})

app.get("/about",(req,res)=>{
    res.send("<i style='color:blue'>welcome about</i>")
})

app.listen(3001,()=>{
    console.log("server running")
}) //listen callback is optinal