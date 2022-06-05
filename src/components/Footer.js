import React from 'react';
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className='footer'>
     <div className='ftag'>© Designed and Built by Punam Chand Guru</div>
     <div>
      <ul className='bottom'>
          <li >
            <a href='https://github.com/thatguywithlenses' ><FiGithub size={20} /></a></li>
          <li >
            <a href='https://www.instagram.com/thatguywithlenses/'><FiInstagram size={20} /></a></li>
          <li ><a href='https://twitter.com/pawanguru011'><FiTwitter size={20} /></a></li>
          <li ><a href='https://www.linkedin.com/in/punam-chand-guru-8836a5194' ><FiLinkedin size={20} /></a></li>
      </ul>
      </div>
    </div>
  )
}

export default Footer;