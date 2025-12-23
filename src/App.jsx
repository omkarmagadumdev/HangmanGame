
import './App.css'
import Button from './Components/Button/Button'

function App() {

  return (
    <div>

      <Button text="Click me" onclickhandler={()=> console.log("clicked 1 button")}/>
       <Button text="Click me 2" onclickhandler={()=> console.log("clicked 2 button")}/>
       <Button text="Click me 3" onclickhandler={()=> console.log("clicked 3 button")}/>
        
    </div>)
}

export default App
