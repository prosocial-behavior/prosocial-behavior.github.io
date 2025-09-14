import data from './data.js';

let index = 0;

function forward() {
    index++;
    screenUpdate();
}

function back() {
    index--;
    screenUpdate();
}

function screenUpdate() {
    hideAllScreens();

    switch (data[index].type) {
        case 'init':
            $('#init').css('display', 'block');
            break;
        case 'init_1':
            $('#init_1').css('display', 'block');
            break;
        case 'info':
            setInfoScreen();
            break;
        case 'question':
            setQuestionScreen();
            break;
    }
}

function hideAllScreens() {
    $('#init').css('display', 'none');
    $('#init_1').css('display', 'none');
    $('#info').css('display', 'none');
    $('#question').css('display', 'none');
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
        alert('Wrong!');
    }
}

function answerTwo() {
    const currentData = data[index];

    const correct = currentData.correctAnswer;

    if (correct == 'two') {
        forward();
    } else {
        alert('Wrong!');
    }
}

$('#back-btn').on('click', back);
$('#forward-btn').on('click', forward);
$('#answer-one').on('click', answerOne);
$('#answer-two').on('click', answerTwo);