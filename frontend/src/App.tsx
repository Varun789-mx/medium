import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbarlogin from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbarlogin/>
    </>
  )
}

export default App
