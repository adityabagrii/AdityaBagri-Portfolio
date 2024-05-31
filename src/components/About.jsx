import React from 'react'
import './About.css'

const About = ({about}) => {
  console.log(about)
  return (
    <div className={about ? 'abtContainer':'hidden'}>
      <div className="left"></div>
      <div className="right">
        <p className="heading">About Me</p>
        <span className='content'>
        I'm a third-year B.Tech student at IIIT Delhi, majoring in Computer Science with a focus on Artificial Intelligence. With a passion for AI and development, I've dedicated my studies and projects to exploring the frontiers of this exciting field. I'm driven by a relentless curiosity and a commitment.
        </span>
        <br />
        <br /><br />
        <p className='heading'>Education</p>
        <div className='List'>
          <span className='content'>Indraprastha Institute of Information Technology, Delhi</span>
          <br></br>
          <span className="subText">B.Tech (CSAI)</span>
          <br></br>
          <span className="subText">2022-Present</span>
          <br></br>
          <span className="subText">CGPA - 7.42/10</span>
          <br></br>
          <span className="content">Adarsh Jain Dharmik Shiksha Sadan, New Delhi</span>
          <br></br>
          <span className="subText">CBSE Class XII</span>
          <br></br>
          <span className="subText">2021-2022</span>
          <br></br>
          <span className="subText">93.4%</span>
          <br />
          <span className="content">St. Xavier's Sr. Sec. School, Sirsa</span>
          <br></br>
          <span className="subText">CBSE Class X</span>
          <br></br>
          <span className="subText">2019-2020</span>
          <br></br>
          <span className="subText">93.4%</span>
        </div>
        <br />
        <br />
        <br />
        <p className='heading'>Skills</p>
        <div className="List">
          <span className="content">Data Structures and Algorithms</span>
          <br />
          <span className="content">Web Development</span>
          <br />
          <span className="content">Machine Learning</span>
          <br />
          <span className="content">UI/UX Design</span>
          <br />
          <span className="content">Visual Media Production</span>
          <br />
          <span className="content">Outreach</span>
        </div>
        <br /><br /><br />
        <p className='heading'>Projects</p>
        <br />
        <span className='content'>I've worked on a variety of projects, ranging from web development to machine learning. Some of my most notable projects include:</span>
        <br /><br />
        <div className="List">
          <span className='content'>Sales Prediction Model</span>
          <br></br>
          <span className="subText">We created an advanced sales prediction model using historical data to forecast item sales, aiming to boost an e-commerce store's profitability. This innovative tool leverages machine learning to optimize inventory and maximize revenue.</span>
          <br></br>
          <span className="subText">Project Duration - Jan, 24 - May, 24</span>
          <br></br>
          <span className="subText">Team Size - 2</span>
          <br />
          <span className="subText">
            <a href="https://github.com/adityabagrii/Sales-Prediction-Model" className='Links'>GitHub</a>
          </span>
          <br /><br />
          <span className='content'>Virtual Memory Management System (Operating System)</span>
          <br></br>
          <span className="subText">Developed a custom Memory Management System (MeMS) in C, utilizing mmap and munmap for efficient memory allocation and deallocation.</span>
          <br></br>
          <span className="subText">Project Duration - Nov, 23 - Nov, 23</span>
          <br></br>
          <span className="subText">Team Size - 2</span>
          <br />
          <span className="subText">
            <a href="https://github.com/adityabagrii/OS-MeMS-Memory-Management-System" className='Links'>GitHub</a>
          </span>
          <br /><br />
          <span className='content'>Client Side Web Player - Apple Music Clone</span>
          <br></br>
          <span className="subText">Implemented an online web music player with a responsive client-side front-end that dynamically loads songs and their covers.</span>
          <br></br>
          <span className="subText">Project Duration - May, 24 - May, 24</span>
          <br></br>
          <span className="subText">
            <a href="http://amcaditya.freewebhostmost.com" className='Links'>Player</a>
          </span>
          <br />
          <span className="subText">
            <a href="https://github.com/adityabagrii/Apple-Music-Clone" className='Links'>GitHub</a>
          </span>
          <br /><br />
          <span className='content'>Online E-Commerce Store - Thriftster</span>
          <br></br>
          <span className="subText">Developed a CLI backend for an online thrift store using SQL and Python, enabling users to buy and sell products. Additionally, implemented a robust transaction system.</span>
          <br></br>
          <span className="subText">Project Duration - Jan, 24 - May, 24</span>
          <br></br>
          <span className="subText">Team Size - 2</span>
          <br />
          <span className="subText">
            <a href="https://github.com/adityabagrii/Thriftsters" className='Links'>GitHub</a>
          </span>
          <br /><br />
          <span className='content'>Stick Hero</span>
          <br></br>
          <span className="subText">Created an engaging Stick Hero game using JavaFX, Scene Builder, and Java OOP principles. The game features a dynamic background, seamless multithreading, and rigorous JUnit tests to ensure a smooth and captivating player experience.</span>
          <br></br>
          <span className="subText">Project Duration - Nov, 23 - Nov, 23</span>
          <br></br>
          <span className="subText">Team Size - 2</span>
          <br />
          <span className="subText">
            <a href="https://github.com/adityabagrii/StickHero-" className='Links'>GitHub</a>
          </span>
          <br /><br />
          <span className='content'>Assembler and Simulator for a given ISA</span>
          <br></br>
          <span className="subText">Built a virtual assembler and simulator for a given ISA using Python programming language with a group of 4 people using GitHub repositories to keep track of updates by all group members</span>
          <br></br>
          <span className="subText">Project Duration - Apr, 23 - Jun, 23</span>
          <br></br>
          <span className="subText">Team Size - 4</span>
        </div>
        <p className='heading'>Positions of Responsibilities</p>
        <div className="List">
          <span className="content">Odyssey'24 PR Team Lead</span>
          <br />
          <span className="subText">September, 2023 - January, 2024</span>
          <br />
          <span className="content">Cultural Council'24 Member</span>
          <br />
          <span className="subText">October, 2023 - May, 2024</span>
          <br />
          <span className="content">TedxIIITD'24 PR Team Member</span>
          <br />
          <span className="subText">Febuary, 2023 - May, 2024</span>
          <br />
          <span className="content">E-Summit Event Head</span>
          <br />
          <span className="subText">March, 2023 - April, 2023</span>
          <br />
          <span className="content">NSS Events Team Member</span>
          <br />
          <span className="subText">October, 2023 - May, 2024</span>
          <br />
          <span className="content">E-Summit Design Team</span>
          <br />
          <span className="subText">March, 2023 - April, 2023</span>
          <br />
          <span className="content">Esya'23 Operations OT</span>
          <br />
          <span className="subText">August, 2023 - September, 2024</span>
        </div>
        <p className='heading'>Interest and Hobbies</p>
        <div className="List">
          <br />
          <span className="content">Problem-Solving</span>
          <br />
          <span className="content">Development</span>
          <br />
          <span className="content">Designing & Video Editing</span>
        </div>
      </div>
    </div>
  )
}

export default About
