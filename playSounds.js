function playPiano() {

    octave = ["g-sharp",
    "a",
    "bb",
    "b",
    "c",
    "c-sharp",
    "d",
    "eb",
    "e",
    "f",
    "f-sharp",
    "g"];

    index = Math.floor(Math.random() * 12);    

    document.getElementById("form-messages").innerHTML = "";
    document.getElementById("correctAnswer").value = index;


    var audio = new Audio("/soundNotes/piano-" + octave[index] + ".wav");
    audio.play();
    
}

function playMultiInstruments() {

    octave = ["g-sharp",
    "a",
    "bb",
    "b",
    "c",
    "c-sharp",
    "d",
    "eb",
    "e",
    "f",
    "f-sharp",
    "g"];

    index = Math.floor(Math.random() * 12);
    index2 = Math.floor(Math.random() * 3);
    

    instruments = ["piano", "flute", "recorder"];

    document.getElementById("form-messages").innerHTML = "";
    document.getElementById("correctAnswer").value = index;


    var audio = new Audio("/soundNotes/" + instruments[index2] + "-" + octave[index] + ".wav");
    audio.play();
    
}

function playRelativeNote() {
    var audio = new Audio("/soundNotes/piano-c.wav");
    audio.play();
}

function playAgain() {
    var audio = new Audio("/soundNotes/piano-" + octave[index] + ".wav");
    audio.play();   
}

/*
function nodePlay() {
    // testing if this function is called and if it works
    document.getElementById("test").innerHTML = "<p>Paragraph changed.</p>";
    console.log("yeah");
    // play a note
    var index = Math.floor(Math.random() * 12);
    document.getElementById("correctAnswer").value = index;
    player.play('piano-c.wav', function(err) {
        if (err) console.log('Could not play sound: ${err}');
    });
}
*/

