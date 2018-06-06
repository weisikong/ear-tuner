var octave = ["piano-g-sharp.wav",
"piano-a.wav",
"piano-bb.wav",
"piano-b.wav",
"piano-c.wav",
"piano-c-sharp.wav",
"piano-d.wav",
"piano-eb.wav",
"piano-e.wav",
"piano-f.wav",
"piano-f-sharp.wav",
"piano-g.wav"];

function play() {
    var index = Math.floor(Math.random() * 12);
    var thisTest = index;
    var audio = new Audio("../../pianoNotes/" + octave[index]);
    audio.play();
}

