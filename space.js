// // loads in images and variables
// let alien = document.getElementById("alien")
// let alienArray = [];
// let missiles = []

// // Checks keycode and which movements are being made

let hero = {
    top: 700,
    left: 550,
}

let missles = [];

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
        console.log("fire!")
        missiles.push({
            left: hero.left + 15,
            right: hero.top
        })
        console.log(missiles)
    }
}

 function moveHero(){
    document.getElementById("hero").style.left = hero.left + "px"
 }

 function drawMissiles() {
    document.getElementById("missiles").innerHTML = "";
    for (let missile = 0; missile < missiles.length; missile ++) {
        document.getElementById("missiles").innerHTML += `<div class = "missile" style = 'left: ${missile[missile].left}px; top: ${missiles[missile].top}px;'></div>`;
    }
 }

 moveHero()

//  function drawMissiles() {
//      document.getElementById("missile").innerHTML = ""
//      for(let missile = 0; missile < missiles.length; missile = missile + 1){
//         missiles(missile)
//      }
//  }


