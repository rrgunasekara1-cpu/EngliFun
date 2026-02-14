const questions = [
    {
        question: "What is your name?",
        options: ["ඔයාගේ නම කුමක්ද?", "මම හොඳයි", "ඔබ කොහෙද සිටින්නේ?", "සුභ දවසක්"],
        answer: 0
    },
    {
        question: "Where are you from?",
        options: ["මම ශ්‍රී ලංකාවේ සිටිනවා", "මම සතුටුයි", "ඔයාගේ නම කුමක්ද?", "මම කුඩා හෙමද"],
        answer: 0
    },
    {
        question: "How are you?",
        options: ["මම හොඳයි", "ඔයා කොහෙද?", "මම කන්න යනවා", "ඔයාගේ නම කුමක්ද?"],
        answer: 0
    }
];

let currentQuestion = 0;

const startBtn = document.getElementById('startBtn');
const questionEl = document.getElementById('question');
const optionsEl = [
    document.getElementById('opt1'),
    document.getElementById('opt2'),
    document.getElementById('opt3'),
    document.getElementById('opt4')
];

startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    loadQuestion();
});

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        questionEl.textContent = "Congratulations! You finished the game!";
        optionsEl.forEach(btn => btn.style.display = 'none');
        return;
    }

    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    for (let i = 0; i < 4; i++) {
        optionsEl[i].textContent = q.options[i];
        optionsEl[i].onclick = () => checkAnswer(i);
    }
}

function checkAnswer(selected) {
    const q = questions[currentQuestion];
    if (selected === q.answer) {
        alert("Correct!");
    } else {
        alert("Try Again!");
    }
    currentQuestion++;
    loadQuestion();
}
