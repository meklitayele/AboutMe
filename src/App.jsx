import { useState } from 'react'
import About from './components/About'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Navbar/>
          <About />
          <Projects />
          <Skills />
          <Contact />
    </>
  )
}

export default App
