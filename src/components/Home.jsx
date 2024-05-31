import React, { useState, useEffect } from 'react'
import './Home.css'
import './utility.css'

const Home = ({home}) => {
    const [widths, setWidths] = useState([100, 100, 100, 100]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        let interval;
        if (!isHovering) {
            interval = setInterval(() => {
                setWidths(prevWidths => {
                    const newWidths = [...prevWidths];
                    newWidths[currentIndex] = 0;
                    if (newWidths.every(width => width === 0)) {
                        return [100, 100, 100, 100];
                    }
                    return newWidths;
                });
                setCurrentIndex(prevIndex => (prevIndex + 1) % widths.length);
            }, 1500);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isHovering, currentIndex]);

    return (
        <div className={home ? "visible main-Home" : "hidden"}>
            <div className="container">
                <div className="aditya side" style={{width: `${widths[0]}%`}} >
                    <h1 className='title' style={{opacity: `${widths[0]}%`}} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>Aditya Bagri</h1>
                </div>
                <div className="webD side" style={{width: `${widths[1]}%`}}>
                    <h1 className='title' style={{opacity: `${widths[1]}%`}} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>Web Developer</h1>
                </div>
                <div className="softD side" style={{width: `${widths[2]}%`}}>
                    <h1 className='title' style={{opacity: `${widths[2]}%`}} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>Software Developer</h1>
                </div>
                <div className="Ve side" style={{width: `${widths[3]}%`}}>
                    <h1 className='title' style={{opacity: `${widths[3]}%`}} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>Video Editor</h1>
                </div>
            </div>
        </div>
    )
}

export default Home