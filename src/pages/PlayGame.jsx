import { Link, useLocation } from "react-router-dom"
import MaskedText from "../Components/MaskedText/MaskedText"


const PlayGame = ()=>{

const {state}=    useLocation()
const selectedWord = state?.wordSelected || "No word selected"
const guessedLetters = ["H","E"]


   return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white px-4 py-8 md:p-8 flex items-center justify-center">
         <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl p-6 md:p-10 space-y-8">
            <div className="space-y-3 text-center">
               <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Hangman</p>
               <h1 className="text-3xl md:text-4xl font-bold">Play Game</h1>
               <p className="text-slate-300 max-w-xl mx-auto">Try to guess the hidden word before your chances run out.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="rounded-2xl border border-indigo-300/20 bg-slate-900/60 p-5 space-y-2">   
                  <p className="text-xs uppercase tracking-wide text-slate-400">Selected Word</p>
                  <p className="text-lg md:text-xl font-semibold break-words">{selectedWord}</p>
               </div>

               <div className="rounded-2xl border border-indigo-300/20 bg-slate-900/60 p-5 space-y-3">
                  <p className="text-xs uppercase tracking-wide text-slate-400">Guessed Letters</p>
                  <div className="flex flex-wrap gap-2">
                     {guessedLetters.map((letter)=>(
                        <span key={letter} className="px-3 py-1 rounded-lg bg-indigo-500/20 border border-indigo-300/30 text-indigo-100 font-semibold">
                           {letter}
                        </span>
                     ))}
                  </div>
               </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 md:p-6 space-y-4">
               <p className="text-xs uppercase tracking-[0.2em] text-slate-400 text-center">Word Progress</p>
               <div className="flex items-center justify-center min-h-20">
                  <MaskedText text={selectedWord} guessedLetters={guessedLetters}/>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
               <Link
                  to="/start"
                  className="flex-1 cursor-pointer text-center px-5 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 transition font-medium"
               >
                  Back
               </Link>
               <Link
                  to="/"
                  className="flex-1 cursor-pointer text-center px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold"
               >
                  New Word
               </Link>
            </div>
         </div>
    </div>
   )
}
export default PlayGame 