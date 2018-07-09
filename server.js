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
    }
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
    html = fs.readFileSync("views/home.html", "utf8");
    res.send(html);
});

app.get("/playSounds.js", (req, res) => {
    script = fs.readFileSync("views/playSounds.js", "utf8");
    res.send(script);
});

app.get("/ajax.js", (req, res) => {
    script = fs.readFileSync("views/ajax.js", "utf8");
    res.send(script);
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
