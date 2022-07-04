

$(`#box1`).on(`click`, function(e) {
    if (turnCount % 2 === 0) {
        $(`#box1`).html(cross); 
        turnCount++;
        $(`.turn`).html(`2`)
        win();
    } else {
        $(`#box1`).html(circle); 
        turnCount++;
        $(`.turn`).html(`1`)
        win();
    }
});

$(`#box2`).on(`click`, function(e) {
    if (turnCount % 2 === 0) {
        $(`#box2`).html(cross); 
        turnCount++;
        $(`.turn`).html(`2`)
        win();
    } else {
        turnCount++;
        $(`#box2`).html(circle); 
        $(`.turn`).html(`1`)
        win();
    }
});

$(`#box3`).on(`click`, function(e) {
    if (turnCount % 2 === 0) {
        $(`#box3`).html(cross); 
        turnCount++;
        $(`.turn`).html(`2`)
        win();
    } else {
        $(`#box3`).html(circle); 
        turnCount++;
        $(`.turn`).html(`1`)
        win();
    }
});

$(`#box4`).on(`click`, function(e) {
    if (turnCount % 2 === 0) {
        $(`#box4`).html(cross); 
        turnCount++;
        $(`.turn`).html(`2`)
        win();
    } else {
        $(`#box4`).html(circle); 
        turnCount++;
        $(`.turn`).html(`1`)
        win();
    }
});

$(`#box5`).on(`click`, function(e) {
    if (turnCount % 2 === 0) {
        $(`#box5`).html(cross); 
        turnCount++;
        $(`.turn`).html(`2`)
        win();
    } else {
        $(`#box5`).html(circle); 
        turnCount++;
        $(`.turn`).html(`1`)
        win();

    }
});


$(`#box6`).on(`click`, function(e) {
    if (turnCount % 2 === 0) {
        $(`#box6`).html(cross); 
        turnCount++;
        $(`.turn`).html(`2`)
        win();

    } else {
        $(`#box6`).html(circle); 
        turnCount++;
        $(`.turn`).html(`1`)
        win();
    }
});

$(`#box7`).on(`click`, function(e) {
    if (turnCount % 2 === 0) {
        $(`#box7`).html(cross); 
        turnCount++;
        $(`.turn`).html(`2`)
        win();
    } else {
        $(`#box7`).html(circle); 
        turnCount++;
        $(`.turn`).html(`1`)
        win();
    }
});

$(`#box8`).on(`click`, function(e) {
    if (turnCount % 2 === 0) {
        $(`#box8`).html(cross); 
        turnCount++;
        $(`.turn`).html(`2`)
        win();
    } else {
        $(`#box8`).html(circle); 
        turnCount++;
        $(`.turn`).html(`1`)
        win();

    }
});

$(`#box9`).on(`click`, function(e) {
    if (turnCount % 2 === 0) {
        $(`#box9`).html(cross); 
        turnCount++;
        $(`.turn`).html(`2`)
        win();
    } else {
        $(`#box9`).html(circle); 
        turnCount++;
        $(`.turn`).html(`1`)
        win();
    }
});

