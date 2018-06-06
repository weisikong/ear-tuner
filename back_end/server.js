const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
  }

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

// setup a route on the 'root' of the url that has our form
// IE: http://localhost/
app.get("/", (req, res) => {
    // send the html view with our form to the client
    res.sendFile(path.join(__dirname, "/views/home.html"));
  });


app.post("/register", function (req, res) {
    const formData = req.body;
    console.log(req.body);
    const dataReceived = "Your submission was received:<br/><br/>" +
    "Your form data was:<br/>" + JSON.stringify(formData) + "<br/>";
    res.send(dataReceived);
});

app.listen(HTTP_PORT, onHttpStart);
