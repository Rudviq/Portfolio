import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import './App.css';
import { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';

function App() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const projectCarouselRef = useRef(null);
  // const [from, setFrom] = useState('');
  // const [subject, setSubject] = useState('');
  // const [body, setBody] = useState('');
  // const [message, setMessage] = useState('');
  let startX = 0;
  let scrollLeft = 0;

  const containerClass = isDarkMode ? 'app' : 'app-light';
  const devName = isDarkMode ? 'devName' : 'dev-light';
  const jobPos = isDarkMode ? 'jobpos' : 'jobPos-light';
  const about = isDarkMode? 'about' : 'about-light';
  const experience = isDarkMode? 'exp' : 'exp-light';
  const skills = isDarkMode? 'skills' : 'skills-light';
  const contact = isDarkMode? 'contact': 'contact-light';
  const project = isDarkMode? 'projects': 'projects-light';
  const middle = isDarkMode? 'middle' : 'middle-light';

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
      link: "https://github.com/Rudviq/EcoMarket"
    },
    {
      title: "Wishlist Wanderers",
      description: "A Platform to find people having similar interests",
      image: "WishlistWanderers.jpg",
      link: "https://github.com/Rudviq/WishlistWanderers"
    },
    {
      title: "Social Me",
      description: "Get notified if your friend is in proximity",
      image: "SocialMe.jpg",
      link: "https://github.com/Rudviq/SocialMe"
    },
    {
      title: "EduMetric",
      description: "A Student Management Web Application",
      image: "EduMetrics.png",
      link: "https://github.com/Rudviq/Edumetrics-React"
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

    const bodyMessage = `Full Name: ${formData.firstName} ${formData.lastName}<br>Email: ${formData.email}<br>${formData.message}`;
    // const bodyMessage = 'Full Name:'+ formData.firstName+' '+formData.lastName+'<br>' +'Email: '+formData.email+ '<br>'+ formData.message; 
    console.log(bodyMessage);
    // Add your form submission logic here
    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "rudviqbhavsar@gmail.com",
      Password: "ED012BAC04069E381FD299309B2F0E7A01D7",
      To: "rudviqbhavsar@gmail.com",
      From: "rudviqbhavsar@gmail.com",
      Subject: "Message from your Portfolio",
      Body: bodyMessage,
    }).then(
      message =>{ 
        if(message === 'OK'){
          Swal.fire({
            title: "Good job!",
            text: "Message sent successfully!",
            icon: "success"
          });
        }
    }
    ).catch(
      error => alert(`Failed to send email: ${error}`)
    );

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

  const openPdf = ()=>{
    window.open('RudviqBhavsar___Resume.pdf', '_blank');
  }

  

  useEffect(() => {
    // Function to check if the screen widths is less than a certain threshold
    const checkMobileView = () => {
      const screenWidth = window.innerWidth;
      console.log(screenWidth);
      setIsMobileView(screenWidth < 768); // Adjust threshold as needed
      // 768
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

  const [startIndex, setStartIndex] = useState(0);
  const projectsPerPage = 3;
  const nxt = '>';
  const prv = '<';

  const nextProjects = () => {
    const nextIndex = startIndex + projectsPerPage;
    if (nextIndex < projects.length) {
      setStartIndex(nextIndex);
    }
  };

  const prevProjects = () => {
    const prevIndex = startIndex - projectsPerPage;
    if (prevIndex >= 0) {
      setStartIndex(prevIndex);
    }
  };

  const highlightStyle = {
    color: '#724fff',
    fontWeight: 'bold',
  };


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
        <div className={middle}>
          <ul>
            <li><a href={isDarkMode ? "#about" : "#about-light"}>ABOUT</a></li>
            <li><a href={isDarkMode ? "#experience" : "#experience-light"}>EXPERIENCE</a></li>
            <li><a href={isDarkMode ? "#skills" : "#skills-light"}>SKILLS</a></li>
            <li><a href={isDarkMode ? "#projects" : "#projects-light"}>PROJECTS</a></li>
            <li><a href={isDarkMode ? "#contact" : "#contact-light"}>CONTACT</a></li>
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
            <img src='./IMG_2318.jpg' alt="Profile" className="profile-image"/>
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
              {/* <a  href={CVFile} download="RudviqBhavsar___Resume.pdf" className="download-button">
                <h4 style={{color: isDarkMode?'white':'black'}}>Download CV</h4>
              </a> */}
              <button onClick={openPdf}>
                <h4 style={{color:'white'}}>Download CV</h4>
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
      <h1 class="big">About</h1>
      <h2>About Me</h2>
      {/* <div className="about-content-box">
        <p>A highly motivated Computer Science graduate with over 2 years of experience in full-stack development, database management, and software engineering. Proficient in a wide range of technologies, including C, C++, Python, SQL, Java, JavaScript, React, TypeScript, and various frameworks and tools. Adept at leveraging cutting-edge solutions to drive operational efficiency and enhance user experiences.</p>
        <p>
            Dedicated to delivering high-quality projects within demanding timelines, with a proven track record of successful collaborations in Agile environments. Possess exceptional problem-solving abilities, attention to detail, and a strong work ethic. Continuously seeking opportunities to expand knowledge and stay updated with industry trends.
        </p><p>
            Committed to contributing innovative solutions that make a meaningful impact, whether developing cutting-edge applications, optimizing database systems, or implementing software solutions to drive business growth.</p>
      </div> */}
      <div class="about-content-box">
      <p>
        A highly motivated <span style={highlightStyle}>Computer Science graduate</span> with over{' '}
        <span style={highlightStyle}>2 years of experience</span> in <span style={highlightStyle}>full-stack development</span>,{' '}
        <span style={highlightStyle}>database management</span>, and <span style={highlightStyle}>software engineering</span>. Proficient in a wide range of technologies, including{' '}
        <span style={highlightStyle}>C</span>, <span style={highlightStyle}>C++</span>, <span style={highlightStyle}>Python</span>,{' '}
        <span style={highlightStyle}>SQL</span>, <span style={highlightStyle}>Java</span>, <span style={highlightStyle}>JavaScript</span>,{' '}
        <span style={highlightStyle}>React</span>, <span style={highlightStyle}>TypeScript</span>, and various frameworks and tools. Adept at leveraging cutting-edge solutions to drive operational efficiency and enhance user experiences.
      </p>
      <p>
        Dedicated to delivering <span style={highlightStyle}>high-quality projects</span> within demanding timelines, with a proven track record of successful collaborations in{' '}
        <span style={highlightStyle}>Agile environments</span>. Possess exceptional <span style={highlightStyle}>problem-solving abilities</span>,{' '}
        <span style={highlightStyle}>attention to detail</span>, and a <span style={highlightStyle}>strong work ethic</span>. Continuously seeking opportunities to expand knowledge and stay updated with industry trends.
      </p>
      <p>
        Committed to contributing <span style={highlightStyle}>innovative solutions</span> that make a meaningful impact, whether developing{' '}
        <span style={highlightStyle}>cutting-edge applications</span>, <span style={highlightStyle}>optimizing database systems</span>, or implementing{' '}
        <span style={highlightStyle}>software solutions</span> to drive business growth.
      </p>
    </div>

    </section>
    <div className="or-spacer">
      <div className="mask"></div>
    </div>
    <section id={experience}>
      <h1 class="big">Experience</h1>
      <h2>Experience & Education</h2>

      {isMobileView?(
       <>
      <div className="project-box">
          <div class="education-container">
            <div class="logo-container">
              <img src="./sppu.png" alt="University Logo" className="logo" style={{width:'105px', height:'auto'}}/>
              <h3 class="university-title">University of Pune</h3>
            </div>
            <div class="details-container" style={{width:'100%', padding:0}}>
              
              <p class="degree">Bachelor of Engineering</p>
              <p class="major">Information Technology</p>
              <p class="year">2016 - 2020</p>
            </div>
          </div>
      </div>

      <div className="project-box">
          <div class="education-container">
            <div class="logo-container" style={{width:'100%',justifyContent:'center'}}>
              <img src="./infosys.png" alt="University Logo" className="logo" style={{width:'105px',borderRadius:'0', height:'auto'}}/>
              {/* <h3 class="university-title">University of Pune</h3> */}
            </div>
            <div class="details-container" style={{width:'100%', padding:0}}>
              
              <p class="degree">Systems Engineer</p>
              <p class="year">2020 - 2022</p>
            </div>
          </div>
      </div>
      <div className="project-box">
          <div class="education-container">
            <div class="logo-container">
              <img src="./uta.png" alt="University Logo" className="logo" style={{width:'105px',borderRadius:'0', height:'auto'}}/>
              <h3 class="university-title">University of Texas at Arlington</h3>
            </div>
            <div class="details-container" style={{width:'100%', padding:0}}>
              
              <p class="degree">Master of Science</p>
              <p class="major">Computer Science</p>
              <p class="year">2022 - 2024</p>
            </div>
          </div>
      </div>

      <div className="project-box">
          <div class="education-container">
            <div class="logo-container">
              <img src="./uta.png" alt="University Logo" className="logo" style={{width:'105px',borderRadius:'0', height:'auto'}}/>
              <h3 class="university-title">University of Texas at Arlington</h3>
            </div>
            <div class="details-container" style={{width:'100%', padding:0}}>
              
              <p class="degree">Student Computer Assistant</p>
              <p class="year">2022 - 2024</p>
            </div>
          </div>
      </div>
      </>
       
       ):(
       
       <img src="./Experience.png" alt="Experience" className='expImg'/>
       
       )}
      
      {/* <div className="about-content-box">
        <p>A graduate student and a passionate problem solver using technology. Enthusiast about Software development and Data analytics and willing to seek experience through innovation in related fields. Believes in teamwork and plans to work in an environment that allows expanding capability to learn new technologies.
My goal is to bring innovation to problem solving methods and develop solutions that complement the approach to organization.</p>
      </div> */}
    </section>
    <div className="or-spacer">
      <div className="mask"></div>
    </div>
    <section id={skills}>
    <h1 class="big">Skills</h1>
      <h2>My Skills</h2>
      <div className="about-content-box1">
          <div className="details-container">
            <div className="article-container">
              {skillsData.map((skill, index) => (
                <article key={index}>
                  <div>
                    <img src={skill.pic} alt="Pic" />
                    <h3>{skill.name}</h3>
                    {/* <p>{skill.proficiency}</p> */}
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
      <h1 class="big">Projects</h1>
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
              <p className="project-description">{project.description}</p>
              <a href={project.link}>View Project</a>
            </div>
          ))}
        </div>
      ) : (
        <>
        <div className="project-container">
          {/* {projects.map((project, index) => (
            <div key={index} className="project-box">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link}>View Project</a>
            </div>
          ))} */}
          {projects.slice(startIndex, startIndex + projectsPerPage).map((project, index) => (
          <div key={index} className="project-box">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
        </div>
        <div className="button-container">
        <button onClick={prevProjects} className="prv" style={{color:isDarkMode?'white':'black'}} disabled={startIndex === 0}>{prv}</button>
        <button onClick={nextProjects} className="nxt" style={{color:isDarkMode?'white':'black'}} disabled={startIndex + projectsPerPage >= projects.length}>{nxt}</button>
      </div>
      </>
      )}
    </section>
    <div className="or-spacer">
      <div className="mask"></div>
    </div>
    <section id={contact}>
      <h1 class="big">Contact</h1>
      <h2>Contact Me</h2>
      <div className="contact-content-box">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <label htmlFor="firstName">Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}

                  autoComplete='off'
                  required
                />
            {/* <div className="name-group" id="name-group">
              <div className="form-group-f" >
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
              <div className="form-group-f">
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
            </div> */}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              
              autoComplete='off'
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              // onChange={(e) => setFrom(e.target.value)}
              autoComplete='off'
              // required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              // onChange={(e) => setBody(e.target.value)}
              autoComplete='off'
              // required
            ></textarea>
          </div>
          <button id="cntct-sub" type="submit">Submit</button>
        </form>
        
      </div>
    </section>
    <footer style={{paddingTop:isMobileView?'0px':'20px'}}>
      <div className="left-side">
        <p>Rudviq Sunil Bhavsar</p>
        <p>rudviq.bhavsar02@gmail.com</p>
        <p>(682)-376-3312</p>
      </div>
      <div className="right-side">
        
        
          <div className="logo-footer">
            <img src="./RBLogo.png" alt="RB" />
          </div>
        
        <div className='footer_img'>
          <a href="https://www.linkedin.com/in/rudviqbhavsar">
            <img src="linkedin_color.svg" alt="Linkedin" />
          </a>
          <a href="mailto:rudviq.bhavsar02@gmail.com">
            <img src="gmail.svg" alt="Gmail" />
          </a>
          <a href="https://www.instagram.com/rudvik02">
            <img src="insta.svg" alt="Insta" />
          </a>    
        </div>
      </div>
    </footer>
  </div>
  
    
  </>
  );
}

export default App;
