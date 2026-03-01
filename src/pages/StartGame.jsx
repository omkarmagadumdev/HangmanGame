import TextInputFormContainer from "../Components/TextInputForm/TextInputFormContainer"

const StartGame = ()=>{
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex flex-col items-center justify-center p-6 gap-6">
            <div className="text-center space-y-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl px-8 py-10 w-full max-w-2xl">
                <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Hangman</p>
                <h1 className="text-5xl font-bold text-white">Hangman Game</h1>
                <p className="text-lg text-slate-300">Guess the word before you run out of chances</p>
                <p className="text-sm text-slate-400">Enter a word first, then start guessing letter by letter.</p>
            </div>

            <TextInputFormContainer />
        </div>
    )
}

export default StartGame