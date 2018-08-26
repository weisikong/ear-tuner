const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const fs = require('fs');
const exphbs = require('express-handlebars');
const dataServiceAuth = require("./data-service-auth.js");
const clientSessions = require("client-sessions");
var numOfRightAnswer = 0;
var tries = 0;


var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = require('jquery')(window);


const HTTP_PORT = process.env.PORT || 8080;


// call this function after the http server starts listening for requests
function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
  }



// Parses the text as URL encoded data and exposes the resulting object (containing the keys and values) on req.body
app.use(bodyParser.urlencoded({extended: true}));

// Parses the text as JSON and exposes the resulting object on req.body
app.use(bodyParser.json());

app.use(clientSessions({
    cookieName: "session",
    secret: "web322assignment6",
    duration: 2 * 60 * 1000,
    activeDuration: 1000 * 60
}));

//we will need this to conditionally hide/show elements to the user depending on whether they're currently logged in

app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
});

// Register handlebars as the rendering engine for views
app.engine('.hbs', exphbs({
    extname: '.hbs',
    helpers: {
        navLink: function (url, options) {
            return '<li class="nav-item ' +
                ((url == app.locals.activeRoute) ? ' active" ' : '"') +
                '><a class="nav-link" href="' + url + '">' + options.fn(this) + '</a></li>';
        }
    },
    defaultLayout: 'main'
}));
app.set('view engine', '.hbs');

function ensureLogin(req, res, next) {
    if (!req.session.user) {
        res.redirect("/login");
    } else {
        next();
    }
}
// make your audio file available for the browser
app.use(express.static('public'));

app.use(function(req,res,next){
    let route = req.baseUrl + req.path;
    app.locals.activeRoute = (route == "/") ? "/" : route.replace(/\/$/, "");
    next();
});

app.get("/", (req, res) =>  {
    res.render('home', {});
});

app.get("/practices", function(req, res) {
    res.render('practices', {});
});

app.get("/test", /* ensureLogin, */function(req, res) {
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
    numOfRightAnswer = 0;
    tries = 0;
    res.render('pitch', {});
});

app.get("/interval", function(req, res) {
    numOfRightAnswer = 0;
    tries = 0;
    res.render('interval', {});
});


app.get("/chord", function(req, res) {
    res.render('chord', {});
});

function getElement(ele) {
    $("#storingPercentage").text = ele;
}

app.post("/api/pitch", (req, res) => {
    tries++;
    if (req.body.firstNote) {
        if (Math.abs(req.body.secondNote - req.body.firstNote) == req.body.answer) {
            numOfRightAnswer++;
            res.json({message: "Yes you got it!", 
            score: numOfRightAnswer + "/" + tries,
            percent: ((numOfRightAnswer/tries)*100).toFixed(0) + "%"  
        });
        } else {
            res.json({message: "Opps! That wasn't it.", 
            score: numOfRightAnswer + "/" + tries,
            percent: ((numOfRightAnswer/tries)*100).toFixed(0) + "%"   
        });
        }
    } else {
        var message = "";
        if (req.body.answer == req.body.correctAnswer || req.body.answer == req.body.correctAnswer - 12) {
            numOfRightAnswer++;
            message = "Yes You got it";
        } else {
            message = "Opps! That wasn't it.";
        }
        let successRate = numOfRightAnswer * 100.0 / tries;
        dataServiceAuth.updatePercentage(req.session.user.userName, successRate)
        .then(() => {
            return dataServiceAuth.returnUpdatedUser(req.session.user.userName)
        })
        .then((user) => {
            //console.log(message + " " + user.percentage);
            req.session.user.percentage = successRate.toFixed(0);
            res.json({
                message: message,
                score: numOfRightAnswer + "/" + tries,
                percent: successRate.toFixed(0) + "%"
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }
});

app.post("/api/interval", (req, res) => {
    tries++;
    var message = "";
    if (Math.abs(req.body.secondNote - req.body.firstNote) == req.body.answer) {
        numOfRightAnswer++;
        message = "Yes You got it";
    } else {
        message = "Opps! That wasn't it.";
    }
    let successRate = numOfRightAnswer * 100.0 / tries;
    dataServiceAuth.updatePercentage(req.session.user.userName, successRate)
    .then(() => {
        return dataServiceAuth.returnUpdatedUser(req.session.user.userName)
    })
    .then((user) => {
        //console.log(message + " " + user.percentage);
        req.session.user.percentage = successRate.toFixed(0);
        res.json({
            message: message,
            score: numOfRightAnswer + "/" + tries,
            percent: successRate.toFixed(0) + "%"
        });
    })
    .catch((err) => {
        console.log(err);
    });
});
/* 
app.get("/testPitch", ensureLogin, (req, res) => {
    res.render("testPitch", {});
}); 
 */
app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", (req, res) => {
    dataServiceAuth.registerUser(req.body)
    .then(() => {
        res.render("register", {successMessage: "User created"});
    })
    .catch((err) => {
        res.render("register", {errorMessage: err, userName: req.body.userName});
    });
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", (req, res) => {
    req.body.userAgent = req.get("User-Agent");
    dataServiceAuth.checkUser(req.body)
    .then((user) => {
        req.session.user = {
            userName: user.userName,
            email: user.email,
            loginHistory: user.loginHistory,
            percentage: user.percentage
        }
        res.redirect("/pitch");
    })
    .catch((err) => {
        res.render("login", {errorMessage: err, userName: req.body.userName});
    })
});

app.get("/logout", (req, res) => {
    req.session.reset();
    res.redirect("/");
});

app.get("/profile", ensureLogin, (req, res) => {
    res.render("profile");
})

app.use((req, res) => {
    res.status(404).send("Opps! Page not found. Are you sure you wanna go there?");
});

//app.listen(HTTP_PORT, onHttpStart);

dataServiceAuth.initialize()
.then(() => {
    app.listen(HTTP_PORT, onHttpStart);
})
.catch((err) => {
    console.log("Unable to start server: " + err);
})

//console.log(app._router.stack);
