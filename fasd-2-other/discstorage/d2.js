var expr=require("express")
const multer=require("multer")
var app=expr()
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/d2.html")
})
var storage = multer.diskStorage({
    destination: "multiple",
    filename:function(req,file,cb){
    cb(null,file.originalname)
    }
})
var upload=multer({storage:storage,limits:{fileSize:1*1024*1024}})
app.post("/uploadfile",upload.array("mypic",5),(req,res)=>{
    const files=req.files
    if(files){
        for(i of files){
            res.write("<h1>File "+JSON.stringify(i.originalname)+"has been uploaded</h1>")

        }
        res.send()
    }
})
app.listen (131)
