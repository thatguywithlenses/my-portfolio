import React from 'react';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header/Header';


const Show = () => {
  return (
    <div>
    <Header />
    <About />
    <Projects />
    <Contact />
    </div>
  )
}

export default Show;