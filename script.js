// Main Menu Disclaimer
function rmWarn() {
    document.getElementById("warning").style.display = "none";
    document.getElementById("music").play();
}

// Game Over Function
function gameOver() {
    window.location.href="over.html";
}

// Game Start Init
function init() {
    window.location.href="start.html";
    //Sequences Variables Init
    localStorage.setItem('paperclip', 0)
    localStorage.setItem('clipfound', 0);
    localStorage.setItem('c1locked', 1);
    localStorage.setItem('crowbar', 0);
    localStorage.setItem('audiBoarded', 1);
    localStorage.setItem('stairLock', 1);
    localStorage.setItem('stairKey', 0);
    localStorage.setItem('lockerLock', 1);

// First Visit Variables
    localStorage.setItem('hallwayFirst', 1);   
    localStorage.setItem('lobbyFirst', 1);
    localStorage.setItem('class1First', 1);
    localStorage.setItem('audiFirst' , 1);
}


// Item Icon Load
function itemLoad() {
    if (parseInt(localStorage.getItem('paperclip')) == 1) {
        document.getElementById("paperclip").style.display = "block";
    }
    if (parseInt(localStorage.getItem('crowbar')) == 1) {
        document.getElementById("crowbar").style.display = "block";
    }
}

// Scripted Sequences for the Pages - - - - - - - - - - /

// Sequence Management Init
active = 0;

// Start Page Sequence
seq = 0;

function seqStart() {
    seq = 0;
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
    seq2 = 0;
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
    seq3 = 0;
    active = 3;
    itemLoad();
    document.getElementById("chatbox").style.display = "block";
    document.getElementById("bin").style.display = "none"; 
    document.getElementById("toLobby").style.display = "none"; 
    document.getElementById("bulletin").style.display = "none";
    document.getElementById("classroom1").style.display = "none";
    document.getElementById("chatboxinner").style.fontStyle = "Italic";
    document.getElementById("chatboxinner").innerText = "*You arrive at the first floor hallway*";
}

