let words = ['elephant', 'cheetah', 'tiger', 'walrus', 'orangutan', 'beaver', 'buffalo', 'panther', 'peacock', 'alpaca', 'weasel', 'zebra'];
let lives = 6;
let index = Math.round(Math.random() * 12);
let randomWord = words[index];
let guessWord = []

function hangman() {
    // turning each letter into an item in an array 
    let splitRandomWord = []
    for (i = 0; i < randomWord.split('').length; i++) {
        splitRandomWord.push(randomWord.split('')[i]);
    }

    // Creating an array to show the number of letters in the random word 
    for (i = 0; i < splitRandomWord.length; i++) {
        guessWord.push('_');
    }
    console.log(guessWord)

    let letters = '';
    while (lives > 0 && guessWord.includes('_')) {
        let letter = prompt('Enter a letter: ');
        if (splitRandomWord.includes(letter) == true) { // checking if the letter is in the random word 
            console.log("The letter is in the word!");
            letters += letter
            for (i = 0; i < splitRandomWord.length; i++) { // find the index of the letter in the random word and replace the '_' with the letter 
                if (letter == splitRandomWord[i]) {
                    guessWord[i] = letter
                }
            }
            console.log(guessWord);
        } else { // when the letter is not in the random word 
            console.log("The letter is not in the word!");
            letters += letter 
            lives -= 1
            console.log("You have " + lives + " lives left!");
        }
        console.log("Letters entered: " + letters)
    }
    if (lives == 0) {
        console.log("You don't have anymore lives! Game Over!")
    }

    if (guessWord.includes('_') == false) {
        console.log("Congratulations! You have figured out the word: " + randomWord)
    }

}
hangman()