

$(`.gridItem`).on(`click`, function() {
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
        clickSound.play()
        $(this).html(circle); 
        turnCount++;
        $(`.turn`).html(`1`)
        win();
    }    
});

