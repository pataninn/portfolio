import React from 'react'
import './heroHome.css'
function heroHome() {
  return (
    <>
    <div className="aboutMe" id = 'aboutMe'>
            <div className="details">
            <h1 className="myName">About Me</h1>
            <p className='description'> 
              Hi! I’m Patanin Ngaensupalak, but you can call me Music. I’m a Computer Engineering student at the University of Hong Kong who loves figuring out how things work. I enjoy mixing creativity with logic — whether it’s building something from scratch, fixing a weird bug, or just experimenting to see what happens. What started as simple curiosity has grown into a passion for creating things that blend hardware and software in meaningful ways. I love learning by doing, exploring new ideas, and seeing how technology can actually make a difference in everyday life.
            </p>
            <h2 
  className='Edu' 
  style={{ 
    fontFamily: "'Merriweather', serif", 
    fontWeight: 700, 
    color: '#0c0d20' 
  }}
>
  Education
</h2>
            <ul className="education">
          <li>
            <span>
              Primary to Middle School — Kasetsart University Laboratory School
            </span>
            <a href='https://www.kus.ku.ac.th' target="_blank" rel="noopener noreferrer">
            <img src="/kaset.png" alt="Kaset logo" className="school-logo" />
            </a>
          </li>
          <li>            
            <span>
              High School — Kamnoetvidya Science Academy
            </span>
            <a href='https://www.kvis.ac.th' target="_blank" rel="noopener noreferrer">
            <img src="/kvis.png" alt="KVIS logo" className="school-logo" />
            </a>
          </li>
          <li>
            <span>
              Undergraduate (Current) — The University of Hong Kong
            </span>
            <a href='https://www.hku.hk' target="_blank" rel="noopener noreferrer">
            <img src="hku.png" alt="HKU logo" className="school-logo" />
            </a>
          </li>
        </ul>
        </div>
            <div className="img-container">
            <img src="\myPic.png" alt="" className="myface" />
            </div>
          </div>
    </>
  )
}

export default heroHome