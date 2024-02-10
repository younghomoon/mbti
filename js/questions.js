import { questions } from "./data.js"

const progressValueEl = document.querySelector(".progress .value")
const numberEl = document.querySelector(".number")
const questionEl = document.querySelector(".question")
const choices1El = document.querySelector(".choice1")
const choices2El = document.querySelector(".choice2")

let currentNumber = 0
let mbti = ""

function renderQuestion() {
  const question = questions[currentNumber]
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choices1El.innerHTML = question.choices[0].text
  choices2El.innerHTML = question.choices[1].text
  // console.log(progressValueEl.style.width)
  progressValueEl.style.width = (currentNumber + 1) * 10 + "%"
}

function nextQuestion(choiceNumber) {
  if (currentNumber === questions.length - 1) {
    showresults()
    return
  }
  const question = questions[currentNumber]
  mbti = mbti + question.choices[choiceNumber].value
  currentNumber += 1
  renderQuestion()
}

function showresults() {
  location.href = "results.html?mbti=" + mbti //쿼리스트링
}

choices1El.addEventListener("click", () => {
  nextQuestion(0)
})
choices2El.addEventListener("click", () => {
  nextQuestion(1)
})

renderQuestion()
