import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import './App.css';
import { useState, useRef, useEffect } from 'react';

function App() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const projectCarouselRef = useRef(null);
  let startX = 0;
  let scrollLeft = 0;

  const containerClass = isDarkMode ? 'app' : 'app-light';
  const devName = isDarkMode ? 'devName' : 'dev-light';
  const jobPos = isDarkMode ? 'jobpos' : 'jobPos-light';
  const about = isDarkMode? 'about' : 'about-light';
  const skills = isDarkMode? 'skills' : 'skills-light';
  const contact = isDarkMode? 'contact': 'contact-light';
  const project = isDarkMode? 'projects': 'projects-light';

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

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
    scrollLeft = projectCarouselRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    const x = e.touches[0].clientX;
    const walk = (x - startX) * 3; // Adjust scroll speed if needed
    projectCarouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    startX = 0;
  };

  const projects = [
    {
      title: "RUDdle",
      description: "Game to guess 5 Lettered Word",
      image: "RUDdle.jpg",
      link: "https://ruddle.netlify.app/"
    },
    {
      title: "EcoMarket",
      description: "Ecommerce Platform to order Handcrafted Items",
      image: "EcoMarket.jpg",
      link: "#"
    },
    {
      title: "Wishlist Wanderers",
      description: "A Platform to find people having similar interests",
      image: "WishlistWanderers.jpg",
      link: "#"
    },
    {
      title: "Social Me",
      description: "Get notified if your friend is in proximity",
      image: "SocialMe.jpg",
      link: "#"
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      image: "profile.jpg",
      link: "#"
    },
    {
      title: "Project 3",
      description: "Description of Project 3",
      image: "profile.jpg",
      link: "#"
    }
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // Clear the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };    

  

  useEffect(() => {
    // Function to check if the screen width is less than a certain threshold
    const checkMobileView = () => {
      const screenWidth = window.innerWidth;
      setIsMobileView(screenWidth < 768); // Adjust threshold as needed
    };

    // Initial check on mount
    checkMobileView();

    // Event listener to check for screen width changes
    window.addEventListener('resize', checkMobileView);

    // Cleanup function to remove event listener on unmount
    return () => {
      window.removeEventListener('resize', checkMobileView);
    };
  }, []);



  return (
    <>
    <div className={containerClass} id="app" >
    <header>
      {isDarkMode ? (
        <div className="logo">
          <img src="./RBLogo.png" alt="RB" />
        </div>
      ) : (
        <div className="logo-light">
          <img src="./RBLogo_light.png" alt="RB" />
        </div>
      )}
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
          {/* <div className="trial">
            <button>
              <h4>Download CV</h4>
              
              </button>
          </div> */}
          <label className="switch">
            <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
            <span className="slider round">{isDarkMode?(<img src="sun.png" alt="moon" />):(<img src="moon.png" style={{marginLeft:'30px'}} alt="moon" />)}</span>
            {/* <img src="sun.png" alt="" /> */}
          </label>
          {/* <div className="toggle-btn" onClick={toggleMode}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</div> */}
        </div>
    </header>
    <section id="header-content">
        <div className="header-content-container">
        <div className="center">
        <div className="image-name-container">
          <div className='demo-container'>
          </div>
          <div className="image-container">
            <img src='./IMG_0365.png' alt="Profile" className="profile-image"/>
          </div>
          <div className="name">
            <h5 className={devName}>RUDVIQ BHAVSAR</h5>   
            <h5 className={jobPos}> 
              <span> SOFTWARE {text}</span>
              <span className="custom-cursor"></span>
              <Cursor style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '5px', width: '8px', height: '40px', backgroundColor: 'green' }}/>
            </h5>
            <div id="socials-container">
              {isDarkMode?(<><img src="./linkedin.svg" alt="My LinkedIn profile" className="icon" onClick={() => window.open('https://www.linkedin.com/in/rudviqbhavsar/', '_blank')}/>
                <img src="./github.svg" alt="My Github profile" className="icon" onClick={() => window.open('https://github.com/Rudviq', '_blank')}/>
                </>
              ):
              (<>
                <img src="./linkedin_dark.svg" alt="My LinkedIn profile" className="icon" onClick={() => window.open('https://www.linkedin.com/in/rudviqbhavsar/', '_blank')}/>
                <img src="./github_dark.png" alt="My Github profile" className="icon" onClick={() => window.open('https://github.com/Rudviq', '_blank')}/>
                </>
              )}
              </div>
            <div className="trial">
              <button>
                <h4 style={{color: isDarkMode?'white':'black'}}>Download CV</h4>
                </button>
            </div>
          </div>
          </div>
          </div>
        </div>
    </section>
    <div className="or-spacer">
      <div className="mask"></div>
    </div>
    <section id={about}>
      <h2>About Me</h2>
      <div className="about-content-box">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </section>
    <div className="or-spacer">
      <div className="mask"></div>
    </div>
    <section id={skills}>
      <h2>My Skills</h2>
      <div className="about-content-box1">
          <div className="details-container">
            <div className="article-container">
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
      
    </section>
    <div className="or-spacer">
      <div className="mask"></div>
    </div>
    <section id={project}>
      <h2>My Projects</h2>
      
      {isMobileView ? (
        <div
          className="project-carousel"
          ref={projectCarouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {projects.map((project, index) => (
            <div key={index} className="project-box">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>View Project</a>
            </div>
          ))}
        </div>
      ) : (
        <div className="project-container">
          {projects.map((project, index) => (
            <div key={index} className="project-box">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>View Project</a>
            </div>
          ))}
        </div>
      )}
    </section>
    <div className="or-spacer">
      <div className="mask"></div>
    </div>
    <section id={contact}>
      <h2>Contact Me</h2>
      <div className="contact-content-box">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="name-group" id="name-group">
            <div className="form-group" >
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button id="cntct-sub" type="submit">Submit</button>
      </form>
      </div>
    </section>
      
  </div>
    
  </>
  );
}

export default App;
