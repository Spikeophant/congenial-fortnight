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
var score = 0;
console.log(scores);
buttonEl.on('click', function () {
    // Check game state, change buttons if needed.
    if (questionNum === 0) {
        userName = prompt('Please enter initials.');
        if (!scores.hasOwnProperty(userName)) {
            scores = Object.assign({userName: 0});
            console.log('Current Scores: ')
            console.log(scores)
        }
        startEl.append('<button id="cancel" type="button">Reset</button>');
        $('#cancel').on('click', function () {
            continueGame = true;
            questionEl.empty();
            answersEl.empty();
            buttonEl.text('Play again?');
            $('#cancel').remove();
            questionNum = 0;
            userName = '';
            score = 0
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
        if (score > scores[userName]) {
            scores[userName] = score;
            score = 0;
            localStorage.setItem('scores', scores)
        }
        return;
    }
    // set the question and answer pairs to be used for display.
    console.log('selected answer checked')
    console.log($('.selectedAnswer:checked').data('index'))
    var [question, answer] = Object.entries(questions)[questionNum];
    if (questionNum > 0) {
        if (answer[$('.selectedAnswer:checked').data('index')].split(1) === 'correct') {
            score++;
            console.log('Score')
            console.log(score);
        }
    }
    questionEl.text(question);
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
