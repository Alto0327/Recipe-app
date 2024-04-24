import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Header from "./Layout/Header"
import HomePage from './Pages/HomePage/HomePage'
import Footer from './Layout/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="gradient-background">
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  )
}

export default App
