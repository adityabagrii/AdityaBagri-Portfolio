import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'

function App() {
  const [about, setAbout] = useState(true);
  const [contact, setContact] = useState(false);
  // const [colour, setColour] = useState('#191919');
  // const handleOnMouseDown = () => {
  //     if (colour === '#191919'){
  //       setColour('#ffffff');
  //     }
  //     else{
  //       setColour('#191919');
  //     }
  // }

  // useEffect(() => {
  //     window.addEventListener('mousedown', handleOnMouseDown);

  //     return () => {
  //         window.removeEventListener('mousedown', handleOnMouseDown);
  //     };
  // });
  return (
    <>
      <div className="page">
        <Navbar about={about} setAbout={setAbout} contact={contact} setContact={setContact} />
        <About about={about} />
      </div>
    </>
  )
}

export default App
