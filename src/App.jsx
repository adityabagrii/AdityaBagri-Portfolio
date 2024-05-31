import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  
  return (
    <>
      <div className="page">
        <Navbar about={about} setAbout={setAbout} contact={contact} setContact={setContact} home={home} setHome={setHome} />
        <Home home={home} />
        <About about={about} />
        <Contact contact={contact} />
      </div>
    </>
  )
}

export default App
