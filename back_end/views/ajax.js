/*
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = require('jquery')(window);

$(document).ready(function(){
    console.log("document ready!");
});

console.log("file loaded");

//from WEB322 week 11
$.ajax({
    url: "https://httpbin.org/post",
    type: "POST",
    data: JSON.stringify({ user: "John Doe", job: "unknown" }),
    contentType: "application/json"
})
.done(function (data) {
    console.log(data);
})
.fail(function (err) {
    console.log("error: " + err.statusText);
});
*/





/*
$(function() {
    // Get the form.
    var form = $('#form1');

    // Get the messages div.
    var formMessages = $('#form-messages');

	// TODO: The rest of the code will go here...
	
});

// Set up an event listener for the contact form.
$(form).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    // TODO
});

// Serialize the form data.
var formData = $(form).serialize();

// Submit the form using AJAX.
$.ajax({
    type: 'POST',
    url: "/api/users",
    data: formData
})

.done(function(response) {
    // Make sure that the formMessages div has the 'success' class.
    $(formMessages).removeClass('error');
    $(formMessages).addClass('success');

    // Set the message text.
    $(formMessages).text(response);
	/*
    // Clear the form.
    $('#name').val('');
    $('#email').val('');
	$('#message').val('');
	
})
.fail(function(data) {
    // Make sure that the formMessages div has the 'error' class.
    $(formMessages).removeClass('success');
    $(formMessages).addClass('error');

    // Set the message text.
    if (data.responseText !== '') {
        $(formMessages).text(data.responseText);
    } else {
        $(formMessages).text('Oops! An error occured and your message could not be sent.');
    }
});
*/
/*end of test*/