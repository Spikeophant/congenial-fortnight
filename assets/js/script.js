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
//array of question/answer pairs.
// get real question later.
questions = {
    'Question 1?': ['answer', 'answer2:correct', 'answer3'],
    'Question 2?': ['answer:correct', 'answerq2', 'answerq3'],
    'Question 3?': ['answerq31', 'answerq32', 'answerq33:correct']
};
if (!scores) {
    scores = {};
}

var setNameAndScore = function (name, score) {
    if (name in scores) {
        if (scores[name] <= score) {
            scores[name] = score;
        }
    }
};
setNameAndScore('dd', '10');

var checkandResetGameState = function (questionNum, continueGame) {
    if (continueGame) {
        if (questionNum === 0) {
            startEl.append('<button id="cancel" type="button">Reset</button>');
            $('#cancel').on('click', function () {
                continueGame = true;
                questionEl.empty();
                answersEl.empty();
                buttonEl.text('Play again?');
                $('#cancel').remove();
                questionNum = 0;
                userName = '';
                return true;
            });
        } else {
            questionEl.empty();
            answersEl.empty();
            buttonEl.text('Play again?');
            $('#cancel').remove();
            questionNum = 0;
            userName = '';
            continueGame = true;
            return false;
        }
    }
}

buttonEl.on('click', function () {
    if (checkandResetGameState(questionNum, continueGame)){
        buttonEl.text('Continue');
    }
    // set the question and answer pairs to be used for display.
    var [question, answer] = Object.entries(questions)[questionNum];

    questionEl.text(question);
    // Check game state, change buttons if needed.



    // clear answers each click.
    answersEl.empty();
    // loop through the answers.
    for (var a in answer) {
        // for each answer, append it to the ol, split where I decided to use : as separator in my storage layer.
        answersEl.append('<input type="radio" class="selectedAnswer"  data-index="' + a + '" value="' + answer[a].split(':')[0] + '">' + answer[a].split(':')[0]);
    }
    continueGame = Object.entries(questions)[questionNum + 1] !== undefined;
    questionNum++;
});
