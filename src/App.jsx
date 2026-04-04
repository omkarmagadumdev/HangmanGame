
import { Routes, Route } from 'react-router-dom'
import './App.css'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import Home from './pages/Home'
import { useState } from 'react'
import {wordContext} from "./context/wordContext" 


function App() {
    const [wordList, setWordList] = useState([])
  return (
    <wordContext.Provider value={{ wordList, setWordList }}>

  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Start' element={<StartGame />} />
    <Route path='/play' element={<PlayGame />} />
  </Routes>

    </wordContext.Provider>
  )
}

export default App

