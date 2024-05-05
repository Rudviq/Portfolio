import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import './App.css';

function App() {

  const [text] = useTypewriter({
    words:['DEVELOPER','ENGINEER'],
    loop:{}
  });


  return (
    <>
    <div className="app" id="app" >
    <header>
        <div className="left">
          <div className="logo">
            <img src="./RBLogo.png" alt="RB" />
          </div>
        </div>
        <div className="middle">
          <ul>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#experience">EXPERIENCE</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
        <div className="right">
          <div className="trial">
            <button>
              <h4>Download CV</h4>
              {/* <img src="download.png" alt="Download" /> */}
              </button>
          </div>
        </div>
    </header>
    <section id="header-content">
        <div className="header-content-container">
        <div className="center">
        <div className="image-name-container">
          <div className='demo-container'>
          </div>
          <div className="image-container">
          {/* <div className="light-source"></div> */}
            <img src='./IMG_0365.png' alt="Profile" className="profile-image"/>
          </div>
          <div className="name">
            <h5 style={{fontSize:'61px'}}>RUDVIQ BHAVSAR</h5>
            <h5> 
              <span> SOFTWARE {text}</span>
              <span className="custom-cursor"></span>
              <Cursor style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '5px', width: '8px', height: '40px', backgroundColor: 'green' }}/>
            </h5>
            {/* <Cursor style={{color: 'red'}}/> */}
            <div id="socials-container">
              <img src="./linkedin.svg" alt="My LinkedIn profile" className="icon" onClick={() => window.open('https://www.linkedin.com/in/rudviqbhavsar/', '_blank')}/>
              <img src="./github.svg" alt="My Github profile" className="icon" onClick={() => window.open('https://github.com/Rudviq', '_blank')}/>
            </div>
          </div>
          </div>
          </div>
        </div>
    </section>
    <div className="or-spacer">
      <div className="mask"></div>
      {/* <span><i>or</i></span> */}
    </div>
    <section id="about">
      <h2>About Me</h2>
      {/* <p>Add your about content here.</p>
       */}
      <div className="about-content-box">
        <p>Add your about content here.</p>
      </div>
    </section>
    <div className="or-spacer">
      <div className="mask"></div>
    </div>
    <section id="skills">
      <h2>My Skills</h2>
      <div className="about-content-box">
        <p>Add your about content here.</p>
      </div>
    </section>
    <div className="or-spacer">
      <div className="mask"></div>
    </div>
    <section id="projects">
      <h2>My Projects</h2>
      <div className="about-content-box">
        <p>Add your about content here.</p>
      </div>
    </section>
    <div className="or-spacer">
      <div className="mask"></div>
    </div>
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="about-content-box">
        <p>Add your about content here.</p>
        <p>This is Rudviq Bhavsar</p>
      </div>
    </section>

    <section id="footer">
      <h2>Contact Me</h2>
      
    </section>
      
  </div>
    
  </>
  );
}

export default App;