function seq3Click() {
    if (active == 3) {
        seq3++;
        if (parseInt(localStorage.getItem('hallwayFirst'))) {
            switch(seq3) {
                case 0:
                    break;
                case 1:
                    document.getElementById("chatboxinner").style.fontStyle = "normal"; 
                    document.getElementById("chatboxinner").innerText = "I've heard the first floor of this building is still patrolled and maintained by the city, no wonder it's so tidy..."; 
                    break;
                case 2:
                    document.getElementById("chatboxinner").innerText = "Most staircases to the upper floors seem to be sealed. I am not sure what's up there now, and I'm sure the city doesn't know either..."; 
                    break;
                case 3:
                    document.getElementById("chatboxinner").innerText = "Most of these classroom doors are sealed shut as well, I won't even try to open those..."; 
                    break;      
                case 4:
                    document.getElementById("chatboxinner").innerText = "I... feel it, whatever I need to do is somewhere up on the next floors."; 
                    break; 
                case 5:
                    localStorage.setItem('hallwayFirst', 0);
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
    seq4 = 0;
    seq4++
    switch(seq4) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("bin").style.display = "none"; 
            document.getElementById("toLobby").style.display = "none"; 
            document.getElementById("bulletin").style.display = "none";
            document.getElementById("classroom1").style.display = "none";
            document.getElementById("chatboxinner").innerText = "It's a recycling bin..."; 
            break;       
    }
}

function seq4Click() {
    if (active == 4) {
        if (parseInt(localStorage.getItem('paperclip')) == 0 && parseInt(localStorage.getItem('clipfound')) == 0) {
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
            localStorage.setItem('paperclip', 1); 
            localStorage.setItem('clipfound', 1); 
            document.getElementById("paperclip").style.display = "block";
            break;
        case 7:
            seq4 = 0;
            document.getElementById("chatbox").style.display = "none"; 
            document.getElementById("bin").style.display = "block"; 
            document.getElementById("toLobby").style.display = "block"; 
            document.getElementById("bulletin").style.display = "block";
            document.getElementById("classroom1").style.display = "block";
            break;
        }
    }
    else {
        document.getElementById("chatbox").style.display = "none"; 
        document.getElementById("bin").style.display = "block"; 
        document.getElementById("toLobby").style.display = "block"; 
        document.getElementById("bulletin").style.display = "block";
        document.getElementById("classroom1").style.display = "block";
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
            document.getElementById("bin").style.display = "none"; 
            document.getElementById("toLobby").style.display = "none"; 
            document.getElementById("bulletin").style.display = "none";
            document.getElementById("classroom1").style.display = "none";
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
            document.getElementById("bin").style.display = "none"; 
            document.getElementById("toLobby").style.display = "none"; 
            document.getElementById("bulletin").style.display = "none";
            document.getElementById("classroom1").style.display = "none";
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
                document.getElementById("bin").style.display = "block"; 
                document.getElementById("toLobby").style.display = "block"; 
                document.getElementById("bulletin").style.display = "block";
                document.getElementById("classroom1").style.display = "block";
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
            if (parseInt(localStorage.getItem('c1locked')) == 1) {
                document.getElementById("chatbox").style.display = "block";
                document.getElementById("bin").style.display = "none"; 
                document.getElementById("toLobby").style.display = "none"; 
                document.getElementById("bulletin").style.display = "none";
                document.getElementById("classroom1").style.display = "none";
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "This is the only door in this hallway that isn't sealed shut, but it's locked..."; 
                break;   
            }   
            else {
                document.getElementById("chatbox").style.display = "block";
                document.getElementById("bin").style.display = "none"; 
                document.getElementById("toLobby").style.display = "none"; 
                document.getElementById("bulletin").style.display = "none";
                document.getElementById("classroom1").style.display = "none";
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
        if (parseInt(localStorage.getItem('c1locked')) == 0) {
            switch(seq7) {
                case 2:
                    document.getElementById("chatbox").style.display = "block";
                    document.getElementById("chatboxinner").innerText = "Should I head into the classroom?"; 
                    document.getElementById("yes").style.display = "block";
                    document.getElementById("no").style.display = "block"; 
                    break;
            }
        } else {
            if (parseInt(localStorage.getItem('paperclip')) == 1) {
                switch(seq7) {
                    case 2:
                        document.getElementById("chatboxinner").innerText = "I have a paperclip on hand, perhaps I could try to pick this lock..."; 
                        break;
                    case 3:
                        document.getElementById("chatboxinner").innerText = "*You insert the paper clip into the lock and after a couple of minutes...*"; 
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
                        document.getElementById("bin").style.display = "block"; 
                        document.getElementById("toLobby").style.display = "block"; 
                        document.getElementById("bulletin").style.display = "block";
                        document.getElementById("classroom1").style.display = "block";
                        seq7 = 0;
                        break;
                }
            }
        }
        
    }
}

// Sequence 8
seq8 = 0;

function seq8Start() {
    if (parseInt(localStorage.getItem('audiBoarded')) == 1) {
        document.getElementById("audiBoard").style.display = "block";
        document.getElementById("audiBoard2").style.display = "block";
    } else {
        document.getElementById("audiBoard3").style.display = "block";
        document.getElementById("audiBoard4").style.display = "block";
    }
    active = 8;
    seq8 = 0;
    seq8++
    itemLoad();
    switch(seq8) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "Italic";
            document.getElementById("chatboxinner").innerText = "*You arrive at the main lobby*"; 
            break;   
    }
}
function seq8Click() {
    if (active == 8) {
        seq8++
        if (parseInt(localStorage.getItem('lobbyFirst')) == 1) {
            switch(seq8) {
                case 2:
                    document.getElementById("chatboxinner").style.fontStyle = "normal";
                    document.getElementById("chatboxinner").innerText = "I remember this lobby, it used to be bustling with students every hour of the day..."; 
                    break;
                case 3:
                    document.getElementById("chatboxinner").innerText = "Now it's so weird seeing it empty."; 
                    break; 
                case 4:
                    document.getElementById("chatbox").style.display = "none"; 
                    document.getElementById("audiDoor").style.display = "block"; 
                    document.getElementById("display").style.display = "block"; 
                    document.getElementById("staircase").style.display = "block";
                    localStorage.setItem('lobbyFirst', 0);
                    break; 
            }
        } else {
            switch(seq8) {
                case 2:
                    document.getElementById("chatbox").style.display = "none"; 
                    document.getElementById("audiDoor").style.display = "block"; 
                    document.getElementById("display").style.display = "block"; 
                    document.getElementById("staircase").style.display = "block"; 
                    break;
            }
        }
    }
}


// Sequence 9
seq9 = 0;

function seq9Start() {
    active = 9;
    seq9 = 0;
    seq9++
    document.getElementById("audiDoor").style.display = "none"; 
    document.getElementById("display").style.display = "none"; 
    document.getElementById("staircase").style.display = "none";
    switch(seq9) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "This is the main entrance to the auditorium..."; 
            break;   
    }
}
function seq9Click() {
    if (active == 9) {
        seq9++
        if (parseInt(localStorage.getItem('crowbar')) == 0 && parseInt(localStorage.getItem('audiBoarded')) == 1) {
            switch(seq9) {
                case 2:
                    document.getElementById("chatboxinner").innerText = "It's boarded up with planks, I could probably use some pry tool to remove them...";
                    break; 
                case 3:
                    document.getElementById("chatboxinner").innerText = "No clue where I would find such a tool though.";
                    break; 
                case 4:
                    document.getElementById("chatbox").style.display = "none";
                    document.getElementById("audiDoor").style.display = "block"; 
                    document.getElementById("display").style.display = "block"; 
                    document.getElementById("staircase").style.display = "block"; 
                    break; 
            }
        } else if (parseInt(localStorage.getItem('crowbar')) == 1 && parseInt(localStorage.getItem('audiBoarded')) == 1) {
            switch(seq9) {
                case 2:
                    document.getElementById("chatboxinner").innerText = "It's boarded up with planks, I could use this crowbar to remove them...";
                    break; 
                case 3:
                    document.getElementById("chatboxinner").style.fontStyle = "Italic";
                    document.getElementById("chatboxinner").innerText = "*You wedge the crowbar and pry the planks off*";
                    document.getElementById("audiBoard").style.display = "none";
                    document.getElementById("audiBoard2").style.display = "none";
                    document.getElementById("audiBoard3").style.display = "block";
                    document.getElementById("audiBoard4").style.display = "block";
                    break; 
                case 4:
                    document.getElementById("chatboxinner").style.fontStyle = "normal";
                    document.getElementById("chatboxinner").innerText = "The doors seem to budge now, should I head into the auditorium?";
                    document.getElementById("yes").style.display = "block";
                    document.getElementById("no").style.display = "block";
                    break; 
            }
        } else {
            switch(seq9) {
                case 2:
                    document.getElementById("chatboxinner").style.fontStyle = "normal";
                    document.getElementById("chatboxinner").innerText = "Should I head into the auditorium?";
                    document.getElementById("yes").style.display = "block";
                    document.getElementById("no").style.display = "block";
                    break; 
            }
        }
    }
}

// Sequence 10
seq10 = 0;

function seq10Start() {
    active = 10;
    seq10 = 0;
    seq10++
    document.getElementById("audiDoor").style.display = "none"; 
    document.getElementById("display").style.display = "none"; 
    document.getElementById("staircase").style.display = "none"; 
    switch(seq10) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "These are the school's award displays..."; 
            break;   
    }
}
function seq10Click() {
    if (active == 10) {
        seq10++
        switch(seq10) {
            case 2:
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "Surprising that they are still here untouched..."; 
                break;
            case 3:
                document.getElementById("chatboxinner").innerText = "Must be preserved for the city's criminal investigation..."; 
                break; 
            case 4:
                document.getElementById("chatboxinner").innerText = "Nothing but generic academic awards in these..."; 
                break; 
            case 5:
                document.getElementById("chatboxinner").innerText = "One award is to the coding team, for their advisor, Mr. Nielsen..."; 
                break;
            case 6:
                document.getElementById("chatboxinner").innerText = "For some reason that name sends chills down my spine."; 
                break;
            case 7:
                document.getElementById("chatbox").style.display = "none";
                document.getElementById("audiDoor").style.display = "block"; 
                document.getElementById("display").style.display = "block"; 
                document.getElementById("staircase").style.display = "block"; 
                break;
        }
    }
}

