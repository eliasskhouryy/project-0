const storageInput = winCounter;
let player1text = $(`.player1`).html();
let player2text = $(`.player2`).html();
const storedInputPlayer1 = localStorage.getItem(`player1value`); //PLAYER1 score saving
const storedInputPlayer2 = localStorage.getItem(`player2value`); //PLAYER2 score savings

const button = document.querySelector(`.storageButton`); //save button

const saveToLocalStorage = function() {
    localStorage.setItem(`player1value`, winCounter.player1)
    localStorage.setItem(`player2value`, winCounter.player2)
    alert(`Score Saved Locally!`)
}

button.addEventListener(`click`, saveToLocalStorage); //retieve from saved game button

$(`.retrieveStored`).on(`click`, function() {
    $(`.player1`).html(storedInputPlayer1);
    $(`.player2`).html(storedInputPlayer2);
})