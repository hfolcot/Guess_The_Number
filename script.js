'use strict';


let secretNumber = Math.ceil(Math.random() * 20);
const infoText = document.querySelector('.message');
const scoreText = document.querySelector('.score');
const highScoreText = document.querySelector('.highscore');
let score = 20;
let win = false;

const initGame = function () {
    secretNumber = Math.ceil(Math.random() * 20);
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.guess').value = 0;
    infoText.textContent = "Start guessing...";
    win = false;
    score = 20;
}
const evaluateGuess = function (guess) {
    if (score > 1) {
        if (guess === secretNumber) {
            win = true;
            infoText.textContent = '🎉 You Win!';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = 'darkgreen';
            if (score > highScoreText.textContent) {
                highScoreText.textContent = score;
            }
        }
        if (guess > secretNumber) {
            infoText.textContent = `📈 ${guess} Is Too High!`;
            score--;
        } else if (guess < secretNumber) {
            infoText.textContent = `📉 ${guess} Is Too Low!`;
            score--;
        }
        scoreText.textContent = score;
    } else {
        infoText.textContent = '🔥 You Lose!';
        scoreText.textContent = 0;
    }

}

document.querySelector('.check').addEventListener('click', function () {
    if (!win) {
        const guess = Number(document.querySelector('.guess').value);
        if (!guess) {
            infoText.textContent = '🚫 No Number Entered';
        } else {
            evaluateGuess(guess);
        }
    }


})

document.querySelector('.again').addEventListener('click', function () {
    initGame();
})