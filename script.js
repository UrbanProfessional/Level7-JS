// Main Menu Disclaimer
function rmWarn() {
    document.getElementById("warning").style.display = "none";
    document.getElementById("music").play();
}

// Game Over Function
function gameOver() {
    window.location.href="over.html";
}

// Scripted Sequences for the Pages - - - - - - - - - - /


// Start Page Sequence
seq = 0;

function seqStart() {
    document.getElementById("chatbox").style.display = "block";
    document.getElementById("chatboxinner").innerText = "The nightmares, the yearning, the insanity, all lead to here...";
}
function seqClick() {
    seq++;
    switch(seq) {
        case 0:
            break;
        case 1:
            document.getElementById("chatboxinner").innerText = "I was of the last students to be at this wretched school before it closed many years ago...";      
            break;  
        case 2:
            document.getElementById("chatboxinner").innerText = "I don't want to remember what happened then. This was a horrible place that deserved to be shutdown for good...";      
            break;  
        case 3:
            document.getElementById("chatboxinner").innerText = "But...ever since I left I've had a worsening pain in my mind...";      
            break;  
        case 4:
            document.getElementById("chatboxinner").innerText = "I've tried to ignore it, but now the pain is too much to bear...";      
            break;  
        case 5:
            document.getElementById("chatboxinner").innerText = "All I know is that it has something to do with this place, my old school.";      
            break; 
        case 6:
            document.getElementById("chatboxinner").innerText = "*You walk towards the main entrance*";  
            document.getElementById("chatboxinner").style.fontStyle = "Italic";
            break; 
        case 7:
            document.getElementById("chatbox").style.display = "none";
            window.location.href="entrance.html";
            break; 
    }
}

// Entrance Page Sequences - - - - - - - - - - - - 

// Sequence 1
seq1 = 0;

function seq1Start() {
    document.getElementById("chatbox").style.display = "block";
    document.getElementById("chatboxinner").innerText = "So this is it... the entrance is right there...";
}
function seq1Click() {
    seq1++;
    switch(seq1) {
        case 0:
            break;
        case 1:
            document.getElementById("chatboxinner").innerText = "Seems some lights are on inside, I've heard it's because of some legal stuff...";      
            break;  
        case 2:
            document.getElementById("chatboxinner").innerText = "There are rumors about a bunch of crackheads and lowlifes residing here now, seems fairly believable...";      
            break;  
        case 3:
            document.getElementById("chatboxinner").innerText = "So I brought a handgun... (Click the 'Suicide' Button to shoot yourself and restart)";      
            break;  
        case 4:
            document.getElementById("chatboxinner").innerText = "Time to finally end my nightmares.";      
            break;  
        case 5:
            document.getElementById("chatboxinner").innerText = "(Actionable elements are highlighted in red when hovering with the cursor, click while hovering to interact)";   
            document.getElementById("chatboxinner").style.fontStyle = "Italic";   
            break; 
        case 6:
            document.getElementById("chatbox").style.display = "none"; 
            document.getElementById("mainentrance").style.display = "block";
            break;
    }
}

// Sequence 2
seq2 = 0;

function seq2Click() {
    seq2++;
    switch(seq2) {
        case 0:
            break;
        case 1:
            document.getElementById("chatboxinner").style.fontStyle = "normal"; 
            document.getElementById("mainentrance").style.display = "none";
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").innerText = "It's the main entrance, somehow unlocked, should I go in?"; 
            document.getElementById("yes").style.display = "block";
            document.getElementById("no").style.display = "block";
            break;  
    }  
}

function yes2() {
    document.getElementById("yes").style.display = "none";
    document.getElementById("no").style.display = "none";
    document.getElementById("chatbox").style.display = "none";
    window.location.href="hall.html";
}

function no2() {
    document.getElementById("yes").style.display = "none";
    document.getElementById("no").style.display = "none";
    document.getElementById("chatbox").style.display = "none";
    document.getElementById("mainentrance").style.display = "block";
    seq2 = 0;
}

// Hall Page Sequences - - - - - - - - - - - - -

// Sequence 3
seq3 = 0;

function seq3Start() {
    document.getElementById("chatbox").style.display = "block";
    document.getElementById("chatboxinner").style.fontStyle = "Italic";
    document.getElementById("chatboxinner").innerText = "*You arrive at the first floor hallway*";
}

function seq3Click() {
    seq3++;
    switch(seq3) {
        case 0:
            break;
        case 1:
            document.getElementById("chatboxinner").style.fontStyle = "normal"; 
            document.getElementById("chatboxinner").innerText = "I've heard the first floor of this building is still patrolled and maintained by the city, no wonder it's so tidy..."; 
            break;
        case 2:
            document.getElementById("chatboxinner").innerText = "Most staircases to the upper flowers seem to be blocked off. I am not sure what's up there now, and I'm sure the city doesn't either..."; 
            break;   
        case 3:
            document.getElementById("chatboxinner").innerText = "I... feel it, whatever I need to do is up on the locked floors."; 
            break; 
        case 4:
            document.getElementById("chatbox").style.display = "none"; 
            break; 
    }  
}

// Utility Functions