// Sequence 11
seq11 = 0;

function seq11Start() {
    active = 11;
    seq11 = 0;
    seq11++
    document.getElementById("audiDoor").style.display = "none"; 
    document.getElementById("display").style.display = "none"; 
    document.getElementById("staircase").style.display = "none";
    switch(seq11) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "This seems to be the only unsealed staircase to the next floor..."; 
            break;   
    }
}

function seq11Click() {
    if (active == 11) {
        seq11++;
        if (parseInt(localStorage.getItem('stairKey')) == 0 && parseInt(localStorage.getItem('stairLock')) == 1 && parseInt(localStorage.getItem('paperclip')) == 0) {
            switch(seq11) {
                case 2:
                    document.getElementById("chatboxinner").innerText = "It looks to be locked by a complex key lock..."; 
                    break;
                case 3:
                    document.getElementById("chatboxinner").innerText = "After all these years I wonder where its key could be."; 
                    break;
                case 4:
                    document.getElementById("chatbox").style.display = "none";
                    document.getElementById("audiDoor").style.display = "block"; 
                    document.getElementById("display").style.display = "block"; 
                    document.getElementById("staircase").style.display = "block"; 
                    break;            
            }
        } else if (parseInt(localStorage.getItem('stairKey')) == 1 && parseInt(localStorage.getItem('stairLock')) == 1) {
            switch(seq11) {
                case 2:
                    document.getElementById("chatboxinner").innerText = "It looks to be locked by a complex key lock..."; 
                    break;
                case 3:
                    document.getElementById("chatboxinner").innerText = "Perhaps this key I found backstage is the right one..."; 
                    break;
                case 4:
                    document.getElementById("chatboxinner").style.fontStyle = "Italic";
                    document.getElementById("chatboxinner").innerText = "*You insert the key into the lock and...*";
                    break;
                case 5:
                    document.getElementById("chatboxinner").style.fontStyle = "normal";
                    document.getElementById("chatboxinner").innerText = "It clicked open! Should I head up to the next floor?"; 
                    document.getElementById("yes").style.display = "block";
                    document.getElementById("no").style.display = "block";
                    break;          
            }
        } else if (parseInt(localStorage.getItem('stairLock')) == 0) {
            switch(seq11) {
                case 2:
                    document.getElementById("chatboxinner").innerText = "Should I head up to the next floor?"; 
                    document.getElementById("yes").style.display = "block";
                    document.getElementById("no").style.display = "block";
                    break;
            }
        } else if (parseInt(localStorage.getItem('stairKey')) == 0 && parseInt(localStorage.getItem('stairLock')) == 1 && parseInt(localStorage.getItem('paperclip')) == 1) {
            switch(seq11) {
                case 2:
                    document.getElementById("chatboxinner").innerText = "It looks to be locked by a complex key lock..."; 
                    break;
                case 3:
                    document.getElementById("chatboxinner").innerText = "Maybe this paperclip will work..."; 
                    break;
                case 4:
                    document.getElementById("chatboxinner").style.fontStyle = "Italic";
                    document.getElementById("chatboxinner").innerText = "*You insert the paperclip into the lock and after 10 or so minutes...*"; 
                    break;   
                case 5:
                    document.getElementById("chatboxinner").style.fontStyle = "normal";
                    document.getElementById("chatboxinner").innerText = "I give up, this lock is clearly out of my league."; 
                    break;  
               case 6:
                    document.getElementById("chatboxinner").style.fontStyle = "Italic";
                    document.getElementById("chatboxinner").innerText = "*You put the paperclip back into your pocket*"; 
                    break;  
               case 7:
                    document.getElementById("chatboxinner").style.fontStyle = "normal";
                    document.getElementById("chatbox").style.display = "none";
                    document.getElementById("audiDoor").style.display = "block"; 
                    document.getElementById("display").style.display = "block"; 
                    document.getElementById("staircase").style.display = "block"; 
                    break;    
            }
        }

    }
}

