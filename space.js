let player = document.getElementById("player")
let left = 0;
let right = 0;

let move = (event) => {
    if (event.keyCode == 37) {
        left -= 10
        player.style.left = (parseInt(left) + left) + "px";
    }
    if (event.keyCode == 39) {
        left += 10
        player.style.left = (parseInt(left) + left) + "px";
    }
}

document.onkeydown = move