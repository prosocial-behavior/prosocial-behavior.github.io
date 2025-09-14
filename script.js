import data from './data.js';

let index = 0;

$(document).ready(function() {
    function setImage() {
        const screenWidth = $(window).width();
        let img = "";

        if (screenWidth < 720) {
            img = '<img src="images/char_strengths_long.jpg" alt="Character strengths image" style="width: 100%;">';
        } else {
            img = '<img src="images/char_strengths_short.jpg" alt="Character strengths image" style="width: 100%;">';
        }

        $('#init_1-img').html(img);
    }

    setImage();

    $(window).resize(function() {
        setImage();
    });
});

function forward() {
    if (index == data.length - 1) {
        return;
    }

    index++;
    screenUpdate();
}

function back() {
    if (index == 0) {
        return;
    }

    index--;
    screenUpdate();
}

function screenUpdate() {
    hideAllScreens();

    if (index == 0) {
        $('#back-btn').css('display', 'none');
    } else {
        $('#back-btn').css('display', 'inline-block');
    }

    switch (data[index].type) {
        case 'init':
            showNavButtons();
            $('#init').css('display', 'block');
            break;
        case 'init_1':
            showNavButtons();
            $('#init_1').css('display', 'block');
            break;
        case 'info':
            showNavButtons();
            setInfoScreen();
            break;
        case 'question':
            hideNavButtons();
            setQuestionScreen();
            break;
        case 'end':
            hideAllScreens();
            showEndScreen();
            break;
    }
}

function hideAllScreens() {
    $('#init').css('display', 'none');
    $('#init_1').css('display', 'none');
    $('#info').css('display', 'none');
    $('#question').css('display', 'none');
}

function showEndScreen() {
    $('#end').css('display', 'block');
}

function hideNavButtons() {
    $('#navigation-btns').css('display', 'none');
}

function showNavButtons() {
    $('#navigation-btns').css('display', 'block');
}

function setInfoScreen() {
    $('#info').css('display', 'block');
    
    const currentData = data[index];

    let examples = '<ul>';

    for (let i = 0; i < currentData.examples.length; i++) {
        const element = currentData.examples[i];
        examples += `<li>${element}</li>`;
    }

    examples += '</ul>';

    const img = `<img src="${currentData.image}" alt="emotion image" id="info-img">`;

    $('#info-header').text(currentData.title);
    $('#info-text').text(currentData.text);
    $('#info-examples').html(examples);
    $('#info-img-container').html(img);
}

function setQuestionScreen() {
    $('#question').css('display', 'block');

    const currentData = data[index];

    const img = `<img src="${currentData.image}" alt="question image" id="question-img">`;

    $('#answer-one').text(currentData.answerOne);
    $('#answer-two').text(currentData.answerTwo);
    $('#question-img-container').html(img);
}

function answerOne() {
    const currentData = data[index];

    const correct = currentData.correctAnswer;

    if (correct == 'one') {
        forward();
    } else {
        alert('Опитай отново シ');
    }
}

function answerTwo() {
    const currentData = data[index];

    const correct = currentData.correctAnswer;

    if (correct == 'two') {
        forward();
    } else {
        alert('Опитай отново シ');
    }
}

$('#back-btn').on('click', back);
$('#forward-btn').on('click', forward);
$('#answer-one').on('click', answerOne);
$('#answer-two').on('click', answerTwo);