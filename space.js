// Set up hero's starting coordinates, can refer to these to display missiles

let hero = {
    top: 700,
    left: 550,
}

// Empty arrays, will store all instances of the missiles and enemies. Enemies are preset

let missiles = []; 
let enemies = [
    { left: 200, top: 100 },
    { left: 300, top: 100 },
    { left: 400, top: 100 },
    { left: 500, top: 100 },
    { left: 600, top: 100 },
    { left: 700, top: 100 },
    { left: 800, top: 100 },
    { left: 900, top: 100 },
    { left: 200, top: 175 },
    { left: 300, top: 175 },
    { left: 400, top: 175 },
    { left: 500, top: 175 },
    { left: 600, top: 175 },
    { left: 700, top: 175 },
    { left: 800, top: 175 },
    { left: 900, top: 175 },
    { left: 200, top: 250 },
    { left: 300, top: 250 },
    { left: 400, top: 250 },
    { left: 500, top: 250 },
    { left: 600, top: 250 },
    { left: 700, top: 250 },
    { left: 800, top: 250 },
    { left: 900, top: 250 }
];

// Listens out for the key presses of left, right and spacebar, uses keycode to differentiate between keys, moves coordinates according to which key is pressed

document.onkeydown = function (e) {
    if (e.keyCode === 37){
         hero.left = hero.left - 10
         console.log("left")
         moveHero()
    }
    else if(e.keyCode === 39){
        hero.left = hero.left + 10
        console.log("left")
        moveHero()
    }
    else if(e.keyCode === 32){
        console.log("fire!")
        missiles.push({
            left: hero.left + 25,
            top: hero.top
        })
        drawMissiles() // Draw a new missile every time you "fire"
    }
}

// Redraws hero by changing it's x coordinate

function moveHero(){
    document.getElementById("hero").style.left = hero.left + "px"
 }

// This is how a new missile is drawn, gets the position of player and draws missile there. Same with the enemies, as they have already been stated

function drawMissiles() { 
    document.getElementById("missile").innerHTML = "";
    for (let i = 0; i < missiles.length; i++) {
        // missiles[missile].left === arrayName[position].property
        document.getElementById("missile").innerHTML +=`<div id='missile' style='left:${missiles[i].left}px; top:${missiles[i].top}px;'></div>`;
    }
}

function drawEnemies() { 
    document.getElementById("enemies").innerHTML = "";
    for (let i = 0; i < enemies.length; i++) {
        document.getElementById("enemies").innerHTML +=`<div id='enemies' style='left:${enemies[i].left}px; top:${enemies[i].top}px;'></div>`;
    }
}


// These funtion moves the coordinates of the missiles by 10 each loop of "game()"

function moveMissiles() { 
    for (let i = 0; i < missiles.length; i++) {
        missiles[i].top = missiles[i].top - 10;
    }
}

function moveEnemies() { 
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].top = enemies[i].top +2;
    }
}


function hitAlien() {
    for (let enemy = 0; enemy < enemy.length; enemy++) {
        for (let missile = 0; missile < missiles.length; missile++) {
            if(
                (missiles[missiles].top <= enemies[enemy].top + 50) &&
                (missiles[missiles].top > enemies[enemy].top) &&
                (missiles[missiles].left > enemies[enemy].left) &&
                (missiles[missiles].left <= enemies[enemy].left + 50)
                ){
                enemies.splice(enemy, 1)
                missiles.splice(missile, 1)
            }
        }
    }
}

// The functions listed are looped a certain amount of times per second

function game() {
    setTimeout(game,150) 
    moveMissiles()
    drawMissiles()
    moveEnemies()
    drawEnemies()
    hitAlien()
}
game()

//1:18:12