// Sequence 12
seq12 = 0;

function seq12Start() {
    active = 12;
    seq12 = 0;
    seq12++
    itemLoad();
    document.getElementById("backstage").style.display = "none"; 
    document.getElementById("exit1").style.display = "none"; 
    document.getElementById("exit2").style.display = "none";
    switch(seq12) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "Italic";
            document.getElementById("chatboxinner").innerText = "*You arrive in the auditorium...*"; 
            break;   
    }
}

function seq12Click() {
    if (active == 12) {
        seq12++
        if (parseInt(localStorage.getItem('audiFirst')) == 1) {
            switch(seq12) {
                case 2:
                    document.getElementById("chatboxinner").style.fontStyle = "normal";
                    document.getElementById("chatboxinner").innerText = "I remember all the concerts that happened here..."; 
                    break; 
                case 3:
                    document.getElementById("chatboxinner").innerText = "Now, all I hear is a deafening silence."; 
                    break; 
                case 4:
                    document.getElementById("chatbox").style.display = "none"; 
                    document.getElementById("backstage").style.display = "block"; 
                    document.getElementById("exit1").style.display = "block"; 
                    document.getElementById("exit2").style.display = "block"; 
                    localStorage.setItem('audiFirst', 0);
                    break; 
            }
        } else {
            switch(seq12) {
                case 2:
                    document.getElementById("chatbox").style.display = "none"; 
                    document.getElementById("backstage").style.display = "block"; 
                    document.getElementById("exit1").style.display = "block"; 
                    document.getElementById("exit2").style.display = "block"; 
                    break;
            }
        }
    }
}


// Sequence 13
seq13 = 0;

function seq13Start() {
    active = 13;
    seq13 = 0;
    seq13++
    document.getElementById("backstage").style.display = "none"; 
    document.getElementById("exit1").style.display = "none"; 
    document.getElementById("exit2").style.display = "none";
    switch(seq13) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "It's the auditorium stage, covered in darkness..."; 
            break;   
    }
}

function seq13Click() {
    if (active == 13) {
        seq13++
        switch(seq13) {
            case 2:
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "Behind those curtains would be the backstage..."; 
                break; 
            case 3:
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "For some reason, I shudder just thinking what could be back there.."; 
                break;
            case 4:
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "Should I head in?"; 
                document.getElementById("yes").style.display = "block";
                document.getElementById("no").style.display = "block"; 
                break; 
            }
    }
}


// Sequence 14
seq14 = 0;

function seq14Start() {
    active = 14;
    seq14 = 0;
    seq14++
    document.getElementById("backstage").style.display = "none"; 
    document.getElementById("exit1").style.display = "none"; 
    document.getElementById("exit2").style.display = "none";
    switch(seq14) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "It's an emergency exit..."; 
            break;   
    }
}

function seq14Click() {
    if (active == 14) {
        seq14++
        switch(seq14) {
            case 2:
                document.getElementById("chatboxinner").style.fontStyle = "Italic";
                document.getElementById("chatboxinner").innerText = "*You push against the doors... they don't budge*"; 
                break; 
            case 3:
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "It seems the doors are boarded up from the other side."; 
                break; 
            case 4:
                document.getElementById("chatbox").style.display = "none"; 
                document.getElementById("backstage").style.display = "block"; 
                document.getElementById("exit1").style.display = "block"; 
                document.getElementById("exit2").style.display = "block"; 
                break; 
            }
    }
}


// Sequence 15
seq15 = 0;

function seq15Start() {
    active = 15;
    seq15 = 0;
    seq15++
    document.getElementById("backstage").style.display = "none"; 
    document.getElementById("exit1").style.display = "none"; 
    document.getElementById("exit2").style.display = "none";
    switch(seq15) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "It's an emergency exit..."; 
            break;   
    }
}

function seq15Click() {
    if (active == 15) {
        seq15++
        switch(seq15) {
            case 2:
                document.getElementById("chatboxinner").style.fontStyle = "Italic";
                document.getElementById("chatboxinner").innerText = "*You push against the doors... they don't budge*"; 
                break; 
            case 3:
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "It seems the doors are boarded up from the other side."; 
                break; 
            case 4:
                document.getElementById("chatbox").style.display = "none"; 
                document.getElementById("backstage").style.display = "block"; 
                document.getElementById("exit1").style.display = "block"; 
                document.getElementById("exit2").style.display = "block"; 
                break; 
            }
    }
}



// Sequence 16
seq16 = 0;

function seq16Start() {
    active = 16;
    seq16 = 0;
    seq16++
    itemLoad();
    document.getElementById("locker1").style.display = "none"; 
    document.getElementById("locker2").style.display = "none"; 
    document.getElementById("locker3").style.display = "none";
    switch(seq16) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "Italic";
            document.getElementById("chatboxinner").innerText = "*You arrive in the classroom...*"; 
            break;   
    }
}

function seq16Click() {
    if (active == 16) {
        seq16++
        if (parseInt(localStorage.getItem('class1First')) == 1) {
            switch(seq16) {
                case 2:
                    document.getElementById("chatboxinner").style.fontStyle = "normal";
                    document.getElementById("chatboxinner").innerText = "This view makes me feel like a kid again..."; 
                    break; 
                case 3:
                    document.getElementById("chatboxinner").innerText = "I wonder how things would be if the incidents never happened."; 
                    break; 
                case 4:
                    document.getElementById("chatbox").style.display = "none"; 
                    document.getElementById("locker1").style.display = "block"; 
                    document.getElementById("locker2").style.display = "block"; 
                    document.getElementById("locker3").style.display = "block";
                    localStorage.setItem('class1First', 0); 
                    break; 
            }
        } else {
            switch(seq16) {
                case 2:
                    document.getElementById("chatbox").style.display = "none"; 
                    document.getElementById("locker1").style.display = "block"; 
                    document.getElementById("locker2").style.display = "block"; 
                    document.getElementById("locker3").style.display = "block"; 
                    break;
            }
        }
    }
}

// Sequence 17
function seq17Start() {
    active = 17;
    seq17 = 0;
    seq17++
    document.getElementById("locker1").style.display = "none"; 
    document.getElementById("locker2").style.display = "none"; 
    document.getElementById("locker3").style.display = "none";
    switch(seq17) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "It's a random students locker, its unlocked..."; 
            break;   
    }
}

function seq17Click() {
    if (active == 17) {
        seq17++
        switch(seq17) {
            case 2:
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "There's a gym uniform here, and some assorted textbooks..."; 
                break;
            case 3:
                document.getElementById("chatboxinner").innerText = "After all that has happened, I wonder why these are still here"; 
                break; 
            case 4:
                document.getElementById("chatbox").style.display = "none";
                document.getElementById("locker1").style.display = "block"; 
                document.getElementById("locker2").style.display = "block"; 
                document.getElementById("locker3").style.display = "block"; 
                break;
        }
    }
}

// Sequence 18
function seq18Start() {
    active = 18;
    seq18 = 0;
    seq18++
    document.getElementById("locker1").style.display = "none"; 
    document.getElementById("locker2").style.display = "none"; 
    document.getElementById("locker3").style.display = "none";
    switch(seq18) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "It's a generic locker, missing its lock..."; 
            break;   
    }
}

