// npm install body-parser
// var bodyparser=require("body-parser")
// application.use(bodyparser.urlencoded({extended:false}))
// application.use(expr.urlencoded())
// defult if true qs library false query string library

// var express = require('express');
// var app = express();
// var bodyparser=require("body-parser")
// var path = require('path');

// app.use(bodyparser.urlencoded({extended:false}))
// var staticpath=path.join(__dirname,'../public')

// app.get('/', (req, res) => {
// res.sendFile(staticpath+"/post.html")
// })
// app.post('/process', (req, res) => {
//     res.send(req.body)})
//         app.listen(5000)




        // task no1 create 1 html file named ljform.html and add username password and 
        // submit button data should be submited by http post method 

        // 2 submit button  black color with white text using external css 

        // 3 on home page form should be submited and next page /login should display welcome admin
        //  if username is admin else display please login with admin name 



        const express = require('express');
        const app = express();
        
        const bodyParser = require('body-parser');
        const path = require('path');
        const staticPath = path.join(__dirname, '../src');
        app.use(express.static(staticPath));
        
        app.use(bodyParser.urlencoded({ extended: false }));
        
        app.get('/', (req, res) => {
          res.sendFile(path.join(__dirname, '../public/ljform.html'));
        });
        
        app.post('/login', (req, res) => {
          if (req.body.username === 'admin') {
            res.send('Welcome, admin!');
          } else {
            res.send('Please login with admin name.');
          }
        });
        
        app.listen(5555);