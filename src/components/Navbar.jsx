import React, {useState} from 'react'
import './Navbar.css'
import './utility.css'

const Navbar = ({about, setAbout, contact, setContact, home, setHome}) => {
    
    const homeClick = (e) => {
        setHome(true);
        setAbout(false);
        setContact(false);
    }

    const aboutClick = (e) => {
        setAbout(!about);
        setContact(false);
        setHome(false);
    }

    const contactClick = (e) => {
        setContact(!contact);
        setAbout(false);
        setHome(false);
    }

    return (
        <div className="Nav">
            <ul>
                <li><button className={home?'clicked':''} onClick={homeClick}>Home</button></li>
                <li><button className={about?'clicked':''} onClick={aboutClick}>About</button></li>
                <li><button className={contact?'clicked':''} onClick={contactClick}>Contact</button></li>
            </ul>
        </div>
    )
}

export default Navbar
