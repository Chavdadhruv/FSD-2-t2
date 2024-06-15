var express=require("express")
var app=express()

// app.get("/",(req,res)=>{
//     const users=[
//         {"id":1,"name":"John"},
//         {"id":2,"name":"xyz"}
//     ]

//     res.set("content-type","application/json")
//     res.send(users) //method-1
// })
// app.listen(2001)

// app.get("/",(req,res)=>{
//     const users=[
//         {"id":1,"name":"John"},
//         {"id":2,"name":"xyz"}
//     ]

//     res.set("content-type","application/json")
//     res.write(JSON.stringify(users)) //method-2
//     res.end()
// })
// app.listen(2000)

// app.get("/",(req,res)=>{
//     const users=[
//         {"id":1,"name":"John"},
//         {"id":2,"name":"xyz"}
//     ]

//     res.set("content-type","application/json")
//     res.JSON(users) //method-3
// })
// app.listen(2001)


//write an express.js script 1 json array of 3 object having members name age sort this object according the age
// and name must be shorted if user req sortedname to url then all name should be printed according to the
// assending order to the age

app.get("/",(req,res)=>{
    const user=[
        {age:18,name:"John"},
        {age:29,name:"xyz"},
        {age:22,name:"abc"}
    ]
    users=user.sort((a,b)=>{
        age.a-age.b
    })
    app.get('/sortedname',(req,res)=>{
        res.send(users)
    })
})
app.listen(2001)