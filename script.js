const circle = document.getElementById("circle");
const scoreDisplay = document.getElementById("score");
const timeLeftDisplay = document.getElementById("time-left");
const startBtn = document.getElementById("start-btn");

let score = 0;
let timeLeft = 10;
let timer;
let isGameRunning = false;

// Function to generate random position for the circle
function randomPosition() {
    const gameContainer = document.querySelector(".game-container");
    const containerWidth = gameContainer.offsetWidth;
    const containerHeight = gameContainer.offsetHeight;

    const x = Math.floor(Math.random() * (containerWidth - circle.offsetWidth));
    const y = Math.floor(Math.random() * (containerHeight - circle.offsetHeight));

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
}

// Start the game
startBtn.addEventListener("click", () => {
    if (!isGameRunning) {
        isGameRunning = true;
        score = 0;
        timeLeft = 10;
        scoreDisplay.textContent = score;
        timeLeftDisplay.textContent = timeLeft;
        startBtn.disabled = true;
        circle.style.display = "block";

        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                timeLeftDisplay.textContent = timeLeft;
                randomPosition();
            } else {
                endGame();
            }
        }, 1000);
    }
});

// Circle click event to increase score
circle.addEventListener("click", () => {
    if (isGameRunning) {
        score++;
        scoreDisplay.textContent = score;
    }
});

// End the game
function endGame() {
    isGameRunning = false;
    circle.style.display = "none";
    startBtn.disabled = false;
    alert(`Game over! Your score: ${score}`);
    clearInterval(timer);
}
