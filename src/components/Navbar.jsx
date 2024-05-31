import React, {useState} from 'react'
import './Navbar.css'
import './utility.css'

const Navbar = ({about, setAbout, contact, setContact}) => {
    const aboutClick = (e) => {
        setAbout(!about);
        setContact(false);
    }

    const contactClick = (e) => {
        setContact(!contact);
        setAbout(false);
    }

    return (
        <div className="Nav">
            <ul>
                <li><button className={about?'clicked':''} onClick={aboutClick}>About</button></li>
                <li><button className={contact?'clicked':''} onClick={contactClick}>Contact</button></li>
            </ul>
        </div>
    )
}

export default Navbar
