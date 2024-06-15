// create form password submit send cookie 
// var expr=require("express")
// var app=expr()
// var cp=require("cookie-parser")
// app.use(cp())
// app.use(expr.static("../public",{index:'4.html'}))
// app.get("/next",(req,res)=>
//     {
//         res.cookie("username",req.query.name)
//         res.cookie("password",req.query.password)
//         res.redirect("/admin")
//         })       
//         app.get("/admin",(req,res)=>
//             {     
//         res.write("<h1>welcome   "+req.cookies.username+"</h1>")
// res.send()})     
// app.listen(7888)

// session install third party 
// npm install express-session
// session use
// require is compulsory secret:'abc'
// resave false
// saveuninitalized :false
// default true

// task-1 write express script to print how much time user visite the page
//  ex if user visit first time message will be printed as yiu have visited page first time 
//  if user visit second time message should be printed you visit second time
// if user visit third time message should be printed you visit third time
// and so on
// use session to track user visit
// var expr=require("express")
// var app=expr()
// var session=require("express-session")
// app.use(session({secret:"abc",resave:false,saveUninitialized:false}))
// app.get("/",(req,res)=>
// {
// if(req.session.count){
// req.session.count++;
// res.write("<h1 style='color:blue'>you have visited page "+req.session.count+" time")
// }
// else{
// req.session.count=1
// res.write("<h1 style='color:red'>you have visited page first time")
// }
// res.send()
// })
// app.listen(7888)



// 4) write a script to meet following requirements: (session)
// a.	create index.html file page and open it on localhost.
// b.	after clicking submit button, it should jump on “savesession” page. Store username in session.
// c.	After saving session, redirect to “fetchsession” page and read value. Put a LOGOUT link button here.
// d.	Jump on delete session page after clicking LOGOUT button.
// e.	Destroy the session on this page and redirect to index.html page.


// // day-5-t2.js
// const express = require('express');
// const session = require('express-session');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(express.static("../public",{index:'5.html'}))
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(session({ secret: 'mysecret', resave: false, saveUninitialized: true }));

// // ... rest of the code remains the same ...


// // Create 5.html page
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/5.html');
// });

// // Save session page
// app.post('/savesession', (req, res) => {
//   req.session.username = req.body.username;
//   res.redirect('/fetchsession');
// });

// // Fetch session page
// app.get('/fetchsession', (req, res) => {
//   if (req.session.username) {
//     res.write(`<h1>Welcome, ${req.session.username}!</h1>`);
//     res.write('<button><a href="/deletesession">LOGOUT</a>');
//     res.end();
//   } else {
//     res.redirect('/');
//   }
// });

// // Delete session page
// app.get('/deletesession', (req, res) => {
//   req.session.destroy();
//   res.redirect('/');
// });

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });

// task you have been assigned to dev user feedback form for a website using express js and cookie inplement the following requirement 
// crearte a form with the filesd mail,message,name,rating,radio buttons good,very good,bad 
// when the user submit the form store there feedback info store in cookie named feedback that 
// exp in 10sec display a confirmation message to the user after succfuly submit the form and 
// create a link to retre feedback info from cookie in display on the page aldo include link on feedback page 
// to log out when user click this link user redirected to home page


const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("../public",{index:'feedback.html'}))

// Create a form to collect user feedback
app.get('/feedback', (req, res) => {
  res.sendFile(__dirname + '/feedback.html');
});

// Handle form submission and store feedback in cookie
app.post('/feedback', (req, res) => {
  const { name, email, message, rating } = req.body;
  const feedback = { name, email, message, rating };
  res.cookie('feedback', JSON.stringify(feedback), { expires: new Date(Date.now() + 10 * 1000) });
  res.send('Thank you for your feedback!');
});

// Display feedback information from cookie
app.get('/feedback-info', (req, res) => {
  const feedback = req.cookies.feedback;
  if (feedback) {
    const { name, email, message, rating } = JSON.parse(feedback);
    res.send(`Name: ${name}<br>Email: ${email}<br>Message: ${message}<br>Rating: ${rating}`);
  } else {
    res.send('No feedback information available.');
  }
});

// Logout and clear cookie
app.get('/logout', (req, res) => {
  res.clearCookie('feedback');
  res.redirect('/');
});

app.listen(3050, () => {
  console.log('Server started on port 3050');
});