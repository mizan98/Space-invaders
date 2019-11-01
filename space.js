// loads in images and variables
let alien = document.getElementById("alien")
let alienArray = [];


// Checks keycode and which movements are being made
let hero = {
    left: 5
}

let missiles = []

document.onkeydown = function (e) {
    if (e.keyCode === 37){
         hero.left = hero.left - 10
         console.log("left")
         moveHero()
    }
    else if(e.keyCode === 39){
        hero.left = hero.left + 10
        moveHero()
    }
    else if(e.keyCode === 32){
        missiles.push({
            left: hero.left + 15
        })
    }
}

 
 function moveHero(){
     document.getElementById("player").style.left = hero.left + "px"
 }
 moveHero()

 function drawMissiles() {
     document.getElementById("missile").innerHTML = ""
     for(let missile = 0; missile < missiles.length; missile = missile + 1){
        missiles(missile)
     }
 }

