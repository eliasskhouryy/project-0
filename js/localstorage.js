const storageInput = winCounter;
let player1text = $(`.player1`).html();
let player2text = $(`.player2`).html();
const storedInputPlayer1 = localStorage.getItem(`player1value`);
const storedInputPlayer2 = localStorage.getItem(`player2value`);

const button = document.querySelector(`.storageButton`);


const saveToLocalStorage = function() {
    localStorage.setItem(`player1value`, winCounter.player1)
    localStorage.setItem(`player2value`, winCounter.player2)
    alert(`Score Saved Locally!`)
}

button.addEventListener(`click`, saveToLocalStorage);


$(`.retrieveStored`).on(`click`, function() {
    $(`.player1`).html(storedInputPlayer1);
    $(`.player2`).html(storedInputPlayer2);
})