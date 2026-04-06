
import { Routes, Route } from 'react-router-dom'
import './App.css'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import Home from './pages/Home'
import { useState } from 'react'
import {wordContext} from "./context/wordContext" 


function App() {
    const [wordList, setWordList] = useState([])
    const [word,setWord] = useState('');

  return (
  

  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Start' element={<StartGame />} />
    <Route path='/play' element={<PlayGame />} />
  </Routes>


  )
}

export default App

