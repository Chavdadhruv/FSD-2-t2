// const expr=require("express")
// const app=expr()
// const path=require("path")
// const staticpath=path.join(__dirname,"../public")
// app.use(expr.static(staticpath))
// app.get("/process_get",(req,res)=>{
//     const response={
//         fname:req.query.Firstname,
//         pass:req.query.password,
//         comm:req.query.commant
//     }
//     res.send(response)
// })
// app.listen(5457)

// write exp js script to print message in next line split by dotand use get method to submit the data
// html file contains from of text area for the message and submit button
const expr=require("express")
const app=expr()
const path=require("path")
const staticpath=path.join(__dirname,"../public")
app.use(expr.static(staticpath))
app.get("/process_get",(req,res)=>{
    const response={
        comm:req.query.commant
    }
    res.send(response.comm.split('.'))
})
app.listen(5457)
