// Quiz!
// Initialize vars.
var questionEl = $('#question');
var answersEl = $('#answers');
var buttonEl = $('#startBtn');
var startEl = $('#startOrSubmit');
var scores = localStorage.getItem('scores');
var userName = '';
var questionNum = 0;
var continueGame = true;
var showScore = function () {
    alert(scores);
};
//array of question/anwer pairs.
// get real question later.
questions = {
    'Question 1?': ['answer', 'answer2:correct', 'answer3'],
    'Question 2?': ['answer:correct', 'answerq2', 'answerq3'],
    'Question 3?': ['answerq31', 'answerq32', 'answerq33:correct']
};


buttonEl.on('click', function () {
    // Check game state, change buttons if needed.
    if (questionNum === 0) {
        userName = prompt('Please enter initials.');
        startEl.append('<button id="cancel" type="button">Reset</button>');
        $('#cancel').on('click', function () {
            continueGame = true;
            questionEl.empty();
            answersEl.empty();
            buttonEl.text('Play again?');
            $('#cancel').remove();
            questionNum = 0;
            userName = '';
        });
    }
    if (continueGame === true) {
        buttonEl.text('Continue');
    } else {
        questionEl.empty();
        answersEl.empty();
        buttonEl.text('Play again?');
        $('#cancel').remove();
        questionNum = 0;
        userName = '';
        continueGame = true;
        return;
    }
    // set the question and answer pairs to be used for display.
    var [question, answer] = Object.entries(questions)[questionNum];
    questionEl.text(question);
    // clear answers each click.
    answersEl.empty();
    // loop through the answers.
    for (var a in answer) {
        // for each answer, append it to the ol, split where I decided to use : as separator in my storage layer.
        answersEl.append('<input type="radio"  data-index="' + a + '">' + answer[a].split(':')[0] + '</input>');
    }
    continueGame = Object.entries(questions)[questionNum + 1] !== undefined;
    questionNum++;

});

