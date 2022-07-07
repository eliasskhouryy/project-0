

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

$(`.clearButton`).on(`click`, function(){
    $(`.gridItem`).html(``);
    turnCount = 0;
})

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
        clickSound.play(0.2)
        $(this).html(circle); 
        turnCount++;
        $(`.turn`).html(`1`)
        win();
    }    
});

$(`#chooseCircle1`).on(`click`, function()  {
    $(this).addClass(`backgroundSelector`);
    cross = $(this).html();
        if (cross != $(this)) {
            console.log(`stop`);
            $(`#chooseCross1, #chooseget1, #choosetom1`).removeClass(`backgroundSelector`);
            cross = $(this).html();
            return;
        } 
} )

$(`#chooseCross1`).on(`click`, function()  {
    $(this).addClass(`backgroundSelector`)
    cross = $(this).html();
        if (cross != $(this)) {
            $(`#chooseCircle1, #chooseget1, #choosetom1`).removeClass(`backgroundSelector`);
            cross = $(this).html();
            return;
        } 
} )

$(`#chooseget1`).on(`click`, function()  {
    $(this).addClass(`backgroundSelector`)
    cross = $(`#chooseget1`).html()
        if (cross != $(this)) {
            console.log(`stop`);
            $(`#chooseCross1, #chooseCircle1, #choosetom1`).removeClass(`backgroundSelector`);
            cross = $(this).html();
            return;
        } 
} )

$(`#choosetom1`).on(`click`, function()  {
    $(this).addClass(`backgroundSelector`)
    circle = $(`#choosetom1`).html()
        if (cross != $(this)) {
            console.log(`stop`);
            $(`#chooseCross1, #chooseCircle1, #chooseget1`).removeClass(`backgroundSelector`);
            cross = $(this).html();
            return;
        } 
} )
//  ------------------- second selector -----------------//
$(`#chooseCircle2`).on(`click`, function()  {
    $(this).addClass(`backgroundSelector`);
    circle = $(this).html();
        if (circle != $(this)) {
            console.log(`stop`);
            $(`#chooseCross2, #chooseget2, #choosetom2`).removeClass(`backgroundSelector`);
            circle = $(this).html();
            return;
        } 
} )

$(`#chooseCross2`).on(`click`, function()  {
    $(this).addClass(`backgroundSelector`)
    circle = $(this).html();
        if (circle != $(this)) {
            $(`#chooseCircle2, #chooseget2, #choosetom2`).removeClass(`backgroundSelector`);
            circle = $(this).html();
            return;
        } 
} )

$(`#chooseget2`).on(`click`, function()  {
    $(this).addClass(`backgroundSelector`)
    circle = $(`#chooseget2`).html()
        if (circle != $(this)) {
            console.log(`stop`);
            $(`#chooseCross2, #chooseCircle2, #choosetom2`).removeClass(`backgroundSelector`);
            circle = $(this).html();
            return;
        } 
} )

$(`#choosetom2`).on(`click`, function()  {
    $(this).addClass(`backgroundSelector`)
    circle = $(`#choosetom2`).html()
        if (circle != $(this)) {
            console.log(`stop`);
            $(`#chooseCross2, #chooseCircle2, #chooseget2`).removeClass(`backgroundSelector`);
            circle = $(this).html();
            return;
        } 
} )