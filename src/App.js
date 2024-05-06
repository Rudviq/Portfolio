import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import './App.css';

function App() {

  const [text] = useTypewriter({
    words:['DEVELOPER','ENGINEER'],
    loop:{}
  });

  const skillsData = [
    { pic:'react.svg',name: 'React JS', proficiency: 'Experienced' },
    { pic:'python.svg',name: 'Python', proficiency: 'Experienced' },
    { pic:'php.svg',name: 'PHP', proficiency: 'Experienced' },
    { pic:'aws.svg',name: 'AWS', proficiency: 'Experienced' },
    { pic:'js.svg',name: 'JavaScript', proficiency: 'Experienced' },
    { pic:'java.png',name: 'Java', proficiency: 'Experienced' },
    { pic:'docker.png',name: 'Docker', proficiency: 'Experienced' },
    { pic:'SQL.png',name: 'SQL', proficiency: 'Experienced' },
  ];


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
            <h5 className="devName">RUDVIQ BHAVSAR</h5>
            <h5 className='jobpos'> 
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
      <div className="about-content-box">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </section>
    <div className="or-spacer">
      <div className="mask"></div>
    </div>
    <section id="skills">
      <h2>My Skills</h2>
      <div className="about-content-box1">
          <div className="details-container">
            <div className="article-container">
              {/* Map over skills data to generate HTML */}
              {skillsData.map((skill, index) => (
                <article key={index}>
                  <div>
                    <img src={skill.pic} alt="Pic" />
                    <h3>{skill.name}</h3>
                    <p>{skill.proficiency}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      {/* <div className="about-content-box">
        <p>Add your about content here.</p>
      </div> */}
      {/* <div class="details-container">
          
          <div class="article-container">
            <article>
              <img src="github.svg" alt="Experience icon" class="icon"/>
              <div>
                <h3>SQL</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src="github.svg" alt="Experience icon" class="icon"/>
              <div>
                <h3>Python</h3>
                <p>Experienced</p>
              </div>
            </article>

            <article>
              <img src="github.svg" alt="Experience icon" class="icon"/>
              <div>
                <h3>Microsoft Excel</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src="github.svg" alt="Experience icon" class="icon"/>
              <div>
                <h3>Power BI</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src="github.svg" alt="Experience icon" class="icon"/>
              <div>
                <h3>Tableau</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src="github.svg" alt="Experience icon" class="icon"/>
              <div>
                <h3>JIRA</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src="github.svg" alt="Experience icon" class="icon"/>
              <div>
                <h3>AWS</h3>
                <p>Intermediate</p>
              </div>
            </article>
         
            
            <article>
              <img src="github.svg" alt="Experience icon" class="icon"/>
              <div>
                <h3>SAS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src="github.svg" alt="Experience icon" class="icon"/>
              <div>
                <h3>SAP S/4 HANA</h3>
                <p>Intermediate</p>
              </div>
            </article>
            
            
            <article>
              <img src="github.svg" alt="Experience icon" class="icon"/>
              <div>
                <h3>ML Algorithms</h3>
                <p>Intermediate</p>
              </div>
            </article>
            
            
            
          </div>
      </div> */}
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
