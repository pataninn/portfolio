import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const handleScroll = (id) => {
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 50; 
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementTop - navbarHeight - 10, 
          behavior: 'smooth',
        });
      }
    };
  return (
    <nav className="navbar">
        <div className="navbar-container">
       <a href='' className='navbar-logo' onClick={(e) => {
                  e.preventDefault(); 
                  handleScroll('aboutMe');
                }}>
        Music
       </a>
       <ul className='nav-item-container'>
       <li className='nav-item'>
        <a href='' className='nav-link' onClick={(e) => {
                  e.preventDefault(); 
                  handleScroll('aboutMe');
                }}>
            Home
        </a>
       </li>
       <li className='nav-item'>
        <a href="" className='nav-link' onClick={(e) => {
                  e.preventDefault(); 
                  handleScroll('myProject');
                }}>
            My Profile
        </a>
       </li>
       <li className='nav-item'>
        <a href="" className='nav-link' onClick={(e) => {
                  e.preventDefault(); 
                  handleScroll('skills');
                }}>
            My Skills
        </a>
       </li>
       <li className='nav-item'>
        <a href="" className='nav-link' onClick={(e) => {
                  e.preventDefault(); 
                  handleScroll('contact');
                }}>
            Contact Me
        </a>
       </li>
       </ul>
       </div>
    </nav>
  )
}

export default Navbar