const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');

function LetterButtons({ text, guessedLetters,onLettersClick}){
    const originalLettersSet = new Set(text.toUpperCase().split(''));
        const guessedLettersSet = new Set(guessedLetters);

        const buttonStyle = function(letter){
            if(guessedLettersSet.has(letter)){
                return `${originalLettersSet.has(letter) ? 'bg-green-500' : "bg-red-500"}`;
            }
            else{
                return 'bg-blue-500'
            }
        }
        const buttons = ALPHABETS.map(letter=> {
            return(
                <button
                    key={`button-${letter}`}
                    onClick={onLettersClick}
                    disabled={guessedLettersSet.has(letter)}
                    className={ ` cursor-pointer px-4 py-2 m-1 text-white font-semibold rounded-lg transition-colors duration-200 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70 ${buttonStyle(letter)}`}
                >
                        { letter }
                </button>
            )
        } )


        return (
            <div className="flex flex-wrap justify-center gap-2 p-4 ">
                { buttons }
            </div>
        )
}

export default LetterButtons