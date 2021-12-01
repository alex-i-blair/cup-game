// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const cup1Button = document.getElementById('cup1-button');
const cup3Button = document.getElementById('cup2-button');
const cup2Button = document.getElementById('cup3-button');
const cup1image = document.getElementById('cup1-image');
const cup2image = document.getElementById('cup2-image');
const cup3image = document.getElementById('cup3-image');
const resetGame = document.getElementById('reset-game-score');
const totalEl = document.getElementById('total');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');

// initialize state
const hidingPlaces = [
    'cup1',
    'cup2',
    'cup3'
];

let correctGuesses = 0;
let totalGuesses = 0;

cup1Button.addEventListener('click', () => {
    let randCup = getRandomItem(hidingPlaces);
    gameAction('cup1', randCup);
});

cup2Button.addEventListener('click', () => {
    let randCup = getRandomItem(hidingPlaces);
    gameAction('cup2', randCup);
});

cup3Button.addEventListener('click', () => {
    let randCup = getRandomItem(hidingPlaces);
    gameAction('cup3', randCup);
});

resetGame.addEventListener('click', () => {
    resetGameScore();
});


function resetStyles() {
    cup1image.src = './assets/cup1.png';
    cup2image.src = './assets/cup1.png';
    cup3image.src = './assets/cup1.png';
}

function getRandomItem(arr) {
    const randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

function resetGameScore() {
    totalGuesses = 0;
    correctGuesses = 0;
    winsEl.textContent = 0;
    lossesEl.textContent = 0;
    totalEl.textContent = 0;
}

function gameAction(userGuess, correctCup) {
    resetStyles();
    totalGuesses++;

    let correctGuess = document.getElementById(`${correctCup}-image`);
    correctGuess.src = './assets/cup-reveal.png';

    if (userGuess === correctCup) {
        correctGuesses++;

    }
    totalEl.textContent = totalGuesses;
    winsEl.textContent = correctGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
}