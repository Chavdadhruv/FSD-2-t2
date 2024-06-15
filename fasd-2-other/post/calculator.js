var expr=require("express")
const path=require("path")
const bodyparser=require("body-parser")
var app=expr()
app.use(bodyparser.urlencoded({extended:false}))
const staticpath=path.join(__dirname,"../post")
app.use(expr.static(staticpath,{index:"calculator.html"}))
app.post("/",(req,res)=>{
    res.set("content-type","text/html")
    let num1=parseInt(req.body.num1)
    let num2=parseInt(req.body.num2)
    if(num1>0 && num2>0){
        if(req.body.cal=='add'){
            a=num1+num2
            res.write('<h1 style="color:red">Add is:'+a+'</h>')
        }
        else if(req.body.cal=='sub'){
            a=num1-num2
            res.write('<h1 style="color:blue">Sub is:'+a+'</h1>')
    }
    else if(req.body.cal=='mul'){
        a=num1*num2
        res.write('<h1 style="color:green">Mul is:'+a+'</h>')
    }
    else if(req.body.cal=='div'){
        a=num1/num2
        res.write('<h1 style="color:orange">div is:'+a+'</h>')
    }
    else{
        res.write('<h1 style="color:orange">Please select any opration</h>')
    }
}
})
app.listen(2502)

