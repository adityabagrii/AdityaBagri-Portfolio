import React, { useState, useEffect, useRef } from 'react'
import './About.css'
import './utility.css'

const About = ({about}) => {
    const [aditya, setAditya] = useState(100);
    const [webD, setWebD] = useState(100);
    const aboutRef = useRef(null);

    const handleOnMouseDown = () => {
        if (aditya === 100){
            setAditya(0);
        }
        if(aditya===0 && webD === 100){
            setWebD(0);
        }
        if(aditya===0 && webD === 0){
            setAditya(100);
            setWebD(100);
        }
    }

    useEffect(() => {
        const aboutElement = aboutRef.current;
        if (aboutElement) {
            aboutElement.addEventListener('mousedown', handleOnMouseDown);

            return () => {
                aboutElement.removeEventListener('mousedown', handleOnMouseDown);
            };
        }
    }, [aditya, webD]);

    return (
        <div className={about ? "visible main" : "hidden"} ref={aboutRef}>
            <div className="aditya side" style={{width: `${aditya}%`}} >
                <h1>Aditya Bagri</h1>
            </div>
            <div className="webD side" style={{width: `${webD}%`}}>
                <h1>Web Developer</h1>
            </div>
            <div className="ML side">
                <h1>Video Editor</h1>
            </div>
        </div>
    )
}

export default About