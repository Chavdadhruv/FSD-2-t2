// framework of nodejs
// install express js 
// proper folder structure public,src
// npm init -y 
// syntax
// 1) application create
// import express
// var expr = require('express');
// var app=expr()
// // or
// var app=require("express")()
// // 2)Routing 
// // app.method(path,callback)
// //     get 
// //     post
// //     put
// //     delte
// // res.set("content type",mimetype)
// // res.write()
// // // OR YOU CAN WRITE BUT     DO NOT WRITE BOTH OF TOGETHER
// // res.send()
// // res.status()
// // 3) lister 
// // app.listen(port,CALLBACK)
// // // CALLBACK IS OPTIONAL
// // methods
// res.end()
// res.json()
//
// res.send()
// // show file on server
// res.sendFile()
// // direct open next page
// res.redirect()


// var expr=require("express")
// var app=expr()
// app.get("/",(req,res)=>{
//     res.set("content-type","text/html")
//     res.write("<h1>hello world</h1><u><button><a href='/about'>click about</a></button>")
//     res.send()
// })
// app.get("/about",(req,res)=>{
//     res.set("content-type","text/html")
//     res.write("<h1>hello about page</h1><button><a href='/'>click home</a></button>")
//     res.send()

// })
// app.listen(5457,()=>{
//     console.log("server is running")
// })

// // req.params
// // 2)req.params


// var expr=require("express")
// var app=expr()
// app.get("/:id",(req,res)=>{
//     res.send("the id you entered is"+req.params.id)
// })
// app.get("/about",(req,res)=>{
//     res.set("content-type","text/html")
//     res.send("this is about page what you write"+req.params.id)

// })
// app.listen(5458,()=>{
//     console.log("server is running")
// })

// // 3) tomany params

// var expr=require("express")
// var app=expr()
// app.get("/things/:name/:id",(req,res)=>{
//     res.send("the id you entered name is"+req.params.name+"entered id is"+req.params.id)
// })
// app.get("/about",(req,res)=>{
//     res.set("content-type","text/html")
//     res.send("this is about page what you write"+req.params.id)

// })
// app.listen(5459,()=>{
//     console.log("server is running")
// })


// // json processing
// // methods 1)
// var expr=require("express")
// var app=expr()
// var student={name:"abc",age:28}
// app.get("/",(req,res)=>{
//     res.set("content-type","application/json")
//     res.write(JSON.stringify(student))
//     res.send()
//     })
//     app.listen(5460,()=>{
//         console.log("server is running")
//     })


    // method 2

// var expr=require("express")
// var app=expr()
// var student={name:"abc",age:28}
// app.get("/",(req,res)=>{
//     res.set("content-type","application/json")
//     // res.write(JSON.stringify(student))
//     // auto convert in string 
//     res.send(student)
//     })
//     app.listen(5461,()=>{
//         console.log("server is running")
//     })


       // method 3

// var expr=require("express")
// var app=expr()
// var student={name:"abc",age:28}
// app.get("/",(req,res)=>{
//     res.set("content-type","application/json")
//     // res.write(JSON.stringify(student))
//     // auto convert in string 
//     res.json(student)
//     })
//     app.listen(5462,()=>{
//         console.log("server is running")
//     })



    // task-1
    // // write expressjs script to define one json array of three objects having properties name and age 
    // sort this object according toa age if user request sorted name inurl than all name 
    // along with age should be printed according to descending and also desplay json obj on home page 

    
const express = require('express');
const app = express();
const port = 3000;
    
    // Define a JSON array of three objects with properties "name" and "age"
const people = [
    { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 35 }
    ];
    
    // Sort the array by age
    people.sort((a, b) => a.age - b.age);
    
    // Define a route for the home page that displays the JSON array
    app.get('/', (req, res) => {
      res.json(people);
    });
    
    // Define a route for the sorted names page
    app.get('/sort', (req, res) => {
      // Sort the array by name in descending order
      const sortedPeople = people.slice().sort((a, b) => b.name.localeCompare(a.name));
      // Map the array to an array of names and ages
      const namesAndAges = sortedPeople.map(person => `${person.name} (${person.age})`);
      // Send the array of names and ages as a response
      res.send(namesAndAges);
    });
    
    // Start the server
    app.listen(5462,()=>{
        console.log("server is running")
    })
