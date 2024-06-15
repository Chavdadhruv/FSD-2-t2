const expr=require("express");
const app=expr()
const sess=require("express-session")
app.use(sess({
    resave:true,  //do not save session if not modify
    saveUninitialized:true,  //do not create session if something is not store
    secret:"hello"  //secret key-> unique in from of string
}));
app.get("/",(req,res)=>{
    if(!req.session.fname){
        req.session.fname="xyz"
        res.redirect('/fetchsession')
    }
    else{
        console.log('session already created')
    }
})

app.get("/fetchsession",(req,res)=>
    {
        res.write(`<h1>welcome ${req.session.fname}</h1>`)
        res.write(`<button><a href="/delete"> Delate Session</a></button>`)
        res.send()
    })
    
    app.get("/delete",(req,res)=>
    {
        req.session.destroy()
        res.send("session destroy")
    })
    
app.listen(56)