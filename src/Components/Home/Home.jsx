import React from 'react'
import './Home.css'
import proPic1 from '../../assets/proPic1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter'
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord'
import cv from '../../assets/cv.pdf'

const Home = () => {
  return (
    <div id='home' className='home'>
      
      <div className='pro-content'>
        <h4>Hello, i'm</h4>
        <h1>G.M.S. Nimsara</h1>
        <h2>I'm a <span>Software Engineering Undergraduate</span></h2>
        <p>Hi, I'm G.M.S. Nimsara, a dedicated software engineering undergraduate with a strong passion for crafting intuitive and functional digital experiences. With skills in web development and a love for design, I strive to bring ideas to life and contribute to impactful projects.</p>
        
        <div className='s-icon'>
          <a className='icon-link' href='https://www.linkedin.com/in/nimsara-gunasekara/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a className='icon-link' href='https://github.com/SNimsara'><FontAwesomeIcon icon={faGithub} /></a>
          <a className='icon-link' href='https://x.com/SNimsaraa'><FontAwesomeIcon icon={faXTwitter} /></a>
          <a className='icon-link' href='https://discord.com/users/snimsara'><FontAwesomeIcon icon={faDiscord} /></a>
        </div>
        
        <div>
          <button className='button'><a href={cv} download="cv.pdf" className='cv'>Download CV</a></button>
        </div>
      </div>

      <div className='pro-pic'>
        <img src={proPic1} alt="profile pic" />
      </div>

    </div>
  )
}

export default Home