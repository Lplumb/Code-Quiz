var startbutton = document.getElementById('start-button');
var questionArea = document.getElementById('question-container')
var pTag = document.getElementById('paragraph')
var time = document.getElementById('time-left').innerHTML
const answerButtonsElement = document.getElementById('answer-buttons')
const questionElement = document.getElementById('question')
const nextButton = document.getElementById('next-bttn')
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
      ]},

      {question: "Are java and javascript the same",
      answers: [
        {text: 'Yes', correct: true },
        {text: 'No', correct: false },
        {text: 'maybe so', correct: false },
        {text: 'true', correct: false },
      ]},

 {     question: "What is the common CSS template used?",
      answers: [
        {text: 'Bootstrap', correct: true },
        {text: 'JQuery', correct: false },
        {text: 'Shoestring', correct: false },
        {text: 'css', correct: false },
      ]},

{      question: "What is the common Javascript template used?",
      answers: [
        {text: 'Bootstrap', correct: false },
        {text: 'JQuery', correct: true },
        {text: 'Java', correct: false },
        {text: '', correct: false },
      ]}
    


  ]


  startbutton.addEventListener('click', start);
  startbutton.addEventListener('click', countDown);
  nextButton.addEventListener('click', () => {
      currentQuestionIndex ++
      setNextQuestion()
  })


  function start() {
    console.log('start')
    startbutton.classList.add('hide')
    questionArea.classList.remove('hide')
    pTag.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() + .5)
    currentQuestionIndex = 0
    setNextQuestion()
  }

  function setNextQuestion() {
      resetState()
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
            console.log(score)
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)

    })

  }

  function resetState() {
      nextButton.classList.add('hide')
      while (answerButtonsElement.firstChild) {
          answerButtonsElement.removeChild(answerButtonsElement.firstChild)
      }
  }

  function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
      } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
      }

  }

  //checks if the answers for the buttons are correct or wrong and if it is wrong then it subtracts time
  function setStatusClass(element, correct) {
      clearStatusClass(element)
      if (correct) {
          element.classList.add('correct')
      } else {
          element.classList.add('wrong')
          time = time - 10
      }
  }

  function clearStatusClass(element) {
      element.classList.remove('correct')
      element.classList.remove('wrong')
  }


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
