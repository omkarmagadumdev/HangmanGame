const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');

function LetterButtons({ text, guessedLetters, onLettersClick, gameOver = false }){
    const originalLettersSet = new Set(text.toUpperCase().split(''));
        const guessedLettersSet = new Set(guessedLetters);

        const buttonStyle = function(letter){
            if(guessedLettersSet.has(letter)){
                return `${originalLettersSet.has(letter) ? 'bg-emerald-500/90 border-emerald-300/70' : "bg-rose-500/90 border-rose-300/70"}`;
            }
            else{
                return 'bg-indigo-600 hover:bg-indigo-500 border-indigo-300/40'
            }
        }
        const buttons = ALPHABETS.map(letter=> {
            return(
                <button
                    key={`button-${letter}`}
                    onClick={onLettersClick}
                    disabled={guessedLettersSet.has(letter) || gameOver}
                        className={ `cursor-pointer min-w-10 h-10 px-3 text-sm text-white font-semibold rounded-lg border transition duration-200 disabled:cursor-not-allowed disabled:opacity-70 ${buttonStyle(letter)}`}
                >
                        { letter }
                </button>
            )
        } )


        return (
            <div className="flex flex-wrap justify-center gap-2 p-1 md:p-2">
                { buttons }
            </div>
        )
}

export default LetterButtons