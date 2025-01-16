import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter'
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f5e08357-f27e-49ac-9c93-54786aeed7d7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
        <h1 className='title'>Contact me</h1>

        <div className="contact-form">
          <div className="contact-left">
            <h4>Get in Touch</h4>
            <p className='c-para'>Have a question or want to collaborate? Let's connect!</p>
            <div className="c-email">
              <FontAwesomeIcon icon={faEnvelope} /> 
              <a href="mailto:nimsaragunasekara123@gmail.com" className="email-link">nimsaragunasekara123@gmail.com</a>
            </div>
            <div className='c-icon'>
              <a href='https://www.linkedin.com/in/nimsara-gunasekara/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href='https://github.com/SNimsara'><FontAwesomeIcon icon={faGithub} /></a>
              <a href='https://x.com/SNimsaraa'><FontAwesomeIcon icon={faXTwitter} /></a>
              <a href='#'><FontAwesomeIcon icon={faDiscord} /></a>
              </div>
          </div>
          
          <div>
            <form onSubmit={onSubmit} className="contact-right">
              <label>Name</label>
              <input type='text' placeholder='   Enter your name' name='name'/>
              <label>Email</label>
              <input type='email' placeholder='   Enter your email' name='email'/>
              <label>Write your message</label>
              <textarea name='message' rows="6" placeholder='   Enter your message'></textarea>
              <button type='submit' className='button' >Submit</button>
            </form>
          </div>

        </div>
    </div>
  )
}

export default Contact