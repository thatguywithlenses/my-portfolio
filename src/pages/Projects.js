import React from 'react'
import {FiFolder, FiGithub} from 'react-icons/fi'
import Data from './data'

const Projects = () => {
  return (
    <div className='project' data-aos="fade-up" id='projects'>
      <div className='title'><span>02. </span>Some Things I've Built  </div>
      <a href='https://github.com/thatguywithlenses' target='_blank' rel='noreferrer'><span>View My Repository</span></a>
      <br/>
      <div className='cardssect'>
        {Data.map((curr)=>{
          return(
         <div className='cards'>
         <div className='folder'>
           <FiFolder size={40} style={{backgroundColor: 'transparent'}} color='#64ffda'/>
           <a href={curr.github}><FiGithub size={30} style={{backgroundColor: 'transparent'}} color='#64ffda'/></a>
         </div>
         <div className='name'><a href={curr.link} target='_blank' rel='noreferrer'>{curr.title}</a></div>
         <div className='desc'>{curr.desc}</div>
         <div className='tech'>
          {curr.tech.map((item)=>{
            
            return <h4 className='item'>{item.name}</h4>
            }
          )}
         </div>
         
       </div>)
        })}
     
      </div>
    </div>
  )
}

export default Projects