function seq18Click() {
    if (active == 18) {
        seq18++
        switch(seq18) {
            case 2:
                document.getElementById("chatboxinner").style.fontStyle = "normal";
                document.getElementById("chatboxinner").innerText = "There are some boxes and assorted papers here..."; 
                break;
            case 3:
                document.getElementById("chatboxinner").innerText = "Among them are random worksheets and assignments..."; 
                break; 
            case 4:
                document.getElementById("chatboxinner").innerText = "There is one paper, ripped in half unlike the rest..."; 
                break; 
            case 5:
                document.getElementById("chatboxinner").innerText = "It titles as a notice for the backstage crew, dated to a few weeks before closing..."; 
                break;
            case 6:
                document.getElementById("chatboxinner").innerText = "Besides the title the notice reads..."; 
                break;  
            case 7:
                document.getElementById("chatboxinner").innerText = "'Due to security locking up after 5pm, we will store a copy of the...'"; 
                break; 
            case 8:
                document.getElementById("chatboxinner").innerText = "Then it cuts off at the rip..."; 
                break; 
            case 9:
                document.getElementById("chatbox").style.display = "none";
                document.getElementById("locker1").style.display = "block"; 
                document.getElementById("locker2").style.display = "block"; 
                document.getElementById("locker3").style.display = "block"; 
                break;
        }
    }
}

// Sequence 19
function seq19Start() {
    active = 19;
    seq19 = 0;
    seq19++
    document.getElementById("locker1").style.display = "none"; 
    document.getElementById("locker2").style.display = "none"; 
    document.getElementById("locker3").style.display = "none";
    switch(seq19) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "It's a teacher's locker, it has a name tag on it..."; 
            break;   
    }
}

function seq19Click() {
    if (active == 19) {
        seq19++
        switch(seq19) {
            case 2:
                document.getElementById("chatboxinner").innerText = "The old tag is peeling off at multiple points..."; 
                break;
            case 3:
                document.getElementById("chatboxinner").innerText = "I can only see the last few letters of their name..."; 
                break;
            case 4:
                document.getElementById("chatboxinner").innerText = "It reads 'sen'..."; 
                break;
        }
        if (parseInt(localStorage.getItem('paperclip')) == 1 && parseInt(localStorage.getItem('lockerLock')) == 1) {
            switch(seq19) {
                case 5:
                    document.getElementById("chatboxinner").innerText = "It's locked, I could try to open this locker with the paperclip"; 
                    break;  
                case 6:
                    document.getElementById("chatboxinner").style.fontStyle = "Italic";
                    document.getElementById("chatboxinner").innerText = "*You insert the paperclip into the lock and after 10 or so minutes..."; 
                    break;  
                case 7:
                    document.getElementById("chatboxinner").style.fontStyle = "normal";
                    document.getElementById("chatboxinner").innerText = "It clicked! Perhaps I am not as bad at lockpicking as I think..."; 
                    break; 
                case 8:
                    document.getElementById("chatboxinner").style.fontStyle = "Italic";
                    document.getElementById("chatboxinner").innerText = "*You creak open the locker and look inside*"; 
                    break;
                case 9:
                    document.getElementById("chatboxinner").style.fontStyle = "normal";
                    document.getElementById("chatboxinner").innerText = "There's a crowbar in here! This could definitely come in handy..."; 
                    document.getElementById("crowbar").style.display = "block";
                    break;
                case 10:
                    document.getElementById("chatboxinner").innerText = "Seems the crowbar has some old blood on it, the whole locker reeks of iron..."; 
                    break;
                case 11:
                    document.getElementById("chatboxinner").innerText = "Am I holding a murder weapon? How did the investigation miss this?"; 
                    break;
                case 12:
                    document.getElementById("chatbox").style.display = "none";
                    document.getElementById("locker1").style.display = "block"; 
                    document.getElementById("locker2").style.display = "block"; 
                    document.getElementById("locker3").style.display = "block"; 
                    localStorage.setItem('crowbar', 1);
                    localStorage.setItem('lockerLock', 0);
                    break;

            }
        }
        else if (parseInt(localStorage.getItem('paperclip')) == 0 && parseInt(localStorage.getItem('lockerLock')) == 1) {
            switch(seq19) {
                case 5:
                    document.getElementById("chatboxinner").innerText = "It's locked by an old school lock, I could probably pick this with something."; 
                    break; 
                case 6:
                    document.getElementById("chatbox").style.display = "none";
                    document.getElementById("locker1").style.display = "block"; 
                    document.getElementById("locker2").style.display = "block"; 
                    document.getElementById("locker3").style.display = "block"; 
                    break;
            }
        } else {
            switch(seq19) {
                case 5:
                    document.getElementById("chatboxinner").innerText = "It still reeks of blood in this locker."; 
                    break; 
                case 6:
                    document.getElementById("chatbox").style.display = "none";
                    document.getElementById("locker1").style.display = "block"; 
                    document.getElementById("locker2").style.display = "block"; 
                    document.getElementById("locker3").style.display = "block"; 
                    break;
                }
            }
        
    }
}



// Extra Sequences - - - - - - - - - 
seq20 = 0;
function seq20Start() {
    seq20 = 0;
    active = 20;
    seq20++
    switch(seq20) {
        case 0:
            break;
        case 1:
            document.getElementById("chatbox").style.display = "block"; 
            document.getElementById("bin").style.display = "none"; 
            document.getElementById("toLobby").style.display = "none"; 
            document.getElementById("bulletin").style.display = "none";
            document.getElementById("classroom1").style.display = "none";
            document.getElementById("chatboxinner").style.fontStyle = "normal";
            document.getElementById("chatboxinner").innerText = "I can't leave, I need to finish this... My sanity depends on it."; 
            break;       
    }
}

function seq20Click() {
    if (active == 20) {
        seq20++
        switch(seq20) {
            case 2:
                document.getElementById("chatbox").style.display = "none"; 
                document.getElementById("bin").style.display = "block"; 
                document.getElementById("toLobby").style.display = "block"; 
                document.getElementById("bulletin").style.display = "block";
                document.getElementById("classroom1").style.display = "block"; 
                break;  
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
    seq8Click();
    seq9Click();
    seq10Click();
    seq11Click();
    seq12Click();
    seq13Click();
    seq14Click();
    seq15Click();
    seq16Click();
    seq17Click();
    seq18Click();
    seq19Click();
    seq20Click();
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
            localStorage.setItem('c1locked', 0)
            break;
        case 9:
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            window.location.href="auditorium.html";
            break;
        case 11:
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            localStorage.setItem('stairLock', 0)
            window.location.href="win.html";
            break;
        case 13:
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            window.location.href="backstage.html";
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
            document.getElementById("bin").style.display = "block"; 
            document.getElementById("toLobby").style.display = "block"; 
            document.getElementById("bulletin").style.display = "block";
            document.getElementById("classroom1").style.display = "block";
            break;
        case 7: 
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none"; 
            document.getElementById("bin").style.display = "block"; 
            document.getElementById("toLobby").style.display = "block"; 
            document.getElementById("bulletin").style.display = "block";
            document.getElementById("classroom1").style.display = "block";
            seq7 = 0;
            localStorage.setItem('c1locked', 0)
            break;
        case 9:
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            document.getElementById("audiDoor").style.display = "block"; 
            document.getElementById("display").style.display = "block"; 
            document.getElementById("staircase").style.display = "block";
            localStorage.setItem('audiBoarded', 0)
            break;
        case 11:
            document.getElementById("yes").style.display = "none";
            document.getElementById("no").style.display = "none";
            document.getElementById("chatbox").style.display = "none";
            document.getElementById("audiDoor").style.display = "block"; 
            document.getElementById("display").style.display = "block"; 
            document.getElementById("staircase").style.display = "block"; 
            localStorage.setItem('stairLock', 0)
            break;
            case 13:
                document.getElementById("yes").style.display = "none";
                document.getElementById("no").style.display = "none";
                document.getElementById("chatbox").style.display = "none";
                document.getElementById("backstage").style.display = "block"; 
                document.getElementById("exit1").style.display = "block"; 
                document.getElementById("exit2").style.display = "block";
                break;
    }
}