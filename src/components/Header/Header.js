import React from 'react';
import Resume from './_Resume.pdf';



const Header = () => {
  return (
    
    <div className='header' data-aos="fade-up" id='home'>
        <span>Hi, my name is</span>
        <div className='para1'>Punam Chand Guru.</div>
        <div className='para2'>I build things for the web.</div>
        <div className='para3'>I am Frontend developer currently finding opportunity in a highly technical company
            where I could utilize my skills in Web Design, 
            Front-End Web Development.</div>
            <a href={Resume} download className='btn'>Resume</a>

           
            
    </div>
            
    
  )
}

export default Header;