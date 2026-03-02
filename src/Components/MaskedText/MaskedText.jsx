
import { getAllCharacters } from "./maskedUtillity"


const MaskedText = ({text,guessedLetters})=>{

  const maskedString = getAllCharacters(text,guessedLetters)
    return(
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {maskedString.map((letter,index)=>{
            const isSpace = letter === " "
            return(
              <span
                key={index}
                className={isSpace ? "w-3 md:w-5" : "w-10 h-12 md:w-12 md:h-14 rounded-lg border border-white/20 bg-slate-800/70 inline-flex items-center justify-center text-xl md:text-2xl font-bold text-indigo-100"}
              >
                  {letter}              
              </span>
            )
          })}
      </div>

    )
}

export default MaskedText