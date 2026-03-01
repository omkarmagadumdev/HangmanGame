import { Link, useLocation } from "react-router-dom"


const PlayGame = ()=>{

const { state } = useLocation()
const selectedWord = state?.wordSelected || "No word selected"


   return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-6 flex items-center justify-center">
         <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl p-6 md:p-8 space-y-6">
            <div className="space-y-2 text-center">
               <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Hangman</p>
               <h1 className="text-3xl md:text-4xl font-bold">Play Game</h1>
               <p className="text-slate-300">Try to guess the hidden word before your chances run out.</p>
            </div>

            <div className="rounded-xl border border-indigo-300/20 bg-slate-900/60 p-5 space-y-2">
               <p className="text-sm text-slate-400 pt-2">Selected word</p>
               <p className="text-xl md:text-2xl font-semibold break-words">{selectedWord}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
               <Link
                  to="/start"
                  className="flex-1 cursor-pointer text-center px-5 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition font-medium"
               >
                  Back
               </Link>
               <Link
                  to="/"
                  className="flex-1 cursor-pointer text-center px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition font-semibold"
               >
                  New Word
               </Link>
            </div>
         </div>
    </div>
   )
}
export default PlayGame 