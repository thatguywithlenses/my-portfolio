import React,{useState, useEffect, useRef} from 'react';
import {FiMenu} from 'react-icons/fi';
import { HashLink as Link} from 'react-router-hash-link';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <div className='nav' data-aos="fade-right">
        <div className='logo'>
         <img src='logoS.svg' alt='logo' className='logoimg'></img>
         <button className='nav-toggle' onClick={toggleLinks}><FiMenu /></button>
        </div>
        <div className='links' ref={linksContainerRef}>
            <ul className='list' ref={linksRef}>
             <li>
               <a href='#home'><span>01. </span>Home</a>
             </li>
             <li>
               <a href='#about'><span>02. </span>About</a>
             </li>
             <li>
               <Link smooth to='#projects'><span>03. </span>Projects</Link>
             </li>
             <li>
               <Link smooth to='#contact'><span>04. </span>Contact</Link>
             </li>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;