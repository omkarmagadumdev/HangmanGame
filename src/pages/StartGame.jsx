import { Link } from "react-router-dom"

const StartGame = ()=>{
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center p-6 gap-6">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold text-white">Hangman Game</h1>
                <p className="text-lg text-slate-300">Guess the word before you run out of chances</p>
            </div>
            <Link to="/play" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 ease-in-out transform hover:scale-105 shadow-lg">
                Start Game
            </Link>
        </div>
    )
}

export default StartGame