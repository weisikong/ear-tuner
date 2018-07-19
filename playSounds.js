notes = ["g-sharp",
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
    "g", 
    "g-sharp-2", 
    "a-2", 
    "bb-2", 
    "b-2", 
    "c-2", 
    "c-sharp-2", 
    "d-2", 
    "eb-2", 
    "e-2", 
    "f-2", 
    "f-sharp-2", 
    "g-2"];

instruments = ["piano", "flute", "recorder"];

function playPiano() {
    index = Math.floor(Math.random() * 12);    
    index2 = 0;

    document.getElementById("form-messages").innerHTML = "";
    document.getElementById("correctAnswer").value = index;

    var audio = new Audio("/soundNotes/piano-" + notes[index] + ".wav");
    audio.play();
}

function playPiano2Octaves() {
    console.log(notes);
    index = Math.floor(Math.random() * 24);
    index2 = 0;

    document.getElementById("form-messages").innerHTML = "";
    document.getElementById("correctAnswer").value = index;

    console.log(notes[index]);
    var audio = new Audio("/soundNotes/piano-" + notes[index] + ".wav");
    audio.play();
    
}

function playMultiInstruments() {

    index = Math.floor(Math.random() * 12);
    index2 = Math.floor(Math.random() * 3);
    
    

    document.getElementById("form-messages").innerHTML = "";
    document.getElementById("correctAnswer").value = index;

    var audio = new Audio("/soundNotes/" + instruments[index2] + "-" + notes[index] + ".wav");
    audio.play();
    
}

function playRelativeNote() {
    var audio = new Audio("/soundNotes/piano-c.wav");
    audio.play();
}

function playAgain() {
    var audio = new Audio("/soundNotes/" + instruments[index2] + "-" + notes[index] + ".wav");
    audio.play();   
}

function playFirstNote() {
    var audio1 = new Audio("/soundNotes/piano-c.wav");
    audio1.play();
    /*
    return new Promise((resolve, reject) => {
        audio1.play();
        resolve();
    });
    */
}

function playSecondNote() {
    index = Math.floor(Math.random() * 12);

    document.getElementById("form-messages").innerHTML = "";
    document.getElementById("correctAnswer").value = index;

    var audio2 = new Audio("/soundNotes/piano-" + notes[index] + ".wav");
    audio2.play();
}

function playInterval() {
    playFirstNote();
    setTimeout(() => {
        playSecondNote();
    }, 1000);
}
