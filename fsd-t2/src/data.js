
//data.js
const expr=require("express")
const router=expr.Router()
const mvi=[{id:101,name:"abc",year:2000,rating:9.5,
    id:102,name:"def",year:2001,rating:6.5,
    id:103,name:"ghi",year:2002,rating:7.5,
}]
module.exports=router
router.get("/",(req,res)=>{
    res.json(mvi)
})

router.get("/:id([0-9]{3,})",(req,res)=>{
    var currmovie=mvi.filter((m)=>{
        if(m.id==req.params.id){
            return true
        }
    })
    if(currmovie.length==1){
        res.json(currmovie[0])
    }
    else{
        res.send("not found")
    }
})