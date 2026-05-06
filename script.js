const questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Capital of Pakistan?",
        options: ["Karachi", "Lahore", "Islamabad", "Quetta"],
        answer: "Islamabad"
    },
    {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter"
    },
    {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "Python"],
    answer: "CSS"
    },
    {
    question: "Which is the national animal of Pakistan?",
    options: ["Lion", "Markhor", "Tiger", "Elephant"],
    answer: "Markhor"
    },
    {
    question: "What does CPU stand for?",
    options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Power Unit"],
    answer: "Central Processing Unit"
    },
    {
    question: "Which tag is used for JavaScript in HTML?",
    options: ["<js>", "<script>", "<javascript>", "<code>"],
    answer: "<script>"
    },
    {
    question: "What is 5 × 6?",
    options: ["11", "30", "56", "25"],
    answer: "30"
    },
    {
    question: "Which country is famous for the Eiffel Tower?",
    options: ["Italy", "France", "Germany", "Spain"],
    answer: "France"
    },
    {
    question: "Which device is used to input data into a computer?",
    options: ["Monitor", "Printer", "Keyboard", "Speaker"],
    answer: "Keyboard"
    }
];

let index = 0;
let score = 0;
let timeLeft = 10;
let timer;

const questionEl = document.getElementById("question");
const options = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next");

// 🆕 Create timer display
const timerEl = document.createElement("h3");
document.querySelector(".quiz-container").prepend(timerEl);

// 🆕 Restart button
const restartBtn = document.createElement("button");
restartBtn.innerText = "Restart Quiz";
restartBtn.style.display = "none";
document.querySelector(".quiz-container").appendChild(restartBtn);

function startTimer() {
    timeLeft = 10;
    timerEl.innerText = "Time Left: " + timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timerEl.innerText = "Time Left: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function loadQuestion() {
    clearInterval(timer);
    startTimer();

    questionEl.innerText = questions[index].question;

    options.forEach((btn, i) => {
        btn.innerText = questions[index].options[i];
    });
}

options.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.innerText === questions[index].answer) {
            score++;
        }
        nextQuestion();
    });
});

function nextQuestion() {
    clearInterval(timer);
    index++;

    if (index < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionEl.innerText = "Your Score: " + score;

    document.querySelector(".options").style.display = "none";
    nextBtn.style.display = "none";
    timerEl.style.display = "none";

    restartBtn.style.display = "block";
}

nextBtn.addEventListener("click", nextQuestion);

// 🔄 Restart functionality
restartBtn.addEventListener("click", () => {
    index = 0;
    score = 0;

    document.querySelector(".options").style.display = "block";
    nextBtn.style.display = "block";
    timerEl.style.display = "block";

    restartBtn.style.display = "none";

    loadQuestion();
});

loadQuestion();