const expr=require("express");
const app=expr()
const sess=require("express-session")
app.use(sess({
    resave:true,  //do not save session if not modify
    saveUninitialized:true,  //do not create session if something is not store
    secret:"hello"  //secret key-> unique in from of string
}));
app.get("/",(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++;
        res.send(`<h1 style="color:red">You have visited page ${req.session.page_views}</h1>`)
    }
    else{
        req.session.page_views=1
        res.send(`<h1 style="color:green">You have visited page ${req.session.page_views}</h1>`)

    }
})

app.listen(57)