// bass a2 is as a3
notes = ["a3",
"bb3",
"b3",
"c4",
"csharp4",
"d4",
"eb4",
"e4",
"f4",
"fsharp4",
"g4",
"gsharp4",
"a4",
"bb4",
"b4",
"c5",
"csharp5",
"d5",
"eb5",
"e5",
"f5",
"fsharp5",
"g5",
"gsharp5",
"a5"];
/*
notes = ["a",
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
    "g-sharp",
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
    "g-2",
    "g-sharp-2"];
*/
instruments = ["piano", "flute", "recorder", "harp"];

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
    index2 = Math.floor(Math.random() * 4);
    
    

    document.getElementById("form-messages").innerHTML = "";
    document.getElementById("correctAnswer").value = index;

    var audio = new Audio("/soundNotes/" + instruments[index2] + "-" + notes[index] + ".wav");
    audio.play();
    
}

function playRelativeNote() {
    var audio = new Audio("/soundNotes/piano-c4.wav");
    audio.play();
}

function playAgain() {
    var audio = new Audio("/soundNotes/" + instruments[index2] + "-" + notes[index] + ".wav");
    audio.play();   
}

function playFirstNote() {
    index = Math.floor(Math.random() * 12);
    console.log(index);
    document.getElementById("form-messages").innerHTML = "";
    document.getElementById("firstNote").value = index;

    var audio1 = new Audio("/soundNotes/piano-" + notes[index] + ".wav");
    audio1.play();
}

function playSecondNote() {
    index2 = Math.floor(Math.random() * 12);
    console.log(index2);
    //document.getElementById("form-messages").innerHTML = "";
    document.getElementById("secondNote").value = index2;

    var audio2 = new Audio("/soundNotes/piano-" + notes[index2] + ".wav");
    audio2.play();
}

function playInterval() {
    playFirstNote();
    setTimeout(() => {
        playSecondNote();
    }, 1000);
}

function playIntervalAgain() {
    var audio1 = new Audio("/soundNotes/piano-" + notes[index] + ".wav");
    var audio2 = new Audio("/soundNotes/piano-" + notes[index2] + ".wav");
    audio1.play();
    setTimeout(() => {
        audio2.play();
    }, 1000);
}

function playRandomThirdChord() {
    index1 = Math.floor(Math.random() * 12);
    index2 = index1 + Math.floor(Math.random() * 4) + 3;
    if (index2 == 3) {
        index3 = 4;
    } else if (index2 == 4) {
        index3 = 3;
    }
    //index3 = index2 + Math.floor(Math.random() * 4) + 3;
    var note1 = new Audio("/soundNotes/piano-" + notes[index1] + ".wav");
    var note2 = new Audio("/soundNotes/piano-" + notes[index2] + ".wav");
    //var note3 = new Audio("/soundNotes/piano-" + notes[index3] + ".wav");

    document.getElementById("form-messages").innerHTML = "";
    document.getElementById("chordNote1").value = index1;
    document.getElementById("chordNote2").value = index2;
    //document.getElementById("chordNote3").value = index3;

    note1.play();
    note2.play();
    //note3.play();
}

function playRandomSeventhChord() {
    index1 = Math.floor(Math.random() * 12);
    index2 = index1 + Math.floor(Math.random() * 4) + 3;
    index3 = index2 + Math.floor(Math.random() * 4) + 3;
    var note1 = new Audio("/soundNotes/piano-" + notes[index1] + ".wav");
    var note2 = new Audio("/soundNotes/piano-" + notes[index2] + ".wav");
    //var note3 = new Audio("/soundNotes/piano-" + notes[index3] + ".wav");

    document.getElementById("form-messages").innerHTML = "";
    document.getElementById("chordNote1").value = index1;
    document.getElementById("chordNote2").value = index2;
    //document.getElementById("chordNote3").value = index3;

    note1.play();
    note2.play();
    //note3.play();
}