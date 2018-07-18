/*
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = require('jquery')(window);
*/
/*
$(document).ready(function(){
    console.log("document ready!");

    var form = $('#form1');

    // Get the messages div.
    var formMessages = $('#form-messages');

	// TODO: The rest of the code will go here...
	// Set up an event listener for the contact form.
    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();

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
            
            // Clear the form.
            $('#answer').val('');
            $('#correctAnswer').val('');   
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
    });
});
*/

$(document).ready(function(){
    console.log("document ready!");
    var formMessages = $('#form-messages');

    $(".answer").click(function(){        
        var answerValue = $(this).val();
        var correctValue = $(".correctAnswer").val();
        var buttonData = {"answer": answerValue, "correctAnswer": correctValue};
        if (correctValue) {
            $.ajax({
                type: 'POST',
                url: "/api/users",
                data: buttonData
            })   
            .done(function(response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');
            
                // Set the message text.
                $(formMessages).text(response);          
                
                // Clear the form.
                $('#answer').val('');
                //$('#correctAnswer').val('');   
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
        }
         
    });

    $("#dolremiButtons").click(function(){
        $("#button1").text("la");
        $("#button2").text("si(b)");
        $("#button3").text("si");
        $("#button4").text("dol");
        $("#button5").text("dol(#)");
        $("#button6").text("re");
        $("#button7").text("re(#)");
        $("#button8").text("mi");
        $("#button9").text("fa");
        $("#button10").text("fa(#)");
        $("#button11").text("sol");
        $("#button12").text("sol(#)");
    });

    $("#letterButtons").click(function(){
        $("#button1").text("A");
        $("#button2").text("Bb");
        $("#button3").text("B");
        $("#button4").text("C");
        $("#button5").text("C#");
        $("#button6").text("D");
        $("#button7").text("Eb");
        $("#button8").text("E");
        $("#button9").text("F");
        $("#button10").text("F#");
        $("#button11").text("G");
        $("#button12").text("G#");
    });

    $("#allSharps").click(function(){
        $("#button1").text("A");
        $("#button2").text("A#");
        $("#button3").text("B");
        $("#button4").text("C");
        $("#button5").text("C#");
        $("#button6").text("D");
        $("#button7").text("D#");
        $("#button8").text("E");
        $("#button9").text("F");
        $("#button10").text("F#");
        $("#button11").text("G");
        $("#button12").text("G#");
    });

    $("#allFlats").click(function(){
        $("#button1").text("A");
        $("#button2").text("Bb");
        $("#button3").text("B");
        $("#button4").text("C");
        $("#button5").text("Dd");
        $("#button6").text("D");
        $("#button7").text("Eb");
        $("#button8").text("E");
        $("#button9").text("F");
        $("#button10").text("Gb");
        $("#button11").text("G");
        $("#button12").text("Ab");
    });
});



