const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

// Sample quiz data (replace with your own)
const questions = [
    {
        question: 'What is the capital of France?',
        answers: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars'
    },
    {
         question: 'With which does the power to extend or restrict the jurisdiction of the High Court rest?',
         answers:['With the Parliament ', 'With the Legislative','With the Council of Minister','With the Rajya Sabha'],
         correctAnswer:'With the Parliament '
    }
    // Add as many as question as you want 
    // ...
];

// Build quiz
function buildQuiz() {
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        questionDiv.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            ${buildAnswers(question.answers, index)}
        `;

        quizContainer.appendChild(questionDiv);
    });
}

// Build answers for each question
function buildAnswers(answers, index) {
    return answers.map(answer => `
        <label>
            <input type="radio" name="question${index}" value="${answer}">
            ${answer}
        </label>
    `).join('');
}

// Show results
function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.question');

    let score = 0;

    questions.forEach((question, index) => {
        const userAnswer = (answerContainers[index].querySelector(`input[name="question${index}"]:checked`) || {}).value;

        if (userAnswer === question.correctAnswer) {
            score++;
        }
    });

    alert(`Your score is ${score}/${questions.length}`);
}

// Event listeners
submitButton.addEventListener('click', showResults);

// Build quiz on page load
buildQuiz();
