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

// Sequence Management Init
active = 0;

// Hallway Sequences Variables
paperclip = 0;
clipfound = 0;
c1locked = 1;

// First Visit Variables
hallwayFirst = 1;
lobbyFirst = 1;
class1First = 1;
audiFirst = 1;

// Start Page Sequence
seq = 0;

function seqStart() {
    document.getElementById("chatbox").style.display = "block";
    document.getElementById("chatboxinner").innerText = "The nightmares, the yearning, the insanity, all lead to here...";
}

function seqClick() {
    if (active == 0) {
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
}


// Entrance Page Sequences - - - - - - - - - - - - 

// Sequence 1
seq1 = 0;

function seq1Start() {
    active = 1;
    document.getElementById("chatbox").style.display = "block";
    document.getElementById("chatboxinner").innerText = "So this is it... the entrance is right there...";
}

function seq1Click() {
    if (active == 1) {
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
            document.getElementById("chatboxinner").innerText = "(Actionable elements are highlighted in red when hovering with the cursor, click while hovering to interact. Use the scroll wheel to view the whole scene.)";   
            document.getElementById("chatboxinner").style.fontStyle = "Italic";   
            break; 
        case 6:
            document.getElementById("chatbox").style.display = "none"; 
            document.getElementById("mainentrance").style.display = "block";
            active = 2;
            break;
    }
    }
}


// Sequence 2
seq2 = 0;

function seq2Click() {
    if (active == 2) {
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
}

// Hall Page Sequences - - - - - - - - - - - - -

// Sequence 3
seq3 = 0;

function seq3Start() {
    active = 3;
    document.getElementById("chatbox").style.display = "block";
    document.getElementById("chatboxinner").style.fontStyle = "Italic";
    document.getElementById("chatboxinner").innerText = "*You arrive at the first floor hallway*";
}

function seq3Click() {
    if (active == 3) {
        seq3++;
        if (hallwayFirst == 1) {
            switch(seq3) {
                case 0:
                    break;
                case 1:
                    document.getElementById("chatboxinner").style.fontStyle = "normal"; 
                    document.getElementById("chatboxinner").innerText = "I've heard the first floor of this building is still patrolled and maintained by the city, no wonder it's so tidy..."; 
                    break;
                case 2:
                    document.getElementById("chatboxinner").innerText = "Most staircases to the upper flors seem to be sealed. I am not sure what's up there now, and I'm sure the city doesn't know either..."; 
                    break;
                case 3:
                    document.getElementById("chatboxinner").innerText = "Most of these classroom doors are sealed shut as well, I won't even try to open those..."; 
                    break;      
                case 4:
                    document.getElementById("chatboxinner").innerText = "I... feel it, whatever I need to do is somewhere up on the next floors."; 
                    break; 
                case 5:
                    hallwayFirst = 0;
                    document.getElementById("chatbox").style.display = "none"; 
                    document.getElementById("bin").style.display = "block"; 
                    document.getElementById("toLobby").style.display = "block"; 
                    document.getElementById("bulletin").style.display = "block";
                    document.getElementById("classroom1").style.display = "block";
                    break; 
            }
        } else {
            switch(seq3) {
                case 0:
                    break;
                case 1:
                    document.getElementById("chatbox").style.display = "none"; 
                    document.getElementById("bin").style.display = "block"; 
                    document.getElementById("toLobby").style.display = "block"; 
                    document.getElementById("bulletin").style.display = "block";
                    document.getElementById("classroom1").style.display = "block";
                    break; 
            }
        }
    }
}


// Sequence 4
seq4 = 0;
function seq4Start() {
    active = 4;
    seq4++
    switch(seq4) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").innerText = "It's a recycling bin..."; 
            break;       
    }
}

function seq4Click() {
    if (active == 4) {
        if (paperclip == 0 && clipfound == 0) {
    seq4++;
    switch(seq4) {
        case 2:
            document.getElementById("chatboxinner").innerText = "Among the random garbage there is several legal papers binded by a paperclip..."; 
            break;
        case 3:
            document.getElementById("chatboxinner").innerText = "The papers seem to outline a building audit that occured around the time the school closed down..."; 
            break;
        case 4:
            document.getElementById("chatboxinner").innerText = "Seems to be nothing notable in the outline, just some talk about how deteriorated the building was..."; 
            break;
        case 5:
            document.getElementById("chatboxinner").innerText = "Although, the papers do mention something about a secret compartment found in a 5th floor classroom..."; 
            break;
        case 6:
            document.getElementById("chatboxinner").style.fontStyle = "Italic"; 
            document.getElementById("chatboxinner").innerText = "*You put the papers back in the bin and take the paperclip*";
            paperclip = 1; 
            clipfound = 1; 
            document.getElementById("paperclip").style.display = "block";
            break;
        case 7:
            seq4 = 0;
            document.getElementById("chatboxinner").style.display = "none"; 
            break;
        }
    }
    else {
        document.getElementById("chatbox").style.display = "none";  
        seq4 = 0;
    }
    }
}

// Sequence 5
seq5 = 0; 

function seq5Start() {
    seq5 = 0;
    active = 5;
    seq5++
    switch(seq5) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").innerText = "Down this hallway would be the main lobby, should I continue?"; 
            document.getElementById("yes").style.display = "block";
            document.getElementById("no").style.display = "block"; 
            break;       
    }
}

// Sequence 6
seq6 = 0; 

function seq6Start() {
    active = 6;
    seq6++
    switch(seq6) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "It's a bulletin board assorted with old assignments and notices..."; 
            break;       
    }
}

function seq6Click() {
    if (active == 6) {
        seq6++
        switch(seq6) {
            case 2:
                document.getElementById("chatboxinner").innerText = "Some of these old papers bring me back to simpler times..."; 
                break;
            case 3:
                document.getElementById("chatboxinner").innerText = "There is one paper that sits above the rest, dating to the final weeks of the school..."; 
                break;
            case 4:
                document.getElementById("chatboxinner").innerText = "It's a faculty notice, stating that the auditorium will be permanently close due to an incident backstage..."; 
                break;
            case 5:
                document.getElementById("chatboxinner").innerText = "I wonder what happened there."; 
                break;
            case 6:
                document.getElementById("chatbox").style.display = "none";
                seq6 = 0;
                break;
        }
    }
}

// Sequence 7
seq7 = 0; 

function seq7Start() {
    active = 7;
    seq7 = 0;
    seq7++
    switch(seq7) {
        case 0:
            break;
        case 1:
            if (c1locked == 1) {
                document.getElementById("chatbox").style.display = "block";
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "This is the only door in this hallway that isn't sealed shut, but it's locked..."; 
                break;   
            }   
            else {
                document.getElementById("chatbox").style.display = "block";
                document.getElementById("chatboxinner").innerText = "Should I head into the classroom?"; 
                document.getElementById("yes").style.display = "block";
                document.getElementById("no").style.display = "block"; 
                break;      
            } 
    }
}

function seq7Click() {
    if (active == 7) {
        seq7++
        if (c1locked == 0) {
            switch(seq7) {
                case 2:
                    document.getElementById("chatbox").style.display = "block";
                    document.getElementById("chatboxinner").innerText = "Should I head into the classroom?"; 
                    document.getElementById("yes").style.display = "block";
                    document.getElementById("no").style.display = "block"; 
                    break;
            }
        } else {
            if (paperclip == 1) {
                switch(seq7) {
                    case 2:
                        document.getElementById("chatboxinner").innerText = "I have a paperclip on hand, perhaps I could try to pick this lock..."; 
                        break;
                    case 3:
                        document.getElementById("chatboxinner").innerText = "*You insert the paper clip into the lock and after a couple of minutes...*"; 
                        document.getElementById("paperclip").style.display = "none";
                        break;
                    case 4:
                        document.getElementById("chatboxinner").innerText = "I did it! Should I head in?";
                        document.getElementById("yes").style.display = "block";
                        document.getElementById("no").style.display = "block";
                        break;
                }
            } else {
                switch(seq7) {
                    case 2:
                        document.getElementById("chatboxinner").innerText = "Maybe I could break into this lock with something."; 
                        break;
                    case 3:
                        document.getElementById("chatbox").style.display = "none";
                        seq7 = 0;
                        break;
                }
            }
        }
        
    }
}

// Utility Functions
function seqReset() {
    seq = 0;
    seq1 = 0;
    seq2 = 0;
    seq3 = 0;
    seq4 = 0;
}

function mainClick() {
    seqClick();
    seq1Click();
    seq3Click();
    seq4Click();
    seq6Click();
    seq7Click();
}

// Yes No Prompt Functions - - - - - - - - 
function yes2() {
    switch(active) {
        case 2:
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            window.location.href="hall.html";
            break;
        case 5:
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            window.location.href="lobby.html";
            break;
        case 7: 
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            window.location.href="class1.html";
            seq7 = 0;
            paperclip = 0;
            c1locked = 0;
            break;
    }
}

function no2() {
    switch(active) {
        case 2:
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            document.getElementById("mainentrance").style.display = "block";
            seq2 = 0;
            break;
        case 5:
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            break;
        case 7: 
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            seq7 = 0;
            paperclip = 0;
            c1locked = 0;
            break;
    }
}