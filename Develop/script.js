var questions = [{
    question: "example question",
    options: ['a','b','c'],
    correctAnswer: 'a'
},
{
    question: "example question2",
    options: ['a','b','c'],
    correctAnswer: 'a'
}]

var question= document.querySelector('#question')
var q1= document.querySelector('#q1')
var q2= document.querySelector('#q2')
var q3= document.querySelector('#q3')

question.innerHTML=questions[0].question
q1.textContent=questions[0].options[0]
q2.textContent=questions[0].options[1]
q3.textContent=questions[0].options[2]
q1.value=questions[0].options[0]
q2.value=questions[0].options[1]
q3.value=questions[0].options[2]

var count = 1
var buttons= document.querySelectorAll('button')
buttons.forEach(function(button){
    button.addEventListener("click", function(event){
        console.log(event.target.value)
        question.innerHTML=questions[count].question
        q1.textContent=questions[count].options[0]
        q2.textContent=questions[count].options[1]
        q3.textContent=questions[count].options[2]
        q1.value=questions[count].options[0]
        q2.value=questions[count].options[1]
        q3.value=questions[count].options[2]
        count+=1
    })
})