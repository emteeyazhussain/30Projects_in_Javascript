const questions = [
    {
        question: "Which of the following is not a JavaScript data type?",
        answers: [
            { text: "String", correct: false },
            { text: "Boolean", correct: false },
            { text: "Float", correct: true },
            { text: "Object", correct: false },
        ]
    },
    {
        question: "What does the acronym 'JSON' stand for?",
        answers: [
            { text: "JavaScript Object Notation", correct: true },
            { text: "JavaScript Oriented Networking", correct: false },
            { text: "Java Standard Object Notation", correct: false },
            { text: "Java Scripted Object Naming", correct: false },
        ]
    },
    {
        question: "In JavaScript, what is the purpose of the 'typeof' operator?",
        answers: [
            { text: "To determine if a variable is defined", correct: false },
            { text: "To check the type of a value or variable", correct: true },
            { text: "To convert a value to a specific type", correct: false },
            { text: "To create a new variable", correct: false },
        ]
    },
    {
        question: "Which array method in JavaScript adds one or more elements to the end of an array and returns the new length of the array?",
        answers: [
            { text: "concat()", correct: false },
            { text: "push()", correct: true },
            { text: "join()", correct: false },
            { text: "pop()", correct: false },
        ]
    },
    {
        question: "What is the purpose of the 'async' keyword in JavaScript?",
        answers: [
            { text: "To define a function that returns a promise", correct: true },
            { text: "To indicate that a function is asynchronous", correct: false },
            { text: "To handle exceptions in asynchronous code", correct: false },
            { text: "To declare an asynchronous variable", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText="Next";
    showQuestion();


}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) 
        {
            button.dataset.correct = answer.correct;
            
        } 
        button.addEventListener('click',selectAnswer);

        
    });

   
}

function  resetState(){
    nextButton.style.display="none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    
}

function selectAnswer(e) {

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    
    if (isCorrect) {

        selectedBtn.classList.add("correct");
        score++;

    } else {
             selectedBtn.classList.add("incorrect"); 
    }

    Array.from(answerButtons.children).forEach(button =>{
        if (button.dataset.correct==="true")
         {

            button.classList.add("correct");
            
        }
        button.disabled = true;

    })

    nextButton.style.display = "block";
    
}
function    showScore(){
    resetState();
    questionElement.innerHTML =  `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function  handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex++ < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click",() =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();

    }else{
        startQuiz();
    }

})


startQuiz();
