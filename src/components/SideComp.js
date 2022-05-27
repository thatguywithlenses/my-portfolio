import React from 'react'
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';


const SideComp = () => {
  return (
    <div className='leftcomp'>
      <div>
      <ul>
          <li >
            <a href='https://github.com/thatguywithlenses' ><FiGithub size={20} /></a></li>
          <li >
            <a href='https://www.instagram.com/air_particle/'><FiInstagram size={20} /></a></li>
          <li ><a href='https://twitter.com/pawanguru011'><FiTwitter size={20} /></a></li>
          <li ><a href='https://www.linkedin.com/in/punam-chand-guru-8836a5194'><FiLinkedin size={20} /></a></li>
      </ul>
      </div>
      <div className='verticalline'>
      </div>
     
    </div>
  )
}

export default SideComp