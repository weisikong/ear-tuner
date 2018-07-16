const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const fs = require('fs');
const exphbs = require('express-handlebars');

const HTTP_PORT = process.env.PORT || 8080;


// call this function after the http server starts listening for requests
function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
  }

// Register handlebars as the rendering engine for views
app.engine('.hbs', exphbs({
    extname: '.hbs',
    helpers: {
        navLink: function (url, options) {
            return '<li' +
                ((url == app.locals.activeRoute) ? ' class="active" ' : '') +
                '><a href="' + url + '">' + options.fn(this) + '</a></li>';
        }
    },
    defaultLayout: 'main'
}));
app.set('view engine', '.hbs');

// Parses the text as URL encoded data and exposes the resulting object (containing the keys and values) on req.body
app.use(bodyParser.urlencoded({extended: true}));

// Parses the text as JSON and exposes the resulting object on req.body
app.use(bodyParser.json());


// make your audio file available for the browser
app.use(express.static('public'));

//app.use(express.static('public/css'));

app.get("/", (req, res) =>  {
    res.render('home', {});
    //html = fs.readFileSync("views/home.html", "utf8");
    //res.send(html);
});

app.get("/practices", function(req, res) {
    res.render('practices', {});
});

app.get("/test", function(req, res) {
    res.render('upcoming', {});
});

app.get("/how-to-use", function(req, res) {
    res.render('howToUse', {});
});

app.get("/playSounds.js", (req, res) => {
    script = fs.readFileSync("playSounds.js", "utf8");
    res.send(script);
});

app.get("/ajax.js", (req, res) => {
    script = fs.readFileSync("ajax.js", "utf8");
    res.send(script);
});

app.get("/pitch", function(req, res) {
    res.render('pitch', {});
});

app.get("/interval", function(req, res) {
    res.render('upcoming', {});
});

app.get("/chord", function(req, res) {
    res.render('upcoming', {});
});

app.post("/api/users", (req, res) => {
    console.log(req.body);
    //res.json({message: "Your answer is: " + req.body.answer + ". The correct answer is: " + req.body.correctAnswer});
    if (req.body.answer == req.body.correctAnswer) {
        res.send("Yes you got it!");

    } else {
        res.send("Opps! That wasn't it.");
    }
});

app.listen(HTTP_PORT, onHttpStart);
