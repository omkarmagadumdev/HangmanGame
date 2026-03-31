export function getMaskedString(originalWord, guessedLetters = []) {
    const normalizedGuesses = guessedLetters.map((letter) => letter.toUpperCase());
    const guessedLetterSet = new Set(normalizedGuesses);

    return originalWord.toUpperCase().split("").map((char) => {
        if (char === " ") {
            return " ";
        }

        if (guessedLetterSet.has(char)) {
            return char;
        }

        return "_";
    });
}
