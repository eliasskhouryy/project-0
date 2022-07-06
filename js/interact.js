

$(`#pressToPlay`).on(`click`, function(){
    if (cross == null || circle == null) {
        alert(`make sure both players have selected markers`)
        return;
    } else if (cross === circle){
        alert(`please select different markers`);
        return;
    } else {
        $(`.initial`).addClass(`visibilityHidden`);
        $(`.container`).removeClass(`visibilityHidden`);
    }
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

$(`#chooseCircle1`).on(`click`, function()  {
    $(this).addClass(`backgroundSelector`)
    cross = $(`#chooseCircle1`).html();
        if (cross != $(this)) {
            console.log(`stop`);
            $(`#chooseCross1`).removeClass(`backgroundSelector`);
            cross = $(`#chooseCircle1`).html();
            return;
        } 
} )

$(`#chooseCross1`).on(`click`, function()  {
    $(this).addClass(`backgroundSelector`)
    cross = $(this).html();
        if (cross != $(this)) {
            $(`#chooseCircle1`).removeClass(`backgroundSelector`);
            cross = $(this).html();
            return;
        } 
} )
 

$(`#chooseCircle2`).on(`click`, function()  {
    $(this).addClass(`backgroundSelector`)
    circle = $(`#chooseCircle2`).html();
        if (circle != $(this)) {
            console.log(`stop`);
            $(`#chooseCross2`).removeClass(`backgroundSelector`);
            circle = $(this).html();
            return;
        } 
} )

$(`#chooseCross2`).on(`click`, function()  {
    $(this).addClass(`backgroundSelector`)
    circle = $(this).html();
        if (circle != $(this)) {
            $(`#chooseCircle2`).removeClass(`backgroundSelector`);
            circle = $(this).html();
            return;
        } 
} )
