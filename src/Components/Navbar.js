import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  const [isopen, setisopen] = useState(false);
  const [contentvisible,setcontentvisible] =useState(false);
  const toggleMenu = () => {
    setisopen(!isopen);
  };
   const handlenavclick =()=>{
    setisopen(false);
    setcontentvisible(true);
   }
  return (
    <div className="Navbar">
      <div className="logo">Tayyab</div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={isopen ? 'line open' : 'line'}></div>
        <div className={isopen ? 'line open' : 'line'}></div>
        <div className={isopen ? 'line open' : 'line'}></div>
      </div>
      <div className={`navbar-links ${isopen ? 'active' : ''}`}>
        <Link to="/Intro" onClick={handlenavclick}>Introduction</Link>
        <Link to="/AboutMe" onClick={handlenavclick}>About Me</Link>
        <Link to="/ProjectShowcase" onClick={handlenavclick}>Project Showcase</Link>
        <Link to="/Contact"onClick={handlenavclick}>Contact Me</Link>
      </div>
    </div>
  );
};

export default Navbar;
