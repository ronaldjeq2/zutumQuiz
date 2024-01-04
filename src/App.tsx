import { useRef } from 'react'
import './App.css'
import AppView from './AppView'

function App() {
  const grifoRef = useRef(null)
  const costoRef = useRef(null)

  return (
    <AppView grifoRef={grifoRef} costoRef={costoRef} />
  )
}

export default App
