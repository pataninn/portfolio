import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
  return (
    <>
    <div className="contact" id ='contact'>
        <h1>Contact Me</h1>
         <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/share/1Cv9qrZH9T/?mibextid=wwXIfr'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='https://www.linkedin.com/in/patanin-ngaensupalak/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            <Link
              class='social-icon-link envelope'
              to='mailto:patanin_n@hotmail.com'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fas fa-envelope'></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
    
    </>
  )
}

export default Footer