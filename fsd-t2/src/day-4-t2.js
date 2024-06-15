// app.get ,app.use,app.post 
// // write next like this (req,res,next)=>{}
// after res.write
// next()
// 2)router level
// 3)error handling(err,req,res,next)
// 4)built-in(expr.static,app.use)
// 5)third party(middleware)
// Import the required modules
// const expr = require('express');
// const app = expr();
// // method-1
// const cb=(req,res,next)=>{
//     console.log('initialized')
//     // res.set("content-type","text/html")
//     res.write("<h1>first</h1>")
// res.send()}
// // method-2                                         
// const cb1=(req,res,next)=>{
//     res.write("<h1>second</h1>")
//     next()
// }
// app.use("/ee",cb,cb1)
// app.get("/ee",(req,res)=>{
//     res.write("<h1>welcome</h1>")
//     res.send()
// }) 
// app.listen(5555)
 
// const expr = require('express');
// const app = expr();
// // method-1
// app.use("/",(req,res,next)=>
// {
//     console.log("request received on"+new Date())
//     next()
// },

// // method-2                                         
// (req,res,next)=>{
//     res.set("content-type","text/html")
//     res.write("<h1>second</h1>")
//     next()
// },
// (req,res)=>{
//     res.write("<h1>welcome</h1>")
//     res.send()
// })
// app.listen(5555)


// var expr=require("express")
// var app=expr()
// app.use(expr.static("../public",{index:"mark5.html"}))
// app.get("/login",(req,res,next)=>
// {
//     res.set("content-type","text/html")
//     res.write("<h1>welcome"+req.query.name+"</h1>")
//     res.write("<h1>your email is"+req.query.email+"</h1>")
// next()})
// app.get("/login",(req,res,next)=>{
//     if(req.query.newsletter=="on")
//         {
//         res.write("<h2>thank you for subscription</h2><a href='/'>logout<a>")
//     }
// else{
//     res.write("<h2>you can subscribe</h2><a href='/subscribe'>subscribe</a>")
//     next()
// }
// })
// app.get("/subscribe",(req,res)=>{
//     res.set("content-type","test/html")
//     res.write("<h1>thank you for subscription </h1> <a href='/'>logout</a>")
//     res.send()
// })   
// app.listen(2004)



// npm install cookie-parser 
// to add/set cookie :- res.cookie(cookiename,value)
// to display req.cookies
// to destroy -> res.clearCookie(cookiename)
var expr=require("express")
var app=expr()
var cookieParser=require("cookie-parser")
app.use(cookieParser())
app.get("/login",(req,res,next)=>
    {
        res.set("content-type","text/html")
        res.write("<h1>welcome"+req.query.name+"</h1>")
        res.write("<h1>your email is"+req.query.email+"</h1>")
        res.cookie("username",req.query.name)
        res.cookie("email",req.query.email)
        next()
        })
        app.get("/logout",(req,res,next)=>
            {
                res.clearCookie("username")
                res.clearCookie("email")
                res.write("<h1>you are logged out</h1>")
                res.send()
                })
                app.get("/",(req,res,next)=>
                    {
                        if(req.cookies.username)
                            {
                                res.write("<h1>welcome "+req.cookies.username+"</h1>")
                                res.write("<h1>your email is "+req.cookies.email+"</h1>")
                                res.write("<a href='/logout'>logout</a>")
                            }
                        else
                            {
                                res.write("<h1>you are not logged in</h1>")
                                res.write("<a href='/login'>login</a>")
                            }
                        res.send()
                    })
app.listen(2004)
