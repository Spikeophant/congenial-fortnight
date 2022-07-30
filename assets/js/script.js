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
    if (continueGame === true) {
        buttonEl.text('Continue');
    } else {
        questionEl.empty();
        answersEl.empty();
        buttonEl.text('Play again?');
        questionNum = 0;
        continueGame = true;
        return;
    }
    var [question, answer] = Object.entries(questions)[questionNum];
    questionEl.text(question);
    answersEl.empty();
    for (var a in answer) {
        console.log(answer[a]);
        answersEl.append('<li>' + answer[a].split(':')[0] + '</li>');
    }
    continueGame = Object.entries(questions)[questionNum + 1] !== undefined;
    questionNum++;

});

