import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nexcent from './Pages/Home/Nexcent'
import Navbar from './Pages/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Nexcent/>
    </>
  )
}

export default App
