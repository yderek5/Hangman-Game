const words = ['abductions', 'abridgment', 'admixtures', 'afterglows', 'aftershock', 'algorithms', 'amplitudes', 'bankruptcy', 'bolstering', 'boasting', 'champion', 'clustering', 'clampdowns', 'compatible'];
const randNum = Math.floor(Math.random() * words.length);
const chosenWord = words[randNum].split('');
let guessedLetters = []
let underScore = [];
let numberOfGuessesRemaining = 15;

// Dom manipulation
const docUnderScore = document.getElementsByClassName('underscore');
const docGuessedLetters = document.getElementsByClassName('guessedLetters');

const guessCounter = () => {
    var guessCount = document.getElementById('numOfGuesses');
    guessCount.innerHTML = numberOfGuessesRemaining;
}

const blankWord = () => {
    chosenWord.forEach(() => {
        underScore.push('_');
    });
    docUnderScore[0].innerHTML = underScore.join(' ');
    return underScore;
}

// Get users guess
document.addEventListener('keypress', (event) => {
    const keyword = String.fromCharCode(event.keyCode);
    if(!guessedLetters.includes(keyword) ){
        guessedLetters.push(keyword);
    } else {
        alert("You've already guessed this!");
    }
    // If user runs out of guesses
    if (numberOfGuessesRemaining === 0) {
        alert('Game Over');
    }
    // Checks to see if user word matches guesses
    if (underScore.join('') === chosenWord.join('')) {
        alert('You Win!');
    }
    // if Users guess is right
    if (chosenWord.includes(keyword)) {
        //replace underscore and right guessed with the correct letter
        underScore[chosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(' ');
        docGuessedLetters[0].innerHTML = guessedLetters.join(' ');
    } else {
        docGuessedLetters[0].innerHTML = guessedLetters.join(' ');
        // This makes the counter go down when the letter guessed is incorrect
        document.getElementById('numOfGuesses').innerHTML = numberOfGuessesRemaining -= 1;
    }
});

guessCounter();
blankWord();