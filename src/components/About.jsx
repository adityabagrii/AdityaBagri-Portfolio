import React, { useEffect } from 'react';
import './About.css'
import './Right.css'

const About = ({about}) => {

  useEffect(() => {
    function handleScroll() {
      const right = document.querySelector('.right');
      const scrollHeight = right.scrollHeight;
      const scrollTop = right.scrollTop;
      const clientHeight = right.clientHeight;

      const scrolledPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
      document.querySelector('.preview').animate({
        transform: `translateY(${-1*scrolledPercent*0.65}%)`
      }, {duration:1200, fill: 'forwards'});
      document.querySelector('.active').animate({
        transform: `translate(-50%, ${scrolledPercent*2.20}%)`
      }, {duration:1200, fill: 'forwards'});
    }

    const right = document.querySelector('.right');
    right.addEventListener('scroll', handleScroll);

    return () => {
      right.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className={about ? 'abtContainer':'hidden abtContainer'}>
      <div className="miniMap">
        <div className="preview">
        <p className="headingMini">About Me</p>
        <span className='contentMini'>
        I'm a third-year B.Tech student at IIIT Delhi, majoring in Computer Science with a specialisation in Artificial Intelligence. With a passion for AI and development, I've dedicated my studies and projects to exploring the frontiers of this exciting field. I'm driven by a relentless curiosity and a commitment.
        </span>
        <br />
        <br />
        <p className='headingMini'>Education</p>
        <div className='ListMini'>
          <span className='contentMini'>Indraprastha Institute of Information Technology, Delhi</span>
          <br />
          <span className="subTextMini">B.Tech (CSAI)</span>
          <br></br>
          <span className="subTextMini">2022-Present</span>
          <br></br>
          <span className="subTextMini">CGPA - 7.42/10</span>
          <br></br>
          <span className="contentMini">Adarsh Jain Dharmik Shiksha Sadan, New Delhi</span>
          <br></br>
          <span className="subTextMini">CBSE Class XII</span>
          <br></br>
          <span className="subTextMini">2021-2022</span>
          <br></br>
          <span className="subTextMini">93.4%</span>
          <br />
          <span className="contentMini">St. Xavier's Sr. Sec. School, Sirsa</span>
          <br></br>
          <span className="subTextMini">CBSE Class X</span>
          <br></br>
          <span className="subTextMini">2019-2020</span>
          <br></br>
          <span className="subTextMini">93.4%</span>
        </div>
        <br />
        <p className='headingMini'>Skills</p>
        <div className="ListMini">
          <span className="contentMini">Data Structures and Algorithms</span>
          <br />
          <span className="contentMini">Web Development</span>
          <br />
          <span className="contentMini">Machine Learning</span>
          <br />
          <span className="contentMini">UI/UX Design</span>
          <br />
          <span className="contentMini">Visual Media Production</span>
          <br />
          <span className="contentMini">Outreach</span>
        </div>
        <br />
        <p className='headingMini'>Projects</p>
        <span className='contentMini'>I've worked on a variety of projects, ranging from web development to machine learning. Some of my most notable projects include:</span>
        <br />
        <div className="ListMini">
          <span className='contentMini'>Sales Prediction Model</span>
          <br></br>
          <span className="subTextMini">We created an advanced sales prediction model using historical data to forecast item sales, aiming to boost an e-commerce store's profitability. This innovative tool leverages machine learning to optimize inventory and maximize revenue.</span>
          <br></br>
          <span className="subTextMini">Project Duration - January, 2024 - May, 2024</span>
          <br></br>
          <span className="subTextMini">Team Size - 2</span>
          <br />
          <span className="subTextMini">
            GitHub
          </span>
          <br />
          <span className='contentMini'>Virtual Memory Management System (Operating System)</span>
          <br></br>
          <span className="subTextMini">Developed a custom Memory Management System (MeMS) in C, utilizing mmap and munmap for efficient memory allocation and deallocation.</span>
          <br></br>
          <span className="subTextMini">Project Duration - November, 2023 - November, 2023</span>
          <br></br>
          <span className="subTextMini">Team Size - 2</span>
          <br />
          <span className="subTextMini">
            GitHub
          </span>
          <br />
          <span className='contentMini'>Portfolio Website</span>
          <br></br>
          <span className="subTextMini">I designed and developed a sleek, minimalist portfolio website using ReactJS, HTML, and CSS. The website is dynamic, fully responsive, and provides an optimal viewing experience on all devices.</span>
          <br></br>
          <span className="subTextMini">Project Duration - June, 2024 - June, 2024</span>
          <br></br>
          <span className="subTextMini">Website</span>
          <br />
          <span className="subTextMini">
            GitHub
          </span>
          <br />
          <span className='contentMini'>Client Side Web Player - Apple Music Clone</span>
          <br></br>
          <span className="subTextMini">Implemented an online web music player with a responsive client-side front-end that dynamically loads songs and their covers.</span>
          <br></br>
          <span className="subTextMini">Project Duration - May, 2024 - May, 2024</span>
          <br></br>
          <span className="subTextMini">
            Player
          </span>
          <br />
          <span className="subTextMini">
            GitHub
          </span>
          <br />
          <span className='contentMini'>Online E-Commerce Store - Thriftster</span>
          <br></br>
          <span className="subTextMini">Developed a CLI backend for an online thrift store using SQL and Python, enabling users to buy and sell products. Additionally, implemented a robust transaction system.</span>
          <br></br>
          <span className="subTextMini">Project Duration - January, 2024 - May, 2024</span>
          <br></br>
          <span className="subTextMini">Team Size - 2</span>
          <br />
          <span className="subTextMini">
            GitHub
          </span>
          <br />
          <span className='contentMini'>Stick Hero</span>
          <br></br>
          <span className="subTextMini">Created an engaging Stick Hero game using JavaFX, Scene Builder, and Java OOP principles. The game features a dynamic background, seamless multithreading, and rigorous JUnit tests to ensure a smooth and captivating player experience.</span>
          <br></br>
          <span className="subTextMini">Project Duration - November, 2023 - November, 2023</span>
          <br></br>
          <span className="subTextMini">Team Size - 2</span>
          <br />
          <span className="subTextMini">
            GitHub
          </span>
          <br />
          <span className='contentMini'>Assembler and Simulator for a given ISA</span>
          <br></br>
          <span className="subTextMini">Built a virtual assembler and simulator for a given ISA using Python programming language with a group of 4 people using GitHub repositories to keep track of updates by all group members</span>
          <br></br>
          <span className="subTextMini">Project Duration - April, 2023 - June, 2023</span>
          <br></br>
          <span className="subTextMini">Team Size - 4</span>
        </div>
        <br />
        <p className='headingMini'>Positions of Responsibilities</p>
        <div className="ListMini">
          <span className="contentMini">Odyssey'24 PR Team Lead</span>
          <br />
          <span className="subTextMini">September, 2023 - January, 2024</span>
          <br />
          <span className="contentMini">Cultural Council'24 Member</span>
          <br />
          <span className="subTextMini">October, 2023 - May, 2024</span>
          <br />
          <span className="contentMini">TedxIIITD'24 PR Team Member</span>
          <br />
          <span className="subTextMini">Febuary, 2023 - May, 2024</span>
          <br />
          <span className="contentMini">E-Summit Event Head</span>
          <br />
          <span className="subTextMini">March, 2023 - April, 2023</span>
          <br />
          <span className="contentMini">NSS Events Team Member</span>
          <br />
          <span className="subTextMini">October, 2023 - May, 2024</span>
          <br />
          <span className="contentMini">E-Summit Design Team</span>
          <br />
          <span className="subTextMini">March, 2023 - April, 2023</span>
          <br />
          <span className="contentMini">Esya'23 Operations OT</span>
          <br />
          <span className="subTextMini">August, 2023 - September, 2024</span>
        </div>
        <br />
        <p className='headingMini'>Interest and Hobbies</p>
        <div className="ListMini">
          <span className="contentMini">Problem-Solving</span>
            <br />
          <span className="contentMini">Development</span>
            <br />
          <span className="contentMini">Designing & Video Editing</span>
        </div>
        </div>
        <div className="active"></div>
      </div>
      
      
      <div className="right">
        <p className="heading">About Me</p>
        <span className='content'>
        I'm a third-year B.Tech student at IIIT Delhi, majoring in Computer Science with a specialisation in Artificial Intelligence. With a passion for AI and development, I've dedicated my studies and projects to exploring the frontiers of this exciting field. I'm driven by a relentless curiosity and a commitment.
        </span>
        <br />
        <br />
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
        <br /><br />
        <p className='heading'>Projects</p>
        <br />
        <span className='content'>I've worked on a variety of projects, ranging from web development to machine learning. Some of my most notable projects include:</span>
        <br /><br />
        <div className="List">
          <span className='content'>Sales Prediction Model</span>
          <br></br>
          <span className="subText">We created an advanced sales prediction model using historical data to forecast item sales, aiming to boost an e-commerce store's profitability. This innovative tool leverages machine learning to optimize inventory and maximize revenue.</span>
          <br></br>
          <span className="subText">Project Duration - January, 2024 - May, 2024</span>
          <br></br>
          <span className="subText">Team Size - 2</span>
          <br />
          <span className="subText">
            <a href="https://github.com/adityabagrii/Sales-Prediction-Model" className='Links'>GitHub</a>
          </span>
          <br />
          <span className="subText">
            <a href="https://drive.google.com/file/d/1WX0sOUhD-0okFLCDwErlRQeOUAvQHSFL/view?usp=drive_link" className='Links'>Report</a>
          </span>
          <br /><br />
          <span className='content'>Virtual Memory Management System (Operating System)</span>
          <br></br>
          <span className="subText">Developed a custom Memory Management System (MeMS) in C, utilizing mmap and munmap for efficient memory allocation and deallocation.</span>
          <br></br>
          <span className="subText">Project Duration - November, 2023 - November, 2023</span>
          <br></br>
          <span className="subText">Team Size - 2</span>
          <br />
          <span className="subText">
            <a href="https://github.com/adityabagrii/OS-MeMS-Memory-Management-System" className='Links'>GitHub</a>
          </span>
          <br /><br />
          <span className='content'>Portfolio Website</span>
          <br></br>
          <span className="subText">I designed and developed a sleek, minimalist portfolio website using ReactJS, HTML, and CSS. The website is dynamic, fully responsive, and provides an optimal viewing experience on all devices.</span>
          <br></br>
          <span className="subText">Project Duration - June, 2024 - June, 2024</span>
          <br></br>
          <span className="subText">
            <a href="https://adityabagrii.github.io/AdityaBagri-Portfolio/" className='Links'>Website</a>
          </span>
          <br />
          <span className="subText">
            <a href="https://github.com/adityabagrii/AdityaBagri-Portfolio" className='Links'>GitHub</a>
          </span>
          <br /><br />
          <span className='content'>Client Side Web Player - Apple Music Clone</span>
          <br></br>
          <span className="subText">Implemented an online web music player with a responsive client-side front-end that dynamically loads songs and their covers.</span>
          <br></br>
          <span className="subText">Project Duration - May, 2024 - May, 2024</span>
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
          <span className="subText">Project Duration - January, 2024 - May, 2024</span>
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
          <span className="subText">Project Duration - November, 2023 - November, 2023</span>
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
          <span className="subText">Project Duration - April, 2023 - June, 2023</span>
          <br></br>
          <span className="subText">Team Size - 4</span>
        </div>
        <br /><br />
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
        <br /><br />
        <p className='heading'>Interest and Hobbies</p>
        <div className="List">
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
