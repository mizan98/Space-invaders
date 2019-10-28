let entry = document.getElementsByClassName("entry")
let game = document.getElementsByClassName("game")
entry.hidden = false;
game.hidden = true;

document.getElementById("btn-enter")
// let canvas = document.getElementById("game-start")
.addEventListener ("click", function() {
    entry.hidden = true;
    game.hidden = false;
}, false);


// let display = canvas.getContext("2d")

