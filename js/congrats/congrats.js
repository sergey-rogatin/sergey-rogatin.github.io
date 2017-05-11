let $inputBox = $('.console-text').attr('spellcheck', false);

let isWriting = false;

function dissapearTransition($history) {
    $history.css({
        color: 'transparent',
        top: '-2em'
    });
    setInterval(() => $history.remove(), 1000);
}


function toHistoryTransition($history, color) {
    $history.css({
        color: color,
        fontSize: '0.7em',
        top: '-40px',
        opacity: '0.4'
    });
}

function inputBoxTransition($inputBox) {
    let color = $inputBox.css('color');
    dissapearTransition($('.console-text__history'));
    let $history = $('<div>', {
        class: 'console-text__history'
    }).html($inputBox.val()).css('color', color);

    $('.text-exchange').append($history);
    $inputBox.val('');

    setTimeout(() => toHistoryTransition($history, color), 0);
}


$(document).keypress((e) => {
    if(e.which === 13 && !isWriting && $inputBox.val() !== '') {
        inputBoxTransition($inputBox);
        setTimeout(() => writeOverTime($inputBox, 'Ну привет'), 800);
        isWriting = true;
        $inputBox.attr('readonly', true);
    }
});


function writeOverTime($inputBox, text) {
    $inputBox.css('color', 'lawngreen');
    let writeTime = 100;
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => $inputBox.val($inputBox.val() + text[i]), writeTime);
        let interval = randomRange(80, 200);
        writeTime += interval;
    }
    setTimeout(() => {
        inputBoxTransition($inputBox);
        isWriting = false;
        $inputBox.attr('readonly', false);
        $inputBox.css('color', 'white');
    }, writeTime + 500);
}