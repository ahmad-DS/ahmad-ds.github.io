import './App.css'
import About from './sections/About'
import Contact from './sections/Contact'
import Home from './sections/Home'
import Navbar from "./assets/Navbar"
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {

  return (
    <div className='layout'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
