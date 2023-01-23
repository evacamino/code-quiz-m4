var questions = [{
    question: "Which one of these is not a way to manipulate HTML elements with JavaScript?",
    options: ['getElementByFooting()', 'getElementsByTagName()', 'getElememntById()'],
    correctAnswer: 'getElementByFooting()'
},
{
    question: "Which of these will these will allow a function to stop executing?",
    options: ['invoking a function', 'returning a function', 'declaring a function'],
    correctAnswer: 'returning a function'
},
{
    question: "Which of these is not a data type?",
    options: ['Object', 'Boolean', 'Expression'],
    correctAnswer: 'Expression'
}]

var time = 60
var timer
var timerEl = document.getElementById('time-left')
var question = document.querySelector('#question')
var q1 = document.querySelector('#q1')
var q2 = document.querySelector('#q2')
var q3 = document.querySelector('#q3')

question.innerHTML = questions[0].question
q1.textContent = questions[0].options[0]
q2.textContent = questions[0].options[1]
q3.textContent = questions[0].options[2]
q1.value = questions[0].options[0]
q2.value = questions[0].options[1]
q3.value = questions[0].options[2]

var count = 0 
var buttons = document.querySelectorAll('button')
buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        if (event.target.innerHTML === 'Start Button') {
         
           document.querySelector('main').style.display = 'block'
            timer = setInterval(clock,1000)
            timerE1.textContent = time
        } else {
           
            console.log(event.target.value)
            var userAnswer = event.target.value 
           
            var correctAnswer = questions[count].correctAnswer
            console.log(userAnswer, correctAnswer)

  
       
            if (userAnswer === correctAnswer) {
                document.getElementById('after').textContent = "Correct! "

            } else {
                document.getElementById('after').textContent = "Incorrect! "
                time -= 10
                timerEl.textContent = time
            

            }


            count += 1
            question.innerHTML = questions[count].question
            q1.textContent = questions[count].options[0]
            q2.textContent = questions[count].options[1]
            q3.textContent = questions[count].options[2]
            q1.value = questions[count].options[0]
            q2.value = questions[count].options[1]
            q3.value = questions[count].options[2]
        }

    })
})
function clock(){
    time--
    timerEl.textContent = time
}