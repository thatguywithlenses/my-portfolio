import React from 'react';

const Contact = () => {
  return (
    <div className='contact' data-aos="fade-up" id='contact'>
      <span >03. What's Next ?</span>
      <div className='para1'>Get In Touch</div>
   
      <div className='future'>I am looking for Frontend Developer Internship. My inbox is always open. You can reach out to me via email.</div>
      
      {/* <a href='' rel='noopener noreferrer' target='_blank' className='btn'>Contact Me</a> */}
      <a href="mailto:punamchandguru@gmail.com?body=My custom mail body" className='btn'>Contact</a>
    </div>
  )
}

export default Contact;