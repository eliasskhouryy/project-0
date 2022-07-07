

$(`#pressToPlay`).on(`click`, function(){ //PRESS TO PLAY BUTTON
    if (cross == null || circle == null) {
        alert(`make sure both players have selected markers`)
        return;
    } else if (cross == circle){
        alert(`please select different markers`);
        return;
    } else {
        $(`.initial`).addClass(`visibilityHidden`);
        $(`.container`).removeClass(`visibilityHidden`);
    }
})

$(`.clearButton`).on(`click`, function(){ //CLEAR BOARD BUTTON
    $(`.gridItem`).html(``);
    turnCount = 0;
    $(`.turn`).html(`1`);
})

$(`.gridItem`).on(`click`, function() { //MARKER PRESS DOWN BUTTON
    if ($(this).html() != '') {
        misClickSound.play();
        return;
    }
    if (turnCount % 2 === 0) {
        clickSound.play()
        $(this).html(cross); 
        turnCount++;
        $(`.turn`).html(`2`)
        win();
    } else {
        clickSound.play(0.2)
        $(this).html(circle); 
        turnCount++;
        $(`.turn`).html(`1`)
        win();
    }    
});

$(`.player1selector div`).on(`click`, function()  {  // PLAYER 1 SELECTOR
    $(this).addClass(`backgroundSelector`);
    cross = $(this).html();
        if (cross != $(this)) {
            console.log(`stop`);
            $(`.player1selector div`).removeClass(`backgroundSelector`);
            $(this).addClass(`backgroundSelector`);
            cross = $(this).html();
            return;
        } 
} )

$(`.player2selector div`).on(`click`, function()  {  // PLAYER 2 SELECTOR
    $(this).addClass(`backgroundSelector`);
    circle = $(this).html();
        if (circle != $(this)) {
            console.log(`stop`);
            $(`.player2selector div`).removeClass(`backgroundSelector`);
            $(this).addClass(`backgroundSelector`);
            circle = $(this).html();
            return;
        } 
} )

