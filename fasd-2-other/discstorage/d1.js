var expr=require("express")
const multer=require("multer")
var app=expr()
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/d1.html")
})
var storage = multer.diskStorage({
    destination: "upload",
    filename:function(req,file,cb){
    cb(null,file.originalname)
    }
})
var upload=multer({storage:storage})
app.post("/uploadfile",upload.single("mypic"),(req,res)=>{
    const file=req.file
    if(file){
        res.send("<h1>File "+file.originalname+" has been uploaded in "+file.destination+" folder </h1>")
    }
})
app.listen (12)
