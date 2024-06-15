// // file upload program 
// // 1)diskStorage method 
// // -destination:-"foldername"
// // -filename:(req,file,cb)=>{
//     cd(null,file.orignalname)             user input name
//     or
//     file.fieldname                         fieldname is html input fixname 
//     }
//     // for single file at a time
// upload=multer({storage: }).single(fieldname)
//     // for multi file at a time
// upload=multer({storage: }).array(fieldname)




// const express = require('express');
// const app = express();
// const multer=require("multer")
// var store=multer.diskStorage({
//     destination:"my folder",
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname)
//     }
// })
// var upload=multer({storage:store}).single("mypic")
// app.use(express.static("../public",{index:"6.html"}))
// app.post("/upload",upload,(req,res)=>{
//     if(req.file){
//         res.send("<h1> your file"+req.file.originalname+"has been uploaded in "+req.file.destination+"</h1>")
//     }
// })
// app.listen(2004)

// // file upload program 
// // 1)diskStorage method 
// // -destination:-"foldername"
// // -filename:(req,file,cb)=>{
//     cd(null,file.orignalname)             user input name
//     or
//     file.fieldname                         fieldname is html input fixname 
//     }
//     // for single file at a time
// upload=multer({storage: }).single(fieldname)
//     // for multi file at a time
// upload=multer({storage: }).array(fieldname)




// const express = require('express');
// const app = express();
// const multer=require("multer")
// var store=multer.diskStorage({
//     destination:"my folder",
//     filename:(req,file,cb)=>{
//         cb(null,file.fieldname+"_"+Date.now()+".jpg")
//         console.log(file)
//     }
// })
// var upload=multer({storage:store}).single("mypic")
// app.use(express.static("../public",{index:"6.html"}))
// app.post("/upload",upload,(req,res)=>{
//     if(req.file){
//         res.send("<h1> your file"+req.file.originalname+"has been uploaded in "+req.file.destination+"</h1>")
//     }
// })
// app.listen(2004)






// restful API

// user to exprees and to html
