// let entry = document.getElementsByClassName("entry")
// let game = document.getElementsByClassName("game")
// let button = document.getElementById("btn-enter")
// entry.hidden = false;
// game.hidden = true;

// // document.getElementById("btn-enter")
// // // let canvas = document.getElementById("game-start")
// // .addEventListener ("click", function() {
// //     entry.hidden = true;
// //     game.hidden = false;
// // }, false);


// // let display = canvas.getContext("2d")

// entry.addEvenListener("click",() => {
//     if(entry.style.display == "none"){
//         entry.style.display = "block"
//     }
//     else{
//         entry.style.display = "none"
//     }
// })

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
let enemies = new Image()

class Alien {
    constructor() {
        this.image = enemies;
        this.hit = false;
    }
}

enemies.src = "giphy(1).gif"
canvas.width = window.innerWidth
canvas.height = window.innerHeight

enemies.onload = function () {
ctx.drawImage(enemies, 100, 100)
ctx.stroke()
};