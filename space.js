// loads in images and variables

let player = document.getElementById("player")
let alien = document.getElementById("alien")
let alienArray = [];
let left = 0;
let right = 0;

// Checks keycode and which movements are being made

let move = (event) => {
    if (event.keyCode == 37) {
        left -= 10
    }
    else if (event.keyCode == 39) {
        left += 10
    }
    else if (event.keyCode == 32) {
        console.log("Fire")
    }
    player.style.left = (parseInt(left) + left) + "px";
}

document.onkeydown = move

// for (rows = 0; rows < 7; rows++) {
//     for (columns = 0; columns < 5; columns ++) {
//         alien.drawImage(alien)
//         // alienArray[i][j] = new Image()
//         // alienArray[i][j].src = ".image/giphy(1).gif"
//     }
// }
