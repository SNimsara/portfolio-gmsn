import React from 'react'
import './About.css'
import proPic2 from '../../assets/proPic2.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <h1 className='title'>About me</h1>
        <div className='about-info'>
            <div className="about-pic">
                <img src={proPic2} alt="image" />
            </div>
            <div className="about-p">
                <h3>Front-End Developer / UI Designer</h3>
                <p>I'm a software engineering undergraduate driven by a passion for technology and a desire to create impactful solutions. With a focus on UI/UX design and web development, I enjoy transforming ideas into functional, user-friendly applications. I am constantly learning and exploring new technologies to enhance my skills and deliver high-quality, efficient solutions. My aim is to use my technical knowledge and creativity to build products that improve user experiences and make a positive difference in the world.</p>
                <h5>My Services</h5>
                <ul>
                  <li>Web Development</li>
                  <li>UI Design</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About