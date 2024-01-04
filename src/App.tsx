import { useRef, useState } from 'react'
import './App.css'
import AppView from './AppView'

function App() {
  const grifoRef = useRef(null)
  const costoRef = useRef(null)
  const [resultText, setResultText] = useState("")

  const onHandlePress = ()=> {
   
  }

  

  return (
    <AppView resultText={resultText} onCalculatePress={onHandlePress} grifoRef={grifoRef} costoRef={costoRef} />
  )
}

export default App
