/*
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = require('jquery')(window);
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
                // Set the message text.
                $(formMessages).text(response.message);  
                $(scoreOutput).text(response.score);    
                // Clear the form.
                if (response.message == "Yes you got it!") {
                    $(".correctAnswer").val("");
                }
            })
            .fail(function(data) {            
                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
        }
         
    });

    $(".intervalAnswer").click(function(){        
        var answerValue = $(this).val();
        var firstNote = $(".firstNote").val();
        var secondNote = $(".secondNote").val();
        var buttonData = {"answer": answerValue, "firstNote": firstNote, "secondNote": secondNote};
        if (firstNote) {
            $.ajax({
                type: 'POST',
                url: "/api/users",
                data: buttonData
            })   
            .done(function(response) {
                // Set the message text.
                $(formMessages).text(response.message);          
                $(scoreOutput).text(response.score);        
                // Clear the form.
                if (response.message == "Yes you got it!") {
                    $(".firstNote").val("");
                }
            })
            .fail(function(data) {            
                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
        }
         
    });

    //display style
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

    //range
    $("#oneOctave").click(function(){
        $("#play").attr("onclick", "playPiano()");
    });
    $("#twoOctaves").click(function(){
        $("#play").attr("onclick", "playPiano2Octaves()");
    });

    //instruments
    $("#pianoOnly").click(function(){
        $("#play").attr("onclick", "playPiano()");
    });
    $("#multiInstruments").click(function(){
        $("#play").attr("onclick", "playMultiInstruments()");
    });

    //interval
    $("#simultaneous").click(function() {
        $("#playSimultaneously").text("Play Simultaneously");
        $("#playInterval").attr("onclick", "playIntervalSync()");
        $("#playAgain").attr("onclick", "playIntervalAgainSync()");
    });
    $("#oneNoteAtATime").click(function() {
        $("#playSimultaneously").text("One Note at a Time");
        $("#playInterval").attr("onclick", "playInterval()");
        $("#playAgain").attr("onclick", "playIntervalAgain()");
    });
});

