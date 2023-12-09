const questions = [
    {
        questions: "Tu as quel age?",
        answers: [
            {text:"13 ans",correct:false},
            {text:"23 ans",correct:true},
            {text:"30 ans",correct:false},
            {text:"15 ans",correct:false}
        ]
    },
    {
        questions: "Quel est ton nom?",
        answers: [
            {text:"Yvodlyn",correct:true},
            {text:"Naruto",correct:false},
            {text:"Goku",correct:false},
            {text:"Gintama",correct:false}
        ]
    },
    {
        questions: "Tu vis ou?",
        answers: [
            {text:"USA",correct:false},
            {text:"France",correct:false},
            {text:"Congo",correct:false},
            {text:"Canada",correct:true}
        ]
    },
    {
        questions: "es-tu marié",
        answers: [
            {text:"Je ne sais pas",correct:false},
            {text:"mes parents oui",correct:false},
            {text:"oui",correct:false},
            {text:"non",correct:true}
        ]
    }
]

const questionElement = document.getElementById("question")
const answerButton = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0
let score = 0

function startQuiz(){
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion()
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + ". "+currentQuestion.questions

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButton.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true"
    if (isCorrect){
        selectedBtn.classList.add("correct")
        score++
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextButton.style.display = "block"
}

function showScore(){
    resetState()
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showScore()
    }
}

nextButton.addEventListener("click",() =>{
    if (currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
})

startQuiz()