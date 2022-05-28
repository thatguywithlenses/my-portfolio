import React from 'react';
import {FaHtml5, FaCss3Alt, FaReact} from 'react-icons/fa';
import {SiJavascript, SiCplusplus} from 'react-icons/si';

const About = () => {
  return (
    
    <div className='aboutsection' data-aos="fade-up" id='about'>
      <div className='about'><span>01. </span>About me</div>
      <div className='aboutpara'>
      Hello My name is Punam Chand. I am currently persuing my B.tech in Production and Industrial enginnering in IIT Roorkee.
      My Interest in Web development started in 2021. My main focus is now on Frontend development / competitive programming.
      currently i am exploring my self into new web technologies.</div>
      
      <div className='skillsect' >
        
        <span>Here are My awesome skills :</span>
        <ul className='skills'>
          <li><FaHtml5 size={45} /></li>
          <li><FaCss3Alt size={45} /></li>
          <li><SiJavascript size={45} /></li>
          <li><FaReact size={45} /></li>
          <li><SiCplusplus size={45} /></li>
          <li>Problem Solving</li>
        </ul>
      </div>

    </div>
  );
}

export default About;