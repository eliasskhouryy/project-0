

$(`#pressToPlay`).on(`click`, function(){
    $(`.initial`).addClass(`visibilityHidden`);
    $(`.container`).removeClass(`visibilityHidden`);
})

$(`.gridItem`).mouseenter(function() {

    if (turnCount % 2 === 0) {
        $(this).addClass(`crossBackground`);
    } else {
        $(this).addClass(`circleBackground`);
    }   
}).mouseleave(function(){
    if (turnCount % 2 === 0) {
        $(this).removeClass(`crossBackground`);
    } else {
        $(this).removeClass(`circleBackground`);
    }   
})


$(`.gridItem`).on(`click`, function() {
    if ($(this).html() != '') {
        misClickSound.play();
        return;
    }
    if (turnCount % 2 === 0) {
        clickSound.play(0.2)
        $(this).html(cross); 
        turnCount++;
        $(`.turn`).html(`O`)
        win();
    } else {
        clickSound.play(0.2)
        $(this).html(circle); 
        turnCount++;
        $(`.turn`).html(`X`)
        win();
    }    
});

