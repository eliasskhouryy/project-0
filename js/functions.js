const cross = `<img style="max-width: 98%;" src="img/cross.png" alt="cross">`;
const circle = `<img style="max-width: 100%;" src="img/circle.png" alt="cricle">`;
const clickSound = new Audio(`sounds/misClick.wav`);
const misClickSound = new Audio(`sounds/newClick.wav`);

let turnCount = 0;

const winCounter = {
    player1: 0,
    player2: 0
}

const clearBox = function(){
    $(`#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9`).html(``);
    turnCount = 0;
};



const win = function() {
    if ($(`#box1`).html() == cross && $(`#box2`).html() == cross && $(`#box3`).html() == cross) {
        setTimeout(function() {alert(`PLAYER 1 wins!`); clearBox();}
        , 300);
        winCounter.player1++;
        $(`.player1`).html(`${winCounter.player1}`);     
    } else if ($(`#box1`).html() == circle && $(`#box2`).html() == circle && $(`#box3`).html() == circle) {
        setTimeout(function() {alert(`PLAYER 2 wins!`); clearBox();}, 300)
        winCounter.player2++;
        $(`.player2`).html(`${winCounter.player2}`); 
    } else if ($(`#box4`).html() == cross && $(`#box5`).html() == cross && $(`#box6`).html() == cross) {
        setTimeout(function() {alert(`PLAYER 1 wins!`); clearBox();}, 300);
        winCounter.player1++;
        $(`.player1`).html(`${winCounter.player1}`); 
    } else if ($(`#box4`).html() == circle && $(`#box5`).html() == circle && $(`#box6`).html() == circle) {
        setTimeout(function() {alert(`PLAYER 2 wins!`); clearBox();}, 300);
        winCounter.player2++;
        $(`.player2`).html(`${winCounter.player2}`); 
    } else if ($(`#box7`).html() == cross && $(`#box8`).html() == cross && $(`#box9`).html() == cross) {
        setTimeout(function() {alert(`PLAYER 1 wins!`); clearBox();}, 300);
        winCounter.player1++;
        $(`.player1`).html(`${winCounter.player1}`); 
    } else if ($(`#box7`).html() == circle && $(`#box8`).html() == circle && $(`#box9`).html() == circle) {
        setTimeout(function() {alert(`PLAYER 2 wins!`); clearBox();}, 300)
        winCounter.player2++;
        $(`.player2`).html(`${winCounter.player2}`); 
    } else if ($(`#box1`).html() == cross && $(`#box4`).html() == cross && $(`#box7`).html() == cross) {
        setTimeout(function() {alert(`PLAYER 1 wins!`); clearBox();}, 300);
        winCounter.player1++;
        $(`.player1`).html(`${winCounter.player1}`); 
    } else if ($(`#box1`).html() == circle && $(`#box4`).html() == circle && $(`#box7`).html() == circle) {
        setTimeout(function() {alert(`PLAYER 2 wins!`); clearBox();}, 300)
        winCounter.player2++;
        $(`.player2`).html(`${winCounter.player2}`); 
    } else if ($(`#box2`).html() == cross && $(`#box5`).html() == cross && $(`#box8`).html() == cross) {
        setTimeout(function() {alert(`PLAYER 1 wins!`); clearBox();}, 300);
        winCounter.player1++;
        $(`.player1`).html(`${winCounter.player1}`); 
    } else if ($(`#box2`).html() == circle && $(`#box5`).html() == circle && $(`#box8`).html() == circle) {
        setTimeout(function() {alert(`PLAYER 2 wins!`); clearBox();}, 300)
        winCounter.player2++;
        $(`.player2`).html(`${winCounter.player2}`); 
    } else if ($(`#box3`).html() == cross && $(`#box6`).html() == cross && $(`#box9`).html() == cross) {
        setTimeout(function() {alert(`PLAYER 1 wins!`); clearBox();}, 300);
        winCounter.player1++;
        $(`.player1`).html(`${winCounter.player1}`); 
    } else if ($(`#box3`).html() == circle && $(`#box6`).html() == circle && $(`#box9`).html() == circle) {
        setTimeout(function() {alert(`PLAYER 2 wins!`); clearBox();}, 300)
        winCounter.player2++;
        $(`.player2`).html(`${winCounter.player2}`); 
    } else if ($(`#box1`).html() == cross && $(`#box5`).html() == cross && $(`#box9`).html() == cross) {
        setTimeout(function() {alert(`PLAYER 1 wins!`); clearBox();}, 300);
        winCounter.player1++;
        $(`.player1`).html(`${winCounter.player1}`); 
    } else if ($(`#box1`).html() == circle && $(`#box5`).html() == circle && $(`#box9`).html() == circle) {
        setTimeout(function() {alert(`PLAYER 2 wins!`); clearBox();}, 300)
        winCounter.player2++;        
        $(`.player2`).html(`${winCounter.player2}`); 
    } else if ($(`#box3`).html() == cross && $(`#box5`).html() == cross && $(`#box7`).html() == cross) {
        setTimeout(function() {alert(`PLAYER 1 wins!`); clearBox();}, 300);
        winCounter.player1++;
        $(`.player1`).html(`${winCounter.player1}`); 
    } else if ($(`#box3`).html() == circle && $(`#box5`).html() == circle && $(`#box7`).html() == circle) {
         setTimeout(function() {alert(`PLAYER 2 wins!`); clearBox();}, 300)
        winCounter.player2++;
        $(`.player2`).html(`${winCounter.player2}`); 
    } else if (turnCount >= 9) {
        setTimeout(function() {alert(`draw`);
        clearBox();}, 300);
        
    }
}




