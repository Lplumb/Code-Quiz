var startbutton = document.getElementById('start-button');
var questionArea = document.getElementById('question-container')
var pTag = document.getElementById('paragraph')
var time = document.getElementById('time-left').innerHTML
const answerButtonsElement = document.getElementById('answer-buttons')
const questionElement = document.getElementById('question')
var score = 0;
var timeLeft = document.getElementById('time-left');
let shuffledQuestions, currentQuestionIndex

//array for all the questions
const questions = [
    {
      question: "What is the visable part of an html file?",
      answers: [
        {text: '<html>', correct: false },
        {text: '<body>', correct: true },
        {text: '<head>', correct: false },
        {text: '<visable>', correct: false },
      ],

      question: "",
      answers: [
        {text: '<hasdf>', correct: false },
        {text: '<bsadf>', correct: true },
        {text: '<hsdf', correct: false },
        {text: '<visafds', correct: false },
      ],
    }


  ]


  startbutton.addEventListener('click', start);
  startbutton.addEventListener('click', countDown);


  function start() {
    console.log('start')
    startbutton.classList.add('hide')
    questionArea.classList.remove('hide')
    pTag.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() = .5)
    currentQuestionIndex = 0
    setNextQuestion()
  }

  function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
  };

  function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)

    })

  }



  function selectAnswer(e) {


  };


  function countDown() {
    setInterval(function() {
        if (time <= 0 ) {
            clearInterval(time = 0)
        }
        timeLeft.innerHTML = time;
        time --;
        console.log(time)
    }, 1000)
}
