import { useContext, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import MaskedText from "../Components/MaskedText/MaskedText"
import LetterButtons from "../Components/LetterButtons/LetterButtons"
import Hangman from "../Components/Hangman/Hangman"
import { wordContext } from "../context/wordContext"


const PlayGame = ()=>{

   const {state}= useLocation()
   const selectedWord = state?.wordSelected || sessionStorage.getItem("wordSelected") || "No word selected"
   const selectedHint = state?.hintSelected || sessionStorage.getItem("hintSelected") || "No hint available"
   const [guessedLetters, setGuessedLetters] = useState([])
   const [step , setStep] = useState(0)
    const { wordList, setWordList } = useContext(wordContext);

   const handleLetterClick = (event) => {
      const letter = event.target.innerText
      if (!letter || guessedLetters.includes(letter)) return

      if(selectedWord.toUpperCase().includes(letter)){
         console.log("correct")
      }
      else{
         console.log("wrong")
         setStep((prev) => prev + 1)
      }
      setGuessedLetters((prev) => [...prev, letter])
   }

   return (
      <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 text-white px-4 py-8 md:p-8">
               <Link to='/'>Home</Link>
         <div className="mx-auto w-full max-w-6xl space-y-6">
            <div className="w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl p-6 md:p-10 space-y-3 text-center">
               <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Hangman</p>
               <h1 className="text-3xl md:text-4xl font-bold">Play Game</h1>
               <p className="text-slate-300 max-w-xl mx-auto">Try to guess the hidden word before your chances run out.</p>
            </div>
               <div>
                  {wordList}
               </div>
            {selectedWord !== "No word selected" && (
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-6">
                     <div className="rounded-2xl border border-amber-300/30 bg-amber-500/10 p-5 text-center space-y-1">
                        <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Hint</p>
                        <p className="text-amber-50 font-medium">{selectedHint}</p>
                     </div>

                     <div className="rounded-2xl border border-indigo-300/20 bg-slate-900/60 p-5 space-y-3 text-center">
                        <p className="text-xs uppercase tracking-wide text-slate-400">Guessed Letters</p>
                        <div className="flex min-h-10 flex-wrap gap-2 justify-center">
                           {guessedLetters.map((letter)=>(
                              <span key={letter} className="px-3 py-1 rounded-lg bg-indigo-500/20 border border-indigo-300/30 text-indigo-100 font-semibold">
                                 {letter}
                              </span>
                           ))}
                        </div>
                     </div>

                     <div className="rounded-2xl border border-white/10 bg-black/20 p-5 md:p-6 space-y-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 text-center">Word Progress</p>
                        <div className="flex items-center justify-center min-h-20">
                           <MaskedText text={selectedWord} guessedLetters={guessedLetters}/>
                        </div>
                     </div>

                     <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6">
                        <LetterButtons text={selectedWord} guessedLetters={guessedLetters} onLettersClick={handleLetterClick} />
                     </div>

                     <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                           to="/start"
                           className="flex-1 text-center px-5 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 transition font-medium"
                        >
                           Back
                        </Link>
                        <Link
                           to="/"
                           className="flex-1 text-center px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold"
                        >
                           New Word
                        </Link>
                     </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 md:p-6 flex items-center justify-center">
                     <Hangman step={step} />
                  </div>
               </div>
            )}
         </div>
      </div>
   )
}
export default PlayGame 