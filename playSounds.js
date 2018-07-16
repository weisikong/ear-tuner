function play() {

    var octave = ["g-sharp",
    "a",
    "bb",
    "b",
    "c",
    "c-sharp",
    "d",
    "e",
    "e",
    "f",
    "f-sharp",
    "g"];

    var index = Math.floor(Math.random() * 12);
/*
    var indexMatching = ["G#", "A", "Bb", "B", "C", "C#", "D", "Eb", "E", "F", "F#", "G"];
    document.getElementById("correctAnswer").value = indexMatching[index];
*/  document.getElementById("form-messages").innerHTML = "";
    document.getElementById("correctAnswer").value = index;
    var audio = new Audio("/pianoNotes/piano-" + octave[index] + ".wav");
    audio.play();
    
}

function playRelativeNote() {
    var audio = new Audio("/pianoNotes/piano-c.wav");
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

