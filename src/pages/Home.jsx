import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from "../Components/Button/Button"
import { useWordStore } from '../stores/useWordStore';
const Home = () => {


  const {word , wordList, setWordList,setWord} = useWordStore()

  useEffect(() => {
    let isMounted = true;
    
    const loadWords = async () => {
      try {
        const response = await fetch("http://localhost:30001/words");
        const data = await response.json();
        setWordList(data)
        const randomIndex = Math.floor(Math.random() * data.length);
        const selectedWord = data[randomIndex];
        const nextWord = selectedWord.wordValue || "";
        const nextHint = selectedWord.hint || selectedWord.hintValue || "No hint available";

        if (!isMounted) return;
      
        sessionStorage.setItem("wordSelected", nextWord);
        sessionStorage.setItem("hintSelected", nextHint);
      } catch (error) {
        console.error("Failed to fetch words", error);
        if (!isMounted) return;
        
      }
    };

    loadWords();

    return () => {
      isMounted = false;
    };
  })
  
  
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl p-8 md:p-10 space-y-6">
        <div className="text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Hangman</p>
          <h1 className="text-4xl font-bold text-white">Choose Mode</h1>
          <p className="text-slate-300">Pick a game mode to begin guessing words.</p>
        </div>

        <div className="space-y-4">
          <Link to="/play" className="block">
            <Button text="Single Player Game" />
          </Link>

          <Link to="/Start" className="block">
            <Button text="Multiplayer Game" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home