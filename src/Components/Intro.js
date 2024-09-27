import React from 'react'
import profileImage from './profile.jpg'
const Intro = () => {
  return (
   <div className='Intro'>
    <div className='Intro-component'>
    
      <h1> Hi,Iam Tayyab</h1>
      <h3>Frontend Developer</h3>
     
      <p>Hi, I'm Tayyab, a passionate software engineering student currently in my 5th semester. I specialize in front-end development with expertise in HTML, CSS, JavaScript, and React.js. My goal is to continuously enhance my skills and knowledge, and I am working towards becoming a full-stack web developer. I enjoy building intuitive, responsive, and visually engaging web applications and am eager to dive deeper into back-end technologies to create complete, end-to-end solutions. I'm excited to contribute to projects that blend creativity with functionality.</p>
      
      <button class="btn">Hire Me</button>
      <div class="SocialMedia-icons">
      <a
            href="https://www.linkedin.com/in/tayyab-basharat-8a896a273/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
      <i class="fa-brands fa-linkedin"></i>
      </a>
      <a
            href="https://github.com/tayyab2468"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
      <i class="fa-brands fa-square-github"></i>
      </a>
      <a
            href="https://x.com/?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
      <i class="fa-brands fa-x-twitter"></i>
      </a>
      <div className='profile'>
      <img src={profileImage} alt="Profile" className="right-image" />
      </div>
    </div>
    </div>
   </div>
   
  )
}

export default Intro