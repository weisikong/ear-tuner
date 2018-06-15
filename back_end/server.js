const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const earTuner = require('./views/earTuner.js');
const app = express();
var fs = require('fs');
var http = require("http");
var url = require("url");
var mime = require('mime');



const HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
  }

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({extended: true}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());


// how do you make your audio file available for the browser?
app.use(express.static('pianoNotes'));


/*
http.createServer(function(request, response) {
   var pathname = url.parse(request.url).pathname;
   console.log("Request for " + pathname + " received.");

   response.writeHead(200);

   if(pathname == "/") {
       html = fs.readFileSync("back_end/views/home.html", "utf8");
       response.write(html);
   } else if (pathname == "/earTuner.js") {
       script = fs.readFileSync("back_end/views/earTuner.js", "utf8");
       response.write(script);
   } else if (pathname =="/piano-c.wav") {
       wav = fs.readFileSync("pianoNotes/piano-c.wav", "utf8");
       response.write(wav);
   }

   response.end();
}).listen(HTTP_PORT, onHttpStart);
*/

app.get("/", (req, res) =>  {
    html = fs.readFileSync("back_end/views/home.html", "utf8");
    res.send(html);
});

app.get("/earTuner.js", (req, res) => {
    script = fs.readFileSync("back_end/views/earTuner.js", "utf8");
    res.send(script);
})


app.post("/register", function (req, res) {
    const formData = req.body;
    var isCorrect;
    if (formData.action == formData.correctAnswer) {
        isCorrect = true;
    } else {
        isCorrect = false;
    }
    var dataReceived = JSON.stringify(formData);
    if (isCorrect) {
        dataReceived += "<br/>Your answer was:<br/>" + "correct"+ "<br/>";
    } else {
        dataReceived += "<br/>Your answer was:<br/>" + "wrong" + "<br/>";
    }
    
    res.send(dataReceived);
});

app.listen(HTTP_PORT, onHttpStart);
