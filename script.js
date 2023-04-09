let questions = [
    {
    "question": "Wer hat HTML erfunden",
     "answer_1": "Robbie Williams",
     "answer_2": "Lady Gaga",
     "answer_3": "Tim Berners-Lee",
     "answer_4": "Justin Bieber",
    "right_answer": 3
    },
    {
        "question": "Was bedeutet das HTML Tag &lt;aßgt;?",
         "answer_1": "Text Fett",
         "answer_2": "Container",
         "answer_3": "Ein Link",
         "answer_4": "Kursiv",
        "right_answer": 3
        },
        {
            "question": "Wie bindet man eine Website in eine Website ein",
             "answer_1": "lol",
             "answer_2": "Lady Gaga",
             "answer_3": "Tim Berners-Lee",
             "answer_4": "Justin Bieber",
            "right_answer": 4
            },
            {
                "question": "Wie viele Äpfel hat ein Baum mit 4 Äpfeln",
                 "answer_1": "1",
                 "answer_2": "2",
                 "answer_3": "3",
                 "answer_4": "4",
                "right_answer": 4
                },
        
                {
                    "question": "Wie bindet man eine Website in eine Website ein",
                     "answer_1": "lol",
                     "answer_2": "Lady Gaga",
                     "answer_3": "Tim Berners-Lee",
                     "answer_4": "Justin Bieber",
                    "right_answer": 1
                    },
                
        
];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/wrong.mp3');

function init(){
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();

}

function showQuestion() {
    if(gameIsOver()) {
       showEndScreen();
    } else { 
        updateProgressBar();
        updateToNextQuestion();  
    }
}

function gameIsOver(){
    return currentQuestion >= questions.length;
}

function showEndScreen(){
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
    document.getElementById('header-image').src = 'img/end.png';
}

function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection){
    let question = questions[currentQuestion];
    console.log('Selected answer is ', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is ', selectedQuestionNumber);
    console.log('Current question is ', question['right_answer']);

    let idofRightAnswer = `answer_${question['right_answer']}`;

    if(rightAnswertSelected(selectedQuestionNumber)){ 
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play(); //Sound abspielen richtig
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idofRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play(); //Sound abspielen falsch
    }
    document.getElementById('next-button').disabled = false;
}

function rightAnswertSelected(selectedQuestionNumber) {// Richte Frage beantwortet
    return selectedQuestionNumber == question['right_answer'];
}

function nextQuestion(){
    currentQuestion++;  // z.B. von 0 auf 1
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();

}

function resetAnswerButtons(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {

    document.getElementById('header-image').src = 'img/bg b.png';
    document.getElementById('questionBody').style = ''; // Question Body wieder anzeigen
    document.getElementById('endScreen').style = 'display: none'; // Endscreen ausblenden

    rightQuestions = 0;
    currentQuestion = 0;
    init();

}