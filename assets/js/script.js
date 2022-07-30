// Quiz!
var questionEl = $('#question');
var answersEl = $('#answers');
var buttonEl = $('#startBtn');
//array of question/anwer pairs.
// get real question later.
questions = {
    'Question 1?': ['answer', 'answer2:correct', 'answer3'],
    'Question 2?': ['answer:correct', 'answerq2', 'answerq3'],
    'Question 3?': ['answerq31', 'answerq32', 'answerq33:correct']
};


//list of all answers, we'll use these randomly to fill in the other questions for fun.
var wrongAnswers = ['otherAnswer', 'otherAnswer333'];
var scores = localStorage.getItem('scores');
var userName = '';
var questionNum = 0;

var showScore = function () {
    alert(scores);
};
var state = 'Continue';
buttonEl.on('click', function () {
    if (state === 'Continue') {
        buttonEl.text('Continue');
    } else {
        questionEl.empty();
        answersEl.empty();
        buttonEl.text('Play again?');
        questionNum = 0;
        state = 'Continue';
        return;
    }
    console.log(state);
    if (state === 'Finished') {
        alert('The game is complete, please refresh to start a new game or view scores.');
        return;
    }
    var [question, answer] = Object.entries(questions)[questionNum];
    console.log(question);
    console.log(answer);
    questionEl.text(question);
    answersEl.empty();
    for (var a in answer) {
        console.log(answer[a]);
        answersEl.append('<li>' + answer[a].split(':')[0] + '</li>');
    }
    if (Object.entries(questions)[questionNum + 1] === undefined) {
        state = 'Finished';
    } else {
        state = 'Continue';
    }
    questionNum++;

});

