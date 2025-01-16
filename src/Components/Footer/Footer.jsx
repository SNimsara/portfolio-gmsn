import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter'
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-s1">
        <ul>
          <li><h3>GMS Nimsara</h3></li>
          <li><FontAwesomeIcon icon={faEnvelope} /> 
            <a href="mailto:nimsaragunasekara123@gmail.com" className="email-link">nimsaragunasekara123@gmail.com</a>
          </li>
          <li>
            <div className='f-icon'>
              <a href='https://www.linkedin.com/in/nimsara-gunasekara/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href='https://github.com/SNimsara'><FontAwesomeIcon icon={faGithub} /></a>
              <a href='https://x.com/SNimsaraa'><FontAwesomeIcon icon={faXTwitter} /></a>
              <a href='https://discord.com/users/snimsara'><FontAwesomeIcon icon={faDiscord} /></a>
            </div>
          </li>
        </ul>
      </div>

      <div className="footer-s2">
        <ul>
          <li><h3>Navigation</h3></li>
          <li><AnchorLink className='anc-link' offset={60} href='#home'>Home</AnchorLink></li>
          <li><AnchorLink className='anc-link' offset={60} href='#about'>About me</AnchorLink></li>
          <li><AnchorLink className='anc-link' offset={60} href='#skills'>Skills</AnchorLink></li>
          <li><AnchorLink className='anc-link' offset={60} href='#project'>Project</AnchorLink></li>
          <li><AnchorLink className='anc-link' offset={60} href='#contact'>Contact</AnchorLink></li>
        </ul>
      </div>

      
    </div>
  )
}

export default Footer