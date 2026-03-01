export function getAllCharacters(originalWord,guessedLetters){
    guessedLetters = guessedLetters.map(letter => letter.toUpperCase());

    const guessedLettersSet = new Set(guessedLetters);

    return originalWord.toUpperCase().split('').map(char=>{
        if(char === ' '){
            return ' ';
        }

        if(guessedLettersSet.has(char)){
            return char;
        }

        return '_';
    